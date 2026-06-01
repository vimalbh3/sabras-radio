'use client'

import { useApp } from '@/contexts/AppContext'
import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const { openListenLive } = useApp()

  return (
    <section
      className="relative min-h-[90vh] flex flex-col overflow-hidden"
      style={{ background: 'var(--color-ivory)' }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(216,198,165,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main hero content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 w-full py-16 md:py-20">

          {/* Left — editorial copy */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            {/* Live badge */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="inline-flex items-center gap-2 font-sans text-[0.6rem] font-semibold tracking-[0.25em] uppercase px-3 py-1.5"
                style={{ background: 'rgba(184,149,95,0.12)', border: '1px solid rgba(184,149,95,0.3)', color: 'var(--color-gold-muted)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-muted animate-pulse" />
                Live Now · Morning Glory
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-light leading-[1.05] mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                color: 'var(--color-espresso)',
              }}
            >
              The Soundtrack<br />
              <em style={{ color: 'var(--color-gold-muted)', fontStyle: 'italic' }}>of Asian</em>{' '}
              <span style={{ color: 'var(--color-navy)' }}>Culture.</span>
            </h1>

            {/* Divider */}
            <div
              className="w-16 h-[1px] mb-6"
              style={{ background: 'var(--color-gold-muted)' }}
            />

            {/* Subheading */}
            <p
              className="font-sans text-base leading-relaxed mb-10 max-w-md"
              style={{ color: 'var(--color-espresso-light)', opacity: 0.8 }}
            >
              Bringing you the biggest hits, exclusive shows, the latest news and the voices that matter to South Asian culture.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={openListenLive}
                className="btn-gold flex items-center gap-3 text-[0.72rem] px-7 py-4"
              >
                <Play size={14} fill="currentColor" />
                Listen Live
              </button>
              <Link
                href="/listen-back"
                className="btn-outline flex items-center gap-3 text-[0.72rem] px-7 py-4"
              >
                Listen Back
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { num: '1M+',  label: 'Weekly Listeners' },
                { num: '30+',  label: 'Years on Air' },
                { num: '24/7', label: 'Live Broadcast' },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-serif text-2xl font-semibold"
                    style={{ color: 'var(--color-navy)' }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="font-sans text-[0.62rem] tracking-[0.1em] uppercase mt-0.5"
                    style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero visual */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Main image frame */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '4 / 3',
                  borderRadius: '2px',
                  boxShadow: '0 32px 80px rgba(15,28,63,0.16)',
                }}
              >
                {/* Background visual — abstract premium gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(145deg, #0F1C3F 0%, #1A2F5F 35%, #B8955F 70%, #D8C6A5 100%)',
                  }}
                />
                {/* Abstract shapes */}
                <div
                  className="absolute"
                  style={{
                    width: '60%',
                    height: '60%',
                    top: '-10%',
                    right: '-10%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(216,198,165,0.25) 0%, transparent 70%)',
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    width: '40%',
                    height: '40%',
                    bottom: '10%',
                    left: '5%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(184,149,95,0.3) 0%, transparent 70%)',
                  }}
                />
                {/* Overlaid text / editorial label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <p
                    className="font-sans text-[0.6rem] tracking-[0.4em] uppercase mb-6"
                    style={{ color: 'rgba(216,198,165,0.7)' }}
                  >
                    Sabras Radio · Est. 1995
                  </p>
                  <p
                    className="font-serif italic font-light"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                      color: 'var(--color-ivory)',
                      lineHeight: 1.2,
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    Music that<br />moves you.
                  </p>
                  <div
                    className="w-12 h-[1px] mt-6"
                    style={{ background: 'rgba(216,198,165,0.5)' }}
                  />
                </div>
              </div>

              {/* Now Playing card — floating */}
              <div
                className="absolute -bottom-6 -left-6 md:-left-12 z-10 px-5 py-4 flex items-center gap-4"
                style={{
                  background: 'var(--color-ivory)',
                  boxShadow: 'var(--shadow-card-hover)',
                  minWidth: 220,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--color-navy)' }}
                >
                  <Play size={14} fill="white" style={{ color: 'white' }} />
                </div>
                <div>
                  <p className="font-sans text-[0.6rem] tracking-widest uppercase" style={{ color: 'var(--color-gold-muted)' }}>
                    Now Playing
                  </p>
                  <p className="font-serif text-sm font-medium" style={{ color: 'var(--color-navy)' }}>
                    Kesariya
                  </p>
                  <p className="font-sans text-[0.6rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
                    Arijit Singh
                  </p>
                </div>
                <div className="flex items-end gap-[2px] h-5 ml-2 flex-shrink-0">
                  {[1,2,3,4,5].map((i) => (
                    <div
                      key={i}
                      className="waveform-bar w-[2px] rounded-full"
                      style={{ height: `${40 + i * 12}%`, background: 'var(--color-gold-muted)' }}
                    />
                  ))}
                </div>
              </div>

              {/* Presenter card — floating top right */}
              <div
                className="absolute -top-5 -right-4 md:-right-8 z-10 px-4 py-3 flex items-center gap-3"
                style={{
                  background: 'var(--color-navy)',
                  minWidth: 160,
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-serif text-xs font-semibold flex-shrink-0"
                  style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
                >
                  RS
                </div>
                <div>
                  <p className="font-sans text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--color-gold-muted)' }}>
                    On Air
                  </p>
                  <p className="font-sans text-[0.7rem] font-medium" style={{ color: 'var(--color-ivory)' }}>
                    Raj Sharma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="gold-divider w-full" />
    </section>
  )
}
