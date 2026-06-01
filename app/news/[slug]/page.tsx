import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Share2 } from 'lucide-react'
import { newsArticles } from '@/data'
import AdSlot from '@/components/AdSlot'
import type { Metadata } from 'next'

const allArticles = [
  ...newsArticles.bollywood,
  ...newsArticles.entertainment,
  ...newsArticles.world,
]

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const a = allArticles.find((x) => x.slug === slug)
  if (!a) return {}
  return { title: a.headline, description: a.excerpt }
}

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = allArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = allArticles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3)

  return (
    <>
      {/* Article hero */}
      <section
        className={`${article.swatch} relative`}
        style={{ minHeight: 380 }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(15,28,63,0.3) 0%, rgba(15,28,63,0.7) 100%)' }}
        />
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col justify-end" style={{ minHeight: 380 }}>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-widest uppercase mb-8 hover:opacity-100 transition-opacity"
            style={{ color: 'rgba(216,198,165,0.65)' }}
          >
            <ArrowLeft size={12} />
            All News
          </Link>
          <span
            className="inline-block font-sans text-[0.55rem] tracking-[0.25em] uppercase font-semibold px-2 py-1 mb-4 w-fit"
            style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
          >
            {article.category}
          </span>
          <h1
            className="font-serif font-light leading-snug max-w-3xl"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-ivory)' }}
          >
            {article.headline}
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5">
              <Clock size={12} style={{ color: 'var(--color-gold-muted)' }} />
              <span className="font-sans text-xs" style={{ color: 'rgba(216,198,165,0.7)' }}>
                {article.readTime}
              </span>
            </div>
            <span className="font-sans text-xs" style={{ color: 'rgba(216,198,165,0.5)' }}>·</span>
            <span className="font-sans text-xs" style={{ color: 'rgba(216,198,165,0.7)' }}>
              {article.date}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-20" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article content */}
            <article className="lg:col-span-7">
              <p
                className="font-serif text-xl font-light leading-relaxed mb-8"
                style={{ color: 'var(--color-espresso)' }}
              >
                {article.excerpt}
              </p>

              <div className="gold-divider mb-8" />

              <div
                className="font-sans text-sm leading-loose space-y-5 prose max-w-none"
                style={{ color: 'var(--color-espresso-light)', opacity: 0.85 }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote
                  className="border-l-4 pl-6 py-1 my-8"
                  style={{ borderColor: 'var(--color-gold-muted)' }}
                >
                  <p
                    className="font-serif text-xl italic font-light"
                    style={{ color: 'var(--color-navy)' }}
                  >
                    &ldquo;South Asian culture has never had a stronger voice, and Sabras Radio has been at the heart of that story for three decades.&rdquo;
                  </p>
                </blockquote>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>

              {/* Share */}
              <div
                className="flex items-center gap-4 mt-10 pt-8 border-t"
                style={{ borderColor: 'rgba(216,198,165,0.2)' }}
              >
                <span className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                  Share
                </span>
                <button className="btn-outline text-[0.6rem] px-4 py-2 flex items-center gap-2">
                  <Share2 size={11} />
                  Share Story
                </button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              <AdSlot size="rectangle" label="Sponsored" />

              {related.length > 0 && (
                <div
                  className="p-6 border"
                  style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
                >
                  <h3
                    className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-5"
                    style={{ color: 'var(--color-gold-muted)' }}
                  >
                    Related Stories
                  </h3>
                  <div className="space-y-4">
                    {related.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/news/${a.slug}`}
                        className="flex gap-3 group"
                      >
                        <div
                          className={`${a.swatch} flex-shrink-0`}
                          style={{ width: 64, height: 64 }}
                        />
                        <div>
                          <p
                            className="font-sans text-xs leading-snug group-hover:text-gold-muted transition-colors"
                            style={{ color: 'var(--color-navy)' }}
                          >
                            {a.headline}
                          </p>
                          <p
                            className="font-sans text-[0.58rem] mt-1"
                            style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}
                          >
                            {a.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <AdSlot size="square" label="Advertisement" />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
