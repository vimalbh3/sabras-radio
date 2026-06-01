'use client'

import { useState, useEffect } from 'react'

export interface NowPlayingData {
  isLive:        boolean
  show:          string
  presenter:     string
  nextShow:      string | null
  nextPresenter: string | null
  nextTime:      string | null
  track:         string | null
  listeners:     number | null
  day:           string
}

const FALLBACK: NowPlayingData = {
  isLive:        false,
  show:          'Sabras Radio',
  presenter:     '',
  nextShow:      null,
  nextPresenter: null,
  nextTime:      null,
  track:         null,
  listeners:     null,
  day:           '',
}

export function useNowPlaying(pollMs = 30_000): NowPlayingData {
  const [data, setData] = useState<NowPlayingData>(FALLBACK)

  useEffect(() => {
    let active = true

    async function refresh() {
      try {
        const res  = await fetch('/api/now-playing')
        if (!res.ok) return
        const json = (await res.json()) as NowPlayingData
        if (active) setData(json)
      } catch {
        // Network error — keep previous value
      }
    }

    refresh()
    const id = setInterval(refresh, pollMs)
    return () => { active = false; clearInterval(id) }
  }, [pollMs])

  return data
}
