import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AudioPlayer from '@/components/AudioPlayer'
import ListenLiveModal from '@/components/ListenLiveModal'
import { AppProvider } from '@/contexts/AppContext'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sabras Radio — The Soundtrack of Asian Culture',
    template: '%s | Sabras Radio',
  },
  description: 'The UK\'s premier South Asian radio station. Bringing you the biggest hits, exclusive shows, the latest news and the voices that matter.',
  keywords: ['Sabras Radio', 'South Asian Radio', 'Bollywood Radio', 'Asian Music', 'Desi Radio UK'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Sabras Radio',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body>
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <AudioPlayer />
          <ListenLiveModal />
        </AppProvider>
      </body>
    </html>
  )
}
