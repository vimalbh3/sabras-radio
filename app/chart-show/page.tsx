import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { CHART, CHART_WEEK, CHART_ENDING, CHART_HOST, CHART_TIME } from '@/data/chart'
import ChartList from '@/components/ChartList'

export const metadata: Metadata = {
  title: 'The Chart Show — Top 30',
  description: 'The Sabras Radio Top 30 — the biggest South Asian tracks of the week, counted down every Saturday.',
}

const ART_TOP = 'linear-gradient(145deg,#C33764 0%,#1D2671 100%)'

export default function ChartShowPage() {
  const numberOne = CHART[0]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: 'var(--color-navy)' }}
      >
        {/* Decorative watermark numeral */}
        <div
          className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-serif font-light"
            style={{
              fontSize: 'clamp(14rem, 30vw, 26rem)',
              color: 'rgba(216,198,165,0.035)',
              lineHeight: 1,
              transform: 'translateX(12%)',
            }}
          >
            30
          </span>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-widest uppercase mb-12 transition-opacity hover:opacity-100"
            style={{ color: 'var(--color-gold-champagne)', opacity: 0.45 }}
          >
            <ArrowLeft size={12} /> Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

            {/* Left — title block */}
            <div>
              <p
                className="font-sans text-[0.6rem] tracking-[0.4em] uppercase font-semibold mb-5"
                style={{ color: 'var(--color-gold-muted)' }}
              >
                Sabras Radio
              </p>
              <h1
                className="font-serif font-light leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: 'var(--color-ivory)' }}
              >
                The Chart<br />
                <em style={{ color: 'var(--color-gold-muted)', fontStyle: 'italic' }}>Show</em>
              </h1>

              <div className="w-20 h-px mb-8" style={{ background: 'var(--color-gold-muted)' }} />

              <p
                className="font-sans text-sm leading-relaxed max-w-sm mb-10"
                style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}
              >
                The top 30 South Asian tracks of the week — as voted by you.
                Counted down live {CHART_TIME} with {CHART_HOST}.
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-8">
                {[
                  { label: 'Chart Week', value: `#${CHART_WEEK}` },
                  { label: 'Week Ending', value: CHART_ENDING },
                  { label: 'Presented By', value: CHART_HOST },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p
                      className="font-sans text-[0.58rem] tracking-[0.3em] uppercase mb-1"
                      style={{ color: 'var(--color-gold-muted)' }}
                    >
                      {label}
                    </p>
                    <p
                      className="font-serif text-xl font-light"
                      style={{ color: 'var(--color-ivory)' }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — #1 card */}
            <div
              className="p-8 relative overflow-hidden"
              style={{
                background: 'rgba(216,198,165,0.05)',
                border: '1px solid rgba(216,198,165,0.13)',
              }}
            >
              {/* giant "1" watermark */}
              <span
                className="absolute right-4 top-0 font-serif font-light select-none pointer-events-none"
                style={{ fontSize: '9rem', lineHeight: 1, color: 'rgba(216,198,165,0.06)' }}
                aria-hidden="true"
              >
                1
              </span>

              <p
                className="font-sans text-[0.58rem] tracking-[0.35em] uppercase font-semibold mb-5"
                style={{ color: 'var(--color-gold-muted)' }}
              >
                This Week's Number One
              </p>

              <div className="flex items-center gap-5">
                {/* Album art */}
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-[2px] overflow-hidden relative flex items-center justify-center"
                  style={{ background: ART_TOP }}
                >
                  {numberOne.imageUrl ? (
                    <Image src={numberOne.imageUrl} alt={numberOne.title} fill className="object-cover" sizes="80px" />
                  ) : (
                    <span className="font-serif text-2xl font-light" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      {numberOne.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                    </span>
                  )}
                </div>

                <div>
                  <p
                    className="font-serif leading-tight mb-1"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 300, color: 'var(--color-ivory)' }}
                  >
                    {numberOne.title}
                  </p>
                  <p
                    className="font-sans text-sm mb-4"
                    style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}
                  >
                    {numberOne.artist}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {(() => {
                      const lw = numberOne.lastWeek
                      let label: string, color: string, bg: string
                      if (lw === 'new')     { label = 'NEW';      color = 'var(--color-gold-muted)'; bg = 'rgba(184,149,95,0.15)' }
                      else if (lw === 'reentry') { label = 'RE-ENTRY'; color = '#a78bfa'; bg = 'rgba(167,139,250,0.12)' }
                      else {
                        const d = lw - numberOne.rank
                        if (d > 0)      { label = `▲ ${d}`;           color = '#4ade80'; bg = 'rgba(74,222,128,0.1)' }
                        else if (d < 0) { label = `▼ ${Math.abs(d)}`; color = '#f87171'; bg = 'rgba(248,113,113,0.12)' }
                        else            { label = '—';                 color = 'rgba(216,198,165,0.45)'; bg = 'transparent' }
                      }
                      return (
                        <span className="font-sans text-[0.6rem] font-semibold tracking-wider px-2.5 py-1 rounded-sm"
                          style={{ background: bg, color }}>
                          {label}
                        </span>
                      )
                    })()}
                    <span
                      className="font-sans text-[0.6rem]"
                      style={{ color: 'rgba(216,198,165,0.45)' }}
                    >
                      {numberOne.weeks} weeks · Peak #{numberOne.peak}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chart list ────────────────────────────────────────────────────── */}
      <ChartList />

      {/* ── Footer CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'var(--color-navy)' }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <p
            className="font-sans text-[0.6rem] tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-gold-muted)' }}
          >
            Vote for next week
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-light mb-6"
            style={{ color: 'var(--color-ivory)' }}
          >
            You decide the chart.
          </h2>
          <p
            className="font-sans text-sm mb-8 max-w-md mx-auto"
            style={{ color: 'var(--color-gold-champagne)', opacity: 0.55 }}
          >
            Text your favourite track to Sabras Radio before Friday midnight
            and hear the countdown live every Saturday with {CHART_HOST}.
          </p>
          <Link
            href="/contact"
            className="btn-gold inline-flex text-[0.72rem] px-8 py-4"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
