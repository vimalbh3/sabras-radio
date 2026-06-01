import type { Metadata } from 'next'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { events } from '@/data'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming Sabras Radio events — roadshows, Bollywood nights, festivals and community events.',
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>What&apos;s On</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light" style={{ color: 'var(--color-ivory)' }}>
            Events
          </h1>
          <p className="font-sans text-sm mt-4 max-w-lg" style={{ color: 'var(--color-gold-champagne)', opacity: 0.65 }}>
            Roadshows, Bollywood nights, summer festivals and community events — be part of the action.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {events.map((e, i) => (
              <article
                key={e.slug}
                id={e.slug}
                className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden card-base"
                style={{ background: 'white' }}
              >
                {/* Image */}
                <div
                  className={`${e.swatch} md:col-span-4 relative`}
                  style={{ minHeight: 240 }}
                >
                  {/* Date badge */}
                  <div
                    className="absolute top-5 left-5 text-center px-3 py-2"
                    style={{ background: 'var(--color-ivory)' }}
                  >
                    <p className="font-serif text-2xl font-semibold leading-none" style={{ color: 'var(--color-navy)' }}>
                      {e.date.split(' ')[1]}
                    </p>
                    <p className="font-sans text-[0.5rem] tracking-widest uppercase mt-0.5" style={{ color: 'var(--color-gold-muted)' }}>
                      {e.date.split(' ')[2]}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="absolute top-5 right-5">
                    <span
                      className="font-sans text-[0.5rem] tracking-[0.2em] uppercase font-semibold px-2 py-1"
                      style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
                    >
                      {e.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-8 p-7 md:p-10 flex flex-col justify-between">
                  <div>
                    <h2
                      className="font-serif text-2xl md:text-3xl font-light mb-4"
                      style={{ color: 'var(--color-navy)' }}
                    >
                      {e.name}
                    </h2>
                    <p
                      className="font-sans text-sm leading-relaxed mb-6"
                      style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}
                    >
                      {e.description}
                    </p>
                    <div className="flex flex-wrap gap-5">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} style={{ color: 'var(--color-gold-muted)' }} />
                        <span className="font-sans text-xs" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                          {e.venue}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={13} style={{ color: 'var(--color-gold-muted)' }} />
                        <span className="font-sans text-xs" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                          {e.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={13} style={{ color: 'var(--color-gold-muted)' }} />
                        <span className="font-sans text-xs" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                          {e.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button className="btn-gold text-[0.68rem]">
                      Get Tickets
                    </button>
                    <button className="btn-outline text-[0.68rem]">
                      More Info
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
