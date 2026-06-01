'use client'

import { createContext, useContext, useState, useRef, ReactNode } from 'react'

interface AppContextType {
  isListenLiveOpen: boolean
  openListenLive: () => void
  closeListenLive: () => void
  isPlaying: boolean
  setIsPlaying: (v: boolean) => void
  volume: number
  setVolume: (v: number) => void
  audioRef: React.RefObject<HTMLAudioElement | null>
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isListenLiveOpen, setIsListenLiveOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const openListenLive = () => setIsListenLiveOpen(true)
  const closeListenLive = () => setIsListenLiveOpen(false)

  return (
    <AppContext.Provider value={{
      isListenLiveOpen, openListenLive, closeListenLive,
      isPlaying, setIsPlaying,
      volume, setVolume,
      audioRef,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
