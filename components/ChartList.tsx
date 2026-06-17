'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { CHART } from '@/data/chart'

const ART_GRADIENTS = [
  'linear-gradient(145deg,#C33764 0%,#1D2671 100%)',
  'linear-gradient(145deg,#8360c3 0%,#2ebf91 100%)',
  'linear-gradient(145deg,#ee0979 0%,#ff6a00 100%)',
  'linear-gradient(145deg,#4776e6 0%,#8e54e9 100%)',
  'linear-gradient(145deg,#b21f1f 0%,#fdbb2d 100%)',
  'linear-gradient(145deg,#1e3c72 0%,#2a5298 100%)',
  'linear-gradient(145deg,#f953c6 0%,#b91d73 100%)',
  'linear-gradient(145deg,#11998e 0%,#38ef7d 100%)',
]

function getMovement(rank: number, last: number | 'new') {
  if (last === 'new') return { label: 'NEW', color: 'var(--color-gold-muted)', bg: 'rgba(184,149,95,0.15)' }
  const d = last - rank
  if (d > 0) return { label: `▲ ${d}`, color: '#4ade80', bg: 'rgba(74,222,128,0.1)' }
  if (d < 0) return { label: `▼ ${Math.abs(d)}`, color: '#f87171', bg: 'rgba(248,113,113,0.1)' }
  return { label: '—', color: 'rgba(216,198,165,0.45)', bg: 'transparent' }
}

const SECTIONS = [
  { label: 'Top 10',  from: 0,  to: 10 },
  { label: '11 – 20', from: 10, to: 20 },
  { label: '21 – 30', from: 20, to: 30 },
]

