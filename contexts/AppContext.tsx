'use client'

import {
  createContext, useContext, useState, useRef,
  useEffect, ReactNode,
} from 'react'
import type { NowPlayingData } from '@/hooks/useNowPlaying'

interface AppContextType {
  // Audio / modal
  isListenLiveOpen: boolean
  openListenLive:   () => void
  closeListenLive:  () => void
  isPlaying:        boolean
  setIsPlaying:     (v: boolean) => void
  volume:           number
  setVolume:        (v: number) => void
  audioRef:         React.RefObject<HTMLAudioElement | null>
  // Live data
  nowPlaying:       NowPlayingData
}

const FALLBACK: NowPlayingData = {
  isLive:        false,
  show:          'Sabras Radio',
  presenter:     '',
  nextShow:      null,
  nextPresenter: null,
  nextTime:      null,
  track:         null,
  listeners:     null,
  day:           '',
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isListenLiveOpen, setIsListenLiveOpen] = useState(false)
  const [isPlaying, setIsPlaying]               = useState(false)
  const [volume, setVolume]                     = useState(80)
  const [nowPlaying, setNowPlaying]             = useState<NowPlayingData>(FALLBACK)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Single shared poll — all components read from context instead of each
  // component fetching independently.
  useEffect(() => {
    let active = true

    async function refresh() {
      try {
        const res = await fetch('/api/now-playing', { cache: 'no-store' })
        if (res.ok && active) {
          const json = (await res.json()) as NowPlayingData
          setNowPlaying(json)
        }
      } catch { /* keep previous */ }
    }

    refresh()
    const id = setInterval(refresh, 15_000)

    // Refresh immediately when the tab becomes visible again
    function onVisible() {
      if (document.visibilityState === 'visible') refresh()
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      active = false
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return (
    <AppContext.Provider value={{
      isListenLiveOpen,
      openListenLive:  () => setIsListenLiveOpen(true),
      closeListenLive: () => setIsListenLiveOpen(false),
      isPlaying, setIsPlaying,
      volume, setVolume,
      audioRef,
      nowPlaying,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
