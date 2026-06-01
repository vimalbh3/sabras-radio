import Link from 'next/link'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { events } from '@/data'

export default function EventsSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory)' }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">What&apos;s On</p>
            <h2 className="section-title">Be Part of<br /><em>the Action</em></h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase font-semibold transition-colors hover:text-gold-muted self-start sm:self-auto"
            style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}
          >
            All Events <ArrowRight size={13} />
          </Link>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {events.map((e) => (
            <Link key={e.slug} href={`/events#${e.slug}`} className="group block">
              <div className="card-base overflow-hidden" style={{ background: 'white' }}>
                {/* Image */}
                <div
                  className={`${e.swatch} relative overflow-hidden`}
                  style={{ aspectRatio: '4 / 3' }}
                >
                  {/* Date badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-2 text-center"
                    style={{ background: 'var(--color-ivory)', minWidth: 58 }}
                  >
                    <p className="font-serif text-xl font-semibold leading-none" style={{ color: 'var(--color-navy)' }}>
                      {e.date.split(' ')[1]}
                    </p>
                    <p className="font-sans text-[0.55rem] tracking-widest uppercase mt-0.5" style={{ color: 'var(--color-gold-muted)' }}>
                      {e.date.split(' ')[2]}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="font-sans text-[0.5rem] tracking-[0.2em] uppercase font-semibold px-2 py-1"
                      style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
                    >
                      {e.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(15,28,63,0.4)' }}
                  >
                    <span className="btn-gold text-[0.6rem] px-4 py-2">
                      View Event
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3
                    className="font-serif text-lg font-medium mb-3 leading-snug group-hover:text-gold-muted transition-colors"
                    style={{ color: 'var(--color-navy)' }}
                  >
                    {e.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={11} style={{ color: 'var(--color-gold-muted)', flexShrink: 0 }} />
                      <span className="font-sans text-[0.65rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                        {e.venue}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={11} style={{ color: 'var(--color-gold-muted)', flexShrink: 0 }} />
                      <span className="font-sans text-[0.65rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                        {e.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={11} style={{ color: 'var(--color-gold-muted)', flexShrink: 0 }} />
                      <span className="font-sans text-[0.65rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                        {e.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
