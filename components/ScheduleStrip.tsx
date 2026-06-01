import React from 'react'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { scheduleToday } from '@/data'

const labelStyles: Record<string, React.CSSProperties> = {
  NOW:     { background: 'var(--color-gold-muted)',   color: 'var(--color-ivory)' },
  NEXT:    { background: 'rgba(216,198,165,0.2)',      color: 'var(--color-gold-champagne)' },
  LATER:   { background: 'rgba(216,198,165,0.12)',     color: 'var(--color-gold-champagne)' },
  TONIGHT: { background: 'rgba(216,198,165,0.08)',     color: 'var(--color-gold-champagne)' },
}

export default function ScheduleStrip() {
  return (
    <section style={{ background: 'var(--color-navy)' }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <p
              className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-2"
              style={{ color: 'var(--color-gold-muted)' }}
            >
              On Air Today
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-light"
              style={{ color: 'var(--color-ivory)' }}
            >
              Today&apos;s Schedule
            </h2>
          </div>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase font-semibold transition-colors hover:opacity-100 self-start sm:self-auto"
            style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}
          >
            View Full Schedule <ArrowRight size={13} />
          </Link>
        </div>

        {/* Schedule items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(216,198,165,0.08)' }}
        >
          {scheduleToday.map((item, i) => (
            <div
              key={item.label}
              className="relative p-6 md:p-8 transition-colors duration-200 hover:bg-navy-mid"
              style={{
                background: i === 0 ? 'rgba(184,149,95,0.08)' : 'var(--color-navy)',
                borderLeft: i === 0 ? '2px solid var(--color-gold-muted)' : 'none',
              }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-sans text-[0.55rem] tracking-[0.25em] uppercase font-semibold px-2.5 py-1"
                  style={labelStyles[item.label]}
                >
                  {item.label}
                </span>
                {i === 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-muted animate-pulse" />
                )}
              </div>

              {/* Show name */}
              <p
                className="font-serif text-xl md:text-2xl font-light mb-2 leading-snug"
                style={{ color: i === 0 ? 'var(--color-ivory)' : 'rgba(247,243,237,0.7)' }}
              >
                {item.show}
              </p>

              {/* Presenter */}
              <p
                className="font-sans text-xs mb-4"
                style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}
              >
                with {item.presenter}
              </p>

              {/* Time */}
              <div className="flex items-center gap-2">
                <Clock size={11} style={{ color: 'var(--color-gold-muted)', opacity: 0.7 }} />
                <span
                  className="font-sans text-[0.65rem]"
                  style={{ color: 'var(--color-gold-champagne)', opacity: 0.5 }}
                >
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
