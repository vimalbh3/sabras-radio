'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { presenters } from '@/data'

export default function PresentersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = 300
    trackRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      style={{ background: 'var(--color-ivory)' }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label mb-3">Meet the Team</p>
            <h2 className="section-title">The Voices<br /><em>You Love</em></h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center border transition-all duration-200 hover:bg-navy hover:border-navy hover:text-ivory"
              style={{ borderColor: 'var(--color-gold-champagne)', color: 'var(--color-navy)' }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center border transition-all duration-200 hover:bg-navy hover:border-navy hover:text-ivory"
              style={{ borderColor: 'var(--color-gold-champagne)', color: 'var(--color-navy)' }}
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-4 md:px-8"
        style={{
          scrollSnapType: 'x mandatory',
          paddingLeft: 'max(1rem, calc((100vw - 1280px) / 2 + 2rem))',
          paddingRight: 'max(1rem, calc((100vw - 1280px) / 2 + 2rem))',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {presenters.map((p) => (
          <Link
            key={p.slug}
            href={`/presenters/${p.slug}`}
            className="group flex-shrink-0 w-[240px] md:w-[260px] block"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div
              className="card-base overflow-hidden"
              style={{ background: 'white' }}
            >
              {/* Avatar */}
              <div
                className={`${p.swatch} relative`}
                style={{ aspectRatio: '3 / 4', overflow: 'hidden' }}
              >
                {/* Initials */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="font-serif text-6xl font-light"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {p.initials}
                  </span>
                </div>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(15,28,63,0.85) 0%, transparent 60%)' }}
                >
                  <span
                    className="font-sans text-[0.65rem] tracking-widest uppercase text-ivory flex items-center gap-1"
                  >
                    View Profile <ArrowRight size={10} />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="font-serif text-lg font-medium mb-0.5" style={{ color: 'var(--color-navy)' }}>
                  {p.name}
                </p>
                <p className="font-sans text-[0.7rem] font-semibold" style={{ color: 'var(--color-gold-muted)' }}>
                  {p.show}
                </p>
                <p className="font-sans text-[0.65rem] mt-1" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
                  {p.days} · {p.time}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* View all card */}
        <Link
          href="/presenters"
          className="flex-shrink-0 w-[200px] flex flex-col items-center justify-center gap-4 border transition-all duration-300 group"
          style={{
            borderColor: 'var(--color-gold-champagne)',
            scrollSnapAlign: 'start',
            minHeight: 360,
          }}
        >
          <div
            className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-navy group-hover:border-navy"
            style={{ borderColor: 'var(--color-gold-muted)' }}
          >
            <ArrowRight size={18} style={{ color: 'var(--color-navy)' }} className="group-hover:text-ivory group-hover:stroke-ivory transition-colors" />
          </div>
          <p className="font-serif text-lg font-light" style={{ color: 'var(--color-navy)' }}>
            All Presenters
          </p>
        </Link>
      </div>
    </section>
  )
}
