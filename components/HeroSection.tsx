'use client'

import { useApp } from '@/contexts/AppContext'
import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const { openListenLive, nowPlaying } = useApp()

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
                Live Now · {nowPlaying.show}
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
              {/* Studio webcam */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '4 / 3',
                  borderRadius: '2px',
                  boxShadow: '0 32px 80px rgba(15,28,63,0.16)',
                  background: 'linear-gradient(145deg, #0F1C3F 0%, #1A2F5F 35%, #B8955F 70%, #D8C6A5 100%)',
                }}
              >
                <iframe
                  src="https://secure43.prositehosting.co.uk/sec/sabrasCam.php"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  title="Sabras Radio Live Studio Cam"
                  loading="lazy"
                />
                {/* Live cam label */}
                <div
                  className="absolute bottom-4 left-4 flex items-center gap-2 pointer-events-none z-10"
                  style={{
                    background: 'rgba(8,18,36,0.65)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: '2px',
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#ef4444' }} />
                  <span
                    className="font-sans text-[0.6rem] tracking-[0.2em] uppercase font-semibold"
                    style={{ color: 'rgba(247,243,237,0.85)' }}
                  >
                    Live Studio Cam
                  </span>
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
                    {nowPlaying.track ? 'Now Playing' : 'On Air'}
                  </p>
                  <p className="font-serif text-sm font-medium truncate max-w-[140px]" style={{ color: 'var(--color-navy)' }}>
                    {nowPlaying.track
                      ? nowPlaying.track.split(' - ')[0] ?? nowPlaying.track
                      : nowPlaying.show}
                  </p>
                  <p className="font-sans text-[0.6rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
                    {nowPlaying.track
                      ? nowPlaying.track.split(' - ')[1] ?? ''
                      : nowPlaying.presenter}
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
                  {nowPlaying.presenter
                    ? nowPlaying.presenter.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
                    : 'SR'}
                </div>
                <div>
                  <p className="font-sans text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--color-gold-muted)' }}>
                    On Air
                  </p>
                  <p className="font-sans text-[0.7rem] font-medium truncate max-w-[100px]" style={{ color: 'var(--color-ivory)' }}>
                    {nowPlaying.presenter || nowPlaying.show}
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
