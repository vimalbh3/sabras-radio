import { NextResponse } from 'next/server'
import { fullSchedule } from '@/data'

const ICECAST_URL = 'http://radio.canstream.co.uk:8025/status-json.xsl'

// ── Helpers ────────────────────────────────────────────────────────────────

function timeToMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + (m ?? 0)
}

/** Returns the current show/presenter for the UK clock right now. */
function getCurrentShowFromSchedule() {
  const now = new Date()

  // UK local time parts (handles BST/GMT automatically)
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const day       = parts.find(p => p.type === 'weekday')?.value ?? ''
  const hour      = parts.find(p => p.type === 'hour')?.value   ?? '00'
  const minute    = parts.find(p => p.type === 'minute')?.value ?? '00'
  const nowMins   = timeToMinutes(`${hour}:${minute}`)

  const daySchedule = fullSchedule.find(d => d.day === day)
  if (!daySchedule) return null

  // Walk slots; keep the last one whose start ≤ now
  let currentIndex = 0
  for (let i = 0; i < daySchedule.slots.length; i++) {
    if (timeToMinutes(daySchedule.slots[i].time) <= nowMins) {
      currentIndex = i
    }
  }

  const current = daySchedule.slots[currentIndex]
  const next    = daySchedule.slots[currentIndex + 1] ?? null

  return { current, next, day }
}

// ── Route Handler ──────────────────────────────────────────────────────────

export async function GET() {
  // 1. Schedule-based show (always available, no network needed)
  const scheduleInfo = getCurrentShowFromSchedule()
  const show         = scheduleInfo?.current?.show      ?? 'Sabras Radio'
  const presenter    = scheduleInfo?.current?.presenter ?? ''
  const nextShow     = scheduleInfo?.next?.show         ?? null
  const nextPresenter = scheduleInfo?.next?.presenter   ?? null
  const nextTime     = scheduleInfo?.next?.time         ?? null
  const day          = scheduleInfo?.day                ?? ''

  // 2. Live stream metadata from Canstream (best-effort)
  let track: string | null     = null
  let listeners: number | null = null
  let isLive                   = false

  try {
    const res = await fetch(ICECAST_URL, {
      // Never cache — always fetch fresh data
      cache: 'no-store',
      signal: AbortSignal.timeout(4_000),
    })

    if (res.ok) {
      const json = await res.json()
      // Icecast returns either an object or an array when multiple mountpoints exist
      const source = Array.isArray(json?.icestats?.source)
        ? json.icestats.source[0]
        : json?.icestats?.source

      if (source) {
        isLive    = true
        listeners = source.listeners  ?? null
        // `title` is "Track Name - Artist" when the playout system pushes it
        track     = source.title      ?? null
      }
    }
  } catch {
    // Canstream unreachable — fall through with schedule data only
  }

  return NextResponse.json(
    { isLive, show, presenter, nextShow, nextPresenter, nextTime, track, listeners, day },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
