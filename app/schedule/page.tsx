import type { Metadata } from 'next'
import { Clock } from 'lucide-react'
import { fullSchedule } from '@/data'

export const metadata: Metadata = {
  title: 'Schedule',
  description: 'Full programme schedule for Sabras Radio — know what\'s on air.',
}

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>On Air</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light" style={{ color: 'var(--color-ivory)' }}>
            Programme<br />Schedule
          </h1>
          <p className="font-sans text-sm mt-4 max-w-lg" style={{ color: 'var(--color-gold-champagne)', opacity: 0.65 }}>
            Plan your listening. Find your favourite shows and discover what&apos;s on next.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 md:py-20" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-12">
            {fullSchedule.map((day) => (
              <div key={day.day}>
                {/* Day header */}
                <div
                  className="flex items-center gap-4 mb-6 pb-4 border-b"
                  style={{ borderColor: 'rgba(216,198,165,0.25)' }}
                >
                  <h2 className="font-serif text-2xl md:text-3xl font-light" style={{ color: 'var(--color-navy)' }}>
                    {day.day}
                  </h2>
                  <div className="flex-1 gold-divider" />
                </div>

                {/* Slots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {day.slots.map((slot, i) => (
                    <div
                      key={i}
                      className="p-5 border transition-all duration-200 hover:shadow-card cursor-default"
                      style={{
                        borderColor: 'rgba(216,198,165,0.2)',
                        background: i === 0 ? 'white' : 'var(--color-ivory)',
                        borderLeft: i === 0 ? '3px solid var(--color-gold-muted)' : '1px solid rgba(216,198,165,0.2)',
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-3">
                        <Clock size={10} style={{ color: 'var(--color-gold-muted)' }} />
                        <span
                          className="font-sans text-[0.6rem] font-semibold tracking-widest"
                          style={{ color: 'var(--color-gold-muted)' }}
                        >
                          {slot.time}
                        </span>
                      </div>
                      <p className="font-serif text-base font-medium leading-snug mb-1" style={{ color: 'var(--color-navy)' }}>
                        {slot.show}
                      </p>
                      <p className="font-sans text-[0.62rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
                        {slot.presenter}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
