import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { presenters } from '@/data'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = presenters.find((x) => x.slug === slug)
  if (!p) return {}
  return {
    title: p.name,
    description: p.bio,
  }
}

export function generateStaticParams() {
  return presenters.map((p) => ({ slug: p.slug }))
}

export default async function PresenterProfilePage({ params }: Props) {
  const { slug } = await params
  const presenter = presenters.find((p) => p.slug === slug)
  if (!presenter) notFound()

  const others = presenters.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--color-navy)' }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <Link
            href="/presenters"
            className="inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-widest uppercase mb-10 hover:opacity-100 transition-opacity"
            style={{ color: 'var(--color-gold-champagne)', opacity: 0.55 }}
          >
            <ArrowLeft size={12} />
            All Presenters
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Info */}
            <div className="lg:col-span-6">
              <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>
                {presenter.show}
              </p>
              <h1
                className="font-serif font-light leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'var(--color-ivory)' }}
              >
                {presenter.name}
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={13} style={{ color: 'var(--color-gold-muted)' }} />
                  <span className="font-sans text-xs" style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}>
                    {presenter.days}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={13} style={{ color: 'var(--color-gold-muted)' }} />
                  <span className="font-sans text-xs" style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}>
                    {presenter.time}
                  </span>
                </div>
              </div>
              <p
                className="font-sans text-sm leading-relaxed max-w-lg"
                style={{ color: 'var(--color-gold-champagne)', opacity: 0.65 }}
              >
                {presenter.bio}
              </p>
            </div>

            {/* Avatar */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div
                className={`${presenter.swatch} relative overflow-hidden w-64 md:w-80`}
                style={{ aspectRatio: '3 / 4', borderRadius: '2px' }}
              >
                {'photo' in presenter && presenter.photo ? (
                  <Image
                    src={presenter.photo as string}
                    alt={presenter.name}
                    fill
                    className="object-contain"
                    sizes="320px"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-serif font-light"
                      style={{ fontSize: '7rem', color: 'rgba(255,255,255,0.45)' }}
                    >
                      {presenter.initials}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-16 md:py-20" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="section-title mb-8">About {presenter.name.split(' ')[0]}</h2>

            <div
              className="font-sans text-sm leading-loose space-y-5"
              style={{ color: 'var(--color-espresso-light)', opacity: 0.8 }}
            >
              <p>{presenter.bio}</p>
              <p>
                {presenter.name.split(' ')[0]} has built a loyal audience through their authentic connection with South Asian culture and music. Every show is crafted to reflect the diversity, passion and energy of the community that makes Sabras Radio the UK&apos;s number-one South Asian station.
              </p>
              <p>
                Tune in to <strong style={{ color: 'var(--color-navy)', fontWeight: 600 }}>{presenter.show}</strong> on{' '}
                {presenter.days}, {presenter.time} — only on Sabras Radio.
              </p>
            </div>

            {/* Recent shows */}
            <div className="mt-10">
              <h3
                className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-5"
                style={{ color: 'var(--color-gold-muted)' }}
              >
                Recent Episodes
              </h3>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday'].map((day, i) => (
                  <div
                    key={day}
                    className="flex items-center justify-between p-4 border transition-all hover:shadow-card cursor-pointer"
                    style={{ borderColor: 'rgba(216,198,165,0.2)', background: 'white' }}
                  >
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--color-navy)' }}>
                        {presenter.show} — {day}
                      </p>
                      <p className="font-sans text-[0.62rem]" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                        {presenter.time} · {60 - i * 5} mins
                      </p>
                    </div>
                    <button className="btn-navy text-[0.6rem] px-4 py-2">
                      Play
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5">
            <div
              className="p-7 border"
              style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
            >
              <h3
                className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-5"
                style={{ color: 'var(--color-gold-muted)' }}
              >
                Show Details
              </h3>
              {[
                { label: 'Programme', value: presenter.show },
                { label: 'Broadcast Days', value: presenter.days },
                { label: 'Time', value: presenter.time },
                { label: 'Station', value: 'Sabras Radio' },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between py-3 border-b last:border-b-0"
                  style={{ borderColor: 'rgba(216,198,165,0.12)' }}
                >
                  <span className="font-sans text-xs" style={{ color: 'var(--color-espresso-light)', opacity: 0.5 }}>
                    {row.label}
                  </span>
                  <span className="font-sans text-xs font-medium" style={{ color: 'var(--color-navy)' }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Other presenters */}
      <section className="py-12 md:py-16" style={{ background: 'var(--color-ivory-warm)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="section-title mb-8">More Presenters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link key={p.slug} href={`/presenters/${p.slug}`} className="group block">
                <div className="card-base overflow-hidden" style={{ background: 'white' }}>
                  <div className={`${p.swatch} relative overflow-hidden`} style={{ aspectRatio: '3/2' }}>
                    {'photo' in p && p.photo ? (
                      <Image
                        src={p.photo as string}
                        alt={p.name}
                        fill
                        className="object-contain"
                        sizes="(min-width: 640px) 33vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-5xl font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>
                          {p.initials}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="font-serif text-lg font-medium group-hover:text-gold-muted transition-colors" style={{ color: 'var(--color-navy)' }}>
                      {p.name}
                    </p>
                    <p className="font-sans text-xs" style={{ color: 'var(--color-gold-muted)' }}>
                      {p.show}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
