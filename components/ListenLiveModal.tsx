'use client'

import { useEffect, useRef } from 'react'
import { X, Radio, Volume2 } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const STREAM_URL = 'http://radio.canstream.co.uk:8025/live.mp3'

export default function ListenLiveModal() {
  const { isListenLiveOpen, closeListenLive, isPlaying, setIsPlaying, audioRef } = useApp()
  const localRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isListenLiveOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isListenLiveOpen])

  if (!isListenLiveOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
        onClick={closeListenLive}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-navy rounded-none shadow-player overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold-muted animate-pulse-gold" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold-champagne font-semibold">
              Live Now
            </span>
          </div>
          <button
            onClick={closeListenLive}
            className="text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 text-center">
          {/* Waveform */}
          <div className="flex items-end justify-center gap-[3px] h-12 mb-8">
            {[30,60,90,50,75,40,85,65,45,80,55,70,35,95,50,65,45,75,60,40].map((h, i) => (
              <div
                key={i}
                className={`waveform-bar w-[3px] rounded-full ${isPlaying ? '' : 'paused'}`}
                style={{ height: `${h}%`, background: 'var(--color-gold-muted)', animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>

          <Radio size={36} className="mx-auto mb-4 text-gold-champagne" />

          <h2 className="font-serif text-3xl font-light text-ivory mb-2">
            Sabras Radio
          </h2>
          <p className="font-sans text-xs tracking-widest text-gold-champagne/70 uppercase mb-8">
            The Soundtrack of Asian Culture
          </p>

          {/* Native audio player */}
          <div className="mb-6">
            <audio
              ref={(el) => {
                localRef.current = el
                if (audioRef) audioRef.current = el
              }}
              src={STREAM_URL}
              controls
              className="w-full"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{
                filter: 'invert(1) sepia(1) saturate(0.5) hue-rotate(180deg)',
              }}
            >
              Your browser does not support the audio element.
            </audio>
          </div>

          <p className="font-sans text-xs text-white/30 leading-relaxed">
            Stream loads via HTTP — ensure your browser allows mixed content,
            or use a dedicated radio app for the best experience.
          </p>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-navy-dark/60 flex items-center justify-center gap-2">
          <Volume2 size={12} className="text-gold-muted" />
          <span className="font-sans text-xs text-white/40 tracking-widest uppercase">
            Sabras Radio · Live Stream
          </span>
        </div>
      </div>
    </div>
  )
}
