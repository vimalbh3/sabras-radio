import type { Metadata } from 'next'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Listen Back',
  description: 'Catch up on your favourite Sabras Radio shows whenever you like.',
}

export default function ListenBackPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'var(--color-navy)', borderBottom: '1px solid rgba(216,198,165,0.1)' }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>On Demand</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light" style={{ color: 'var(--color-ivory)' }}>
            Listen Back
          </h1>
          <p className="font-sans text-sm mt-4 max-w-lg" style={{ color: 'var(--color-gold-champagne)', opacity: 0.65 }}>
            Missed a show? Catch up on the best of Sabras Radio — available on demand, any time.
          </p>
        </div>
      </section>

      {/* Embed */}
      <section className="py-12 md:py-16" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Player embed */}
            <div className="lg:col-span-8">
              <div
                className="overflow-hidden border"
                style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
              >
                <div
                  className="px-6 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: 'rgba(216,198,165,0.15)', background: 'var(--color-ivory-warm)' }}
                >
                  <p className="font-serif text-lg" style={{ color: 'var(--color-navy)' }}>
                    On Demand Player
                  </p>
                  <span
                    className="font-sans text-[0.58rem] tracking-widest uppercase"
                    style={{ color: 'var(--color-gold-muted)' }}
                  >
                    Powered by Canstream
                  </span>
                </div>
                <div className="p-0">
                  <iframe
                    src="https://www.canstream.co.uk/sabras/listenback"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    title="Sabras Radio Listen Back"
                    className="block"
                  />
                </div>
              </div>

              {/* Note */}
              <p
                className="font-sans text-xs mt-4"
                style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}
              >
                Listen back content is typically available for 30 days after broadcast.
                Some shows may not be available due to music licensing restrictions.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <AdSlot size="rectangle" />

              {/* Shows list */}
              <div
                className="p-6 border"
                style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
              >
                <h3
                  className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-5"
                  style={{ color: 'var(--color-gold-muted)' }}
                >
                  Popular Shows
                </h3>
                {[
                  { show: 'Morning Glory', host: 'Raj Sharma' },
                  { show: 'Desi Vibes', host: 'Priya Patel' },
                  { show: 'Afternoon Drive', host: 'Amir Hussain' },
                  { show: 'The Drive Home', host: 'Sonia Mehta' },
                  { show: 'The Chart Show', host: 'Dev Singh' },
                  { show: 'Weekend Breakfast', host: 'Anita Chopra' },
                ].map((s) => (
                  <div
                    key={s.show}
                    className="flex items-center justify-between py-3 border-b cursor-pointer group"
                    style={{ borderColor: 'rgba(216,198,165,0.12)' }}
                  >
                    <div>
                      <p className="font-sans text-xs font-medium group-hover:text-gold-muted transition-colors" style={{ color: 'var(--color-navy)' }}>
                        {s.show}
                      </p>
                      <p className="font-sans text-[0.6rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                        {s.host}
                      </p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-gold-muted)', opacity: 0.5 }}>
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