export default function ChartList() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div style={{ background: 'var(--color-ivory)' }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">
        {SECTIONS.map(({ label, from, to }) => (
          <div key={label} className="mb-14">
            {/* Section divider */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="font-sans text-[0.58rem] tracking-[0.35em] uppercase font-semibold flex-shrink-0"
                style={{ color: 'var(--color-gold-muted)' }}
              >
                {label}
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(216,198,165,0.25)' }} />
            </div>

            <div className="divide-y" style={{ borderColor: 'rgba(216,198,165,0.12)' }}>
              {CHART.slice(from, to).map((entry) => {
                const mv      = getMovement(entry.rank, entry.lastWeek)
                const art     = ART_GRADIENTS[(entry.rank - 1) % ART_GRADIENTS.length]
                const open    = expanded === entry.rank
                const isOne   = entry.rank === 1
                const initials = entry.title.split(' ').slice(0, 2).map(w => w[0]).join('')

                return (
                  <div key={entry.rank}>
                    {/* Row */}
                    <div
                      className="flex items-center gap-3 md:gap-5 py-3 px-3 transition-colors duration-150 cursor-pointer group"
                      style={{
                        background: open
                          ? 'var(--color-navy)'
                          : isOne
                          ? 'rgba(184,149,95,0.05)'
                          : undefined,
                        borderLeft: isOne
                          ? '2px solid var(--color-gold-muted)'
                          : open
                          ? '2px solid var(--color-gold-muted)'
                          : '2px solid transparent',
                      }}
                      onClick={() => setExpanded(open ? null : entry.rank)}
                    >
                      {/* Rank */}
                      <div className="flex-shrink-0 w-8 md:w-10 text-right select-none">
                        <span
                          className="font-serif tabular-nums"
                          style={{
                            fontSize: entry.rank < 10 ? '1.6rem' : '1.25rem',
                            fontWeight: 300,
                            lineHeight: 1,
                            color: open
                              ? 'var(--color-gold-champagne)'
                              : isOne
                              ? 'var(--color-gold-muted)'
                              : 'rgba(15,28,63,0.22)',
                          }}
                        >
                          {entry.rank}
                        </span>
                      </div>

                      {/* Album art */}
                      <div
                        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-[2px] flex items-center justify-center"
                        style={{ background: art }}
                      >
                        <span
                          className="font-serif font-light text-sm select-none"
                          style={{ color: 'rgba(255,255,255,0.65)' }}
                        >
                          {initials}
                        </span>
                      </div>

                      {/* Title + artist */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-serif text-base md:text-lg leading-tight truncate"
                          style={{ color: open ? 'var(--color-ivory)' : 'var(--color-navy)' }}
                        >
                          {entry.title}
                        </p>
                        <p
                          className="font-sans text-[0.7rem] truncate mt-0.5"
                          style={{
                            color: open
                              ? 'var(--color-gold-champagne)'
                              : 'var(--color-gold-muted)',
                            opacity: 0.85,
                          }}
                        >
                          {entry.artist}
                        </p>
                      </div>

                      {/* Stats — hidden on small screens */}
                      <div className="hidden sm:flex items-center gap-4 md:gap-6 flex-shrink-0">
                        <span
                          className="font-sans text-[0.58rem] font-semibold tracking-wider px-2 py-1 rounded-sm"
                          style={{ background: mv.bg, color: mv.color }}
                        >
                          {mv.label}
                        </span>
                        <div className="hidden md:block text-right">
                          <p className="font-sans text-[0.55rem] uppercase tracking-wider" style={{ color: open ? 'rgba(216,198,165,0.4)' : 'rgba(15,28,63,0.3)' }}>Weeks</p>
                          <p className="font-serif text-sm" style={{ color: open ? 'var(--color-ivory)' : 'var(--color-navy)' }}>{entry.weeks}</p>
                        </div>
                        <div className="hidden lg:block text-right">
                          <p className="font-sans text-[0.55rem] uppercase tracking-wider" style={{ color: open ? 'rgba(216,198,165,0.4)' : 'rgba(15,28,63,0.3)' }}>Peak</p>
                          <p className="font-serif text-sm" style={{ color: open ? 'var(--color-ivory)' : 'var(--color-navy)' }}>#{entry.peak}</p>
                        </div>
                      </div>

                      {/* Play / close button */}
                      <button
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                        style={{
                          background: open ? 'var(--color-gold-muted)' : 'transparent',
                          border: `1px solid ${open ? 'var(--color-gold-muted)' : 'rgba(184,149,95,0.35)'}`,
                          color: open ? 'var(--color-ivory)' : 'var(--color-gold-muted)',
                        }}
                        aria-label={open ? 'Close' : 'Preview'}
                        onClick={(e) => { e.stopPropagation(); setExpanded(open ? null : entry.rank) }}
                      >
                        {open
                          ? <X size={13} />
                          : <Play size={12} fill="currentColor" />
                        }
                      </button>
                    </div>

                    {/* Expanded panel */}
                    {open && (
                      <div
                        className="px-4 py-4"
                        style={{
                          background: 'var(--color-navy-dark)',
                          borderLeft: '2px solid var(--color-gold-muted)',
                        }}
                      >
                        {entry.spotifyId ? (
                          <iframe
                            src={`https://open.spotify.com/embed/track/${entry.spotifyId}?utm_source=generator&theme=0`}
                            width="100%"
                            height="80"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            style={{ border: 'none', borderRadius: '4px', display: 'block' }}
                            title={`${entry.title} – ${entry.artist}`}
                          />
                        ) : (
                          <div className="flex items-center gap-3 py-1">
                            <div className="w-0.5 h-8 rounded-full flex-shrink-0" style={{ background: 'var(--color-gold-muted)' }} />
                            <div>
                              <p className="font-serif text-sm" style={{ color: 'var(--color-ivory)' }}>
                                {entry.title}
                              </p>
                              <p className="font-sans text-[0.65rem] mt-0.5" style={{ color: 'rgba(216,198,165,0.55)' }}>
                                Add a Spotify track ID to enable the preview ·{' '}
                                <a
                                  href={`https://open.spotify.com/search/${encodeURIComponent(entry.title + ' ' + entry.artist)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline"
                                  style={{ color: 'var(--color-gold-champagne)' }}
                                  onClick={e => e.stopPropagation()}
                                >
                                  Find on Spotify →
                                </a>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
