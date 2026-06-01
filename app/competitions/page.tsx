import type { Metadata } from 'next'
import { Calendar, Trophy, ArrowRight } from 'lucide-react'
import { competitions } from '@/data'

export const metadata: Metadata = {
  title: 'Competitions',
  description: 'Win amazing prizes with Sabras Radio competitions and listener giveaways.',
}

export default function CompetitionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: 'var(--color-navy)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(184,149,95,0.15), transparent)' }}
        />
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>Win Big</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light" style={{ color: 'var(--color-ivory)' }}>
            Competitions<br />&amp; Offers
          </h1>
          <p className="font-sans text-sm mt-4 max-w-lg" style={{ color: 'var(--color-gold-champagne)', opacity: 0.65 }}>
            VIP tickets, money-can&apos;t-buy experiences, exclusive prizes and listener offers — only on Sabras Radio.
          </p>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {competitions.map((comp) => (
              <div
                key={comp.slug}
                className="card-base overflow-hidden flex flex-col"
                style={{ background: 'white' }}
              >
                {/* Visual */}
                <div
                  className={`${comp.swatch} relative flex items-center justify-center`}
                  style={{ aspectRatio: '16/9' }}
                >
                  <Trophy size={48} style={{ color: 'rgba(255,255,255,0.5)' }} />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h2
                    className="font-serif text-xl font-medium mb-3 leading-snug"
                    style={{ color: 'var(--color-navy)' }}
                  >
                    {comp.title}
                  </h2>

                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 w-fit mb-4"
                    style={{ background: 'rgba(184,149,95,0.1)' }}
                  >
                    <Trophy size={11} style={{ color: 'var(--color-gold-muted)' }} />
                    <span className="font-sans text-[0.62rem] font-semibold" style={{ color: 'var(--color-gold-muted)' }}>
                      Prize: {comp.prize}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <Calendar size={11} style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }} />
                    <span className="font-sans text-[0.62rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.55 }}>
                      Closes: {comp.closes}
                    </span>
                  </div>

                  <button className="btn-gold mt-auto w-full justify-center text-[0.68rem]">
                    Enter Now <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Terms */}
          <div
            className="mt-12 p-6 border"
            style={{ borderColor: 'rgba(216,198,165,0.2)' }}
          >
            <h3 className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: 'var(--color-gold-muted)' }}>
              Competition Terms
            </h3>
            <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
              All competitions are open to UK residents aged 18 and over, unless stated otherwise. Entries are limited to one per person per competition.
              Winners will be contacted by Sabras Radio within 7 days of the closing date. Prizes are non-transferable and no cash alternative is available.
              Sabras Radio Ltd reserves the right to amend or withdraw any competition at any time without notice. Full terms available on request.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
