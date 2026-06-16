export const dynamic = 'force-dynamic'

import HeroSection from '@/components/HeroSection'
import AdSlot from '@/components/AdSlot'
import PresentersCarousel from '@/components/PresentersCarousel'
import ScheduleStrip from '@/components/ScheduleStrip'
import NewsHub from '@/components/NewsHub'
import PromoBlocks from '@/components/PromoBlocks'
import EventsSection from '@/components/EventsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <PromoBlocks />

      {/* Hero leaderboard ad */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-6">
        <AdSlot size="leaderboard" label="Advertisement · Sponsored" />
      </div>

      <PresentersCarousel />

      <div className="gold-divider" />

      <ScheduleStrip />

      <div className="gold-divider" />

      <NewsHub />

      {/* Promotional banner ad */}
      <div
        className="py-8"
        style={{ background: 'var(--color-ivory-warm)' }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <AdSlot size="leaderboard" label="Promoted Content · Partner" />
        </div>
      </div>

      <EventsSection />

      {/* Mobile sticky ad — shown only on mobile */}
      <div
        className="fixed bottom-[72px] inset-x-0 z-[80] md:hidden"
        style={{ pointerEvents: 'none' }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <AdSlot size="banner" label="Ad" className="border-t-0 border-x-0" />
        </div>
      </div>
    </>
  )
}
