import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { presenters } from '@/data'

export const metadata: Metadata = {
  title: 'Presenters',
  description: 'Meet the voices behind Sabras Radio — the presenters who bring your favourite shows to life.',
}

export default function PresentersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>The Team</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light" style={{ color: 'var(--color-ivory)' }}>
            Our Presenters
          </h1>
          <p className="font-sans text-sm mt-4 max-w-lg" style={{ color: 'var(--color-gold-champagne)', opacity: 0.65 }}>
            The voices you love, the personalities who make Sabras Radio the heart of South Asian culture.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {presenters.map((p) => (
              <Link key={p.slug} href={`/presenters/${p.slug}`} className="group block">
                <div className="card-base overflow-hidden" style={{ background: 'white' }}>
                  {/* Avatar */}
                  <div
                    className={`${p.swatch} relative overflow-hidden`}
                    style={{ aspectRatio: '4 / 3' }}
                  >
                    {'photo' in p && p.photo ? (
                      <Image
                        src={p.photo as string}
                        alt={p.name}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="font-serif text-8xl font-light"
                          style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                          {p.initials}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(15,28,63,0.8), transparent 60%)' }}
                    >
                      <span className="flex items-center gap-1 font-sans text-[0.65rem] tracking-widest uppercase text-ivory">
                        View Profile <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h2
                      className="font-serif text-2xl font-light mb-1 group-hover:text-gold-muted transition-colors"
                      style={{ color: 'var(--color-navy)' }}
                    >
                      {p.name}
                    </h2>
                    <p
                      className="font-sans text-xs font-semibold tracking-wider mb-3"
                      style={{ color: 'var(--color-gold-muted)' }}
                    >
                      {p.show}
                    </p>
                    <p
                      className="font-sans text-xs leading-relaxed"
                      style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}
                    >
                      {p.bio.slice(0, 100)}…
                    </p>
                    <div
                      className="mt-4 pt-4 border-t flex items-center justify-between"
                      style={{ borderColor: 'rgba(216,198,165,0.2)' }}
                    >
                      <span className="font-sans text-[0.62rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                        {p.days} · {p.time}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
