'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { newsArticles } from '@/data'
import AdSlot from './AdSlot'

type Tab = 'bollywood' | 'entertainment' | 'world'

const tabs: { key: Tab; label: string }[] = [
  { key: 'bollywood',     label: 'Bollywood' },
  { key: 'entertainment', label: 'Entertainment' },
  { key: 'world',         label: 'World' },
]

export default function NewsHub() {
  const [activeTab, setActiveTab] = useState<Tab>('bollywood')
  const articles = newsArticles[activeTab]

  return (
    <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory)' }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3">Latest</p>
            <h2 className="section-title">Stay Updated</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase font-semibold transition-colors hover:text-gold-muted self-start sm:self-auto"
            style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}
          >
            All News <ArrowRight size={13} />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b mb-10" style={{ borderColor: 'rgba(216,198,165,0.3)' }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className="relative px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] uppercase font-semibold transition-colors duration-200"
              style={{
                color: activeTab === t.key ? 'var(--color-navy)' : 'var(--color-espresso-light)',
                opacity: activeTab === t.key ? 1 : 0.5,
              }}
            >
              {t.label}
              {activeTab === t.key && (
                <span
                  className="absolute bottom-0 inset-x-0 h-[2px]"
                  style={{ background: 'var(--color-gold-muted)' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Articles — 8 cols */}
          <div className="lg:col-span-8">
            {/* Featured article (first) */}
            {articles[0] && (
              <Link href={`/news/${articles[0].slug}`} className="group block mb-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden card-base">
                  {/* Image */}
                  <div
                    className={`${articles[0].swatch} md:col-span-3`}
                    style={{ aspectRatio: '16/9', position: 'relative', minHeight: 240 }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: 'rgba(0,0,0,0.1)' }}
                    >
                      <span
                        className="font-serif text-4xl italic font-light text-center px-8 leading-snug"
                        style={{ color: 'rgba(255,255,255,0.6)' }}
                      >
                        Featured
                      </span>
                    </div>
                  </div>
                  {/* Copy */}
                  <div className="md:col-span-2 p-7 flex flex-col justify-between">
                    <div>
                      <span
                        className="font-sans text-[0.55rem] tracking-[0.25em] uppercase font-semibold px-2 py-1 mb-4 inline-block"
                        style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
                      >
                        {articles[0].category}
                      </span>
                      <h3
                        className="font-serif text-xl md:text-2xl font-light leading-snug mt-3 mb-4 group-hover:text-gold-muted transition-colors"
                        style={{ color: 'var(--color-navy)' }}
                      >
                        {articles[0].headline}
                      </h3>
                      <p
                        className="font-sans text-xs leading-relaxed"
                        style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}
                      >
                        {articles[0].excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-2">
                        <Clock size={11} style={{ color: 'var(--color-gold-muted)', opacity: 0.7 }} />
                        <span className="font-sans text-[0.6rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                          {articles[0].readTime} · {articles[0].date}
                        </span>
                      </div>
                      <span
                        className="font-sans text-[0.6rem] tracking-widest uppercase flex items-center gap-1 group-hover:text-gold-muted transition-colors"
                        style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}
                      >
                        Read <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Secondary articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {articles.slice(1).map((a) => (
                <Link key={a.slug} href={`/news/${a.slug}`} className="group block">
                  <div className="card-base overflow-hidden" style={{ background: 'white' }}>
                    <div
                      className={`${a.swatch}`}
                      style={{ aspectRatio: '16/9', position: 'relative' }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'rgba(15,28,63,0.2)' }}
                      />
                    </div>
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
                      <div className="flex items-center gap-2">
                        <Clock size={10} style={{ color: 'var(--color-gold-muted)', opacity: 0.6 }} />
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

          {/* Sidebar — 4 cols */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Ad */}
            <AdSlot size="rectangle" label="Sponsored Content" />

            {/* Trending */}
            <div
              className="p-6 border"
              style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
            >
              <h3
                className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-5"
                style={{ color: 'var(--color-gold-muted)' }}
              >
                Trending Now
              </h3>
              <ul className="space-y-4">
                {[
                  'Bollywood Box Office Charts: This Week\'s Top 5',
                  'Exclusive: New Sabras Breakfast Show Format Revealed',
                  'Asian Heritage Awards — Winners Announced',
                  'Chart Show Results: The #1 Track This Week',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 pb-4 border-b last:border-b-0 last:pb-0"
                    style={{ borderColor: 'rgba(216,198,165,0.15)' }}
                  >
                    <span
                      className="font-serif text-2xl font-light leading-none flex-shrink-0 w-5"
                      style={{ color: 'var(--color-gold-champagne)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <a
                      href="#"
                      className="font-sans text-xs leading-snug hover:text-gold-muted transition-colors"
                      style={{ color: 'var(--color-espresso)' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
