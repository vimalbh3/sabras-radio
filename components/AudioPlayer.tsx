'use client'

import { useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Radio, ChevronUp } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

export default function AudioPlayer() {
  const { isPlaying, setIsPlaying, openListenLive, volume, setVolume, audioRef } = useApp()
  const [showVolume, setShowVolume] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handlePlayPause = () => {
    if (!audioRef?.current) {
      openListenLive()
      return
    }
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => openListenLive())
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolume = (v: number) => {
    setVolume(v)
    if (audioRef?.current) audioRef.current.volume = v / 100
    setIsMuted(v === 0)
  }

  const toggleMute = () => {
    if (isMuted) {
      handleVolume(volume || 70)
      setIsMuted(false)
    } else {
      if (audioRef?.current) audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[100] h-[72px] flex items-center"
      style={{
        background: 'var(--color-navy-dark)',
        boxShadow: 'var(--shadow-player)',
        borderTop: '1px solid rgba(216,198,165,0.12)',
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 flex items-center gap-4 md:gap-6">

        {/* Live indicator + Show info */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
            style={{ background: 'rgba(184,149,95,0.15)', border: '1px solid rgba(184,149,95,0.3)' }}
          >
            <Radio size={16} style={{ color: 'var(--color-gold-muted)' }} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className="inline-flex items-center gap-1 font-sans text-[0.55rem] tracking-[0.2em] uppercase font-semibold px-1.5 py-0.5"
                style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ivory animate-pulse inline-block" />
                Live
              </span>
            </div>
            <p className="font-serif text-sm font-medium truncate" style={{ color: 'var(--color-ivory)' }}>
              Morning Glory
            </p>
            <p className="font-sans text-[0.65rem] truncate" style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}>
              with Raj Sharma
            </p>
          </div>
        </div>

        {/* Waveform */}
        <div className="hidden md:flex items-end gap-[2px] h-8 flex-shrink-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className={`waveform-bar w-[3px] rounded-full ${isPlaying ? '' : 'paused'}`}
              style={{
                height: `${30 + Math.sin(i * 0.9) * 70}%`,
                background: 'var(--color-gold-muted)',
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Play / Pause */}
        <button
          onClick={handlePlayPause}
          className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 flex-shrink-0 animate-pulse-gold"
          style={{ background: 'var(--color-gold-muted)' }}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying
            ? <Pause size={18} style={{ color: 'var(--color-ivory)' }} />
            : <Play  size={18} style={{ color: 'var(--color-ivory)' }} fill="currentColor" />
          }
        </button>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0 relative">
          <button
            onClick={toggleMute}
            className="transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={isMuted ? 0 : volume}
            onChange={(e) => handleVolume(Number(e.target.value))}
            className="w-20 h-[3px] rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--color-gold-muted) ${isMuted ? 0 : volume}%, rgba(255,255,255,0.15) ${isMuted ? 0 : volume}%)`,
              accentColor: 'var(--color-gold-muted)',
            }}
            aria-label="Volume"
          />
        </div>

        {/* CTA */}
        <button
          onClick={openListenLive}
          className="hidden md:inline-flex items-center gap-2 flex-shrink-0 btn-gold text-[0.6rem]"
        >
          <ChevronUp size={12} />
          Full Player
        </button>
      </div>
    </div>
  )
}
