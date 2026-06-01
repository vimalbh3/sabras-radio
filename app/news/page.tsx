import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { newsArticles } from '@/data'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'News',
  description: 'The latest Bollywood, entertainment and world news from Sabras Radio.',
}

const allArticles = [
  ...newsArticles.bollywood,
  ...newsArticles.entertainment,
  ...newsArticles.world,
]

export default function NewsPage() {
  const [featured, ...rest] = allArticles

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: 'var(--color-navy)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>Latest</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light" style={{ color: 'var(--color-ivory)' }}>
            News &amp; Stories
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main */}
            <div className="lg:col-span-8 space-y-8">
              {/* Ad */}
              <AdSlot size="leaderboard" />

              {/* Featured */}
              <Link href={`/news/${featured.slug}`} className="group block">
                <div className="card-base overflow-hidden" style={{ background: 'white' }}>
                  <div className={`${featured.swatch} relative`} style={{ aspectRatio: '16/6' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-5xl italic font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Featured Story
                      </span>
                    </div>
                  </div>
                  <div className="p-7 md:p-10">
                    <span
                      className="inline-block font-sans text-[0.55rem] tracking-[0.25em] uppercase font-semibold px-2 py-1 mb-4"
                      style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
                    >
                      {featured.category}
                    </span>
                    <h2
                      className="font-serif text-2xl md:text-3xl font-light leading-snug mb-4 group-hover:text-gold-muted transition-colors"
                      style={{ color: 'var(--color-navy)' }}
                    >
                      {featured.headline}
                    </h2>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-5">
                      <Clock size={11} style={{ color: 'var(--color-gold-muted)' }} />
                      <span className="font-sans text-[0.62rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                        {featured.readTime} · {featured.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Article grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {rest.map((a) => (
                  <Link key={a.slug} href={`/news/${a.slug}`} className="group block">
                    <div className="card-base overflow-hidden" style={{ background: 'white' }}>
                      <div className={`${a.swatch}`} style={{ aspectRatio: '16/9' }} />
                      <div className="p-5">
                        <span
                          className="font-sans text-[0.55rem] tracking-[0.2em] uppercase font-semibold"
                          style={{ color: 'var(--color-gold-muted)' }}
                        >
                          {a.category}
                        </span>
                        <h3
                          className="font-serif text-base font-medium leading-snug mt-2 mb-3 group-hover:text-gold-muted transition-colors"
                          style={{ color: 'var(--color-navy)' }}
                        >
                          {a.headline}
                        </h3>
                        <p className="font-sans text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-espresso-light)', opacity: 0.65 }}>
                          {a.excerpt}
                        </p>
                        <div className="flex items-center gap-1.5 mt-3">
                          <Clock size={10} style={{ color: 'var(--color-gold-muted)' }} />
                          <span className="font-sans text-[0.58rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                            {a.readTime} · {a.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <AdSlot size="rectangle" />
              <div
                className="p-6 border"
                style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
              >
                <h3 className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-5" style={{ color: 'var(--color-gold-muted)' }}>
                  Categories
                </h3>
                {['Bollywood', 'Entertainment', 'World', 'Music', 'Community', 'Events'].map((cat) => (
                  <div
                    key={cat}
                    className="flex items-center justify-between py-3 border-b cursor-pointer group"
                    style={{ borderColor: 'rgba(216,198,165,0.12)' }}
                  >
                    <span className="font-sans text-xs group-hover:text-gold-muted transition-colors" style={{ color: 'var(--color-espresso)' }}>
                      {cat}
                    </span>
                    <span className="font-sans text-[0.6rem]" style={{ color: 'var(--color-gold-champagne)' }}>
                      →
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
