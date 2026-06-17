import Link from 'next/link'
import { ArrowRight, Megaphone, Share2, BarChart2, Trophy } from 'lucide-react'

const blocks = [
  {
    icon: <Megaphone size={28} />,
    label: 'Grow Your Brand',
    title: 'Advertise With Us',
    body: 'Reach over one million South Asian listeners with bespoke advertising packages tailored to your audience.',
    href: '/advertise',
    bg: 'var(--color-navy)',
    accent: 'var(--color-gold-muted)',
    textColor: 'var(--color-ivory)',
  },
  {
    icon: <Share2 size={28} />,
    label: 'Connect',
    title: 'Follow Us On Social',
    body: 'Join the conversation. Behind the scenes, exclusive content and daily updates — all on your favourite platforms.',
    href: '#',
    bg: 'var(--color-ivory-warm)',
    accent: 'var(--color-navy)',
    textColor: 'var(--color-espresso)',
  },
  {
    icon: <BarChart2 size={28} />,
    label: 'Every Friday',
    title: 'The Chart Show',
    body: 'Vote for your favourite track and hear the results live every Friday from 7pm with Dev Singh.',
    href: '/chart-show',
    bg: 'var(--color-gold-muted)',
    accent: 'var(--color-ivory)',
    textColor: 'var(--color-ivory)',
  },
  {
    icon: <Trophy size={28} />,
    label: 'Win Big',
    title: 'Competitions & Offers',
    body: 'VIP tickets, money-can\'t-buy experiences and exclusive prizes. Don\'t miss your chance to win.',
    href: '/competitions',
    bg: 'white',
    accent: 'var(--color-gold-muted)',
    textColor: 'var(--color-espresso)',
  },
]

export default function PromoBlocks() {
  return (
    <section style={{ background: 'var(--color-ivory-warm)' }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {blocks.map((b, i) => (
            <Link
              key={i}
              href={b.href}
              className="group relative p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: b.bg,
                borderRight: i < blocks.length - 1 ? '1px solid rgba(216,198,165,0.15)' : 'none',
              }}
            >
              {/* Icon */}
              <div
                className="mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ color: b.accent }}
              >
                {b.icon}
              </div>

              {/* Label */}
              <p
                className="font-sans text-[0.58rem] tracking-[0.3em] uppercase font-semibold mb-3"
                style={{ color: b.accent, opacity: 0.7 }}
              >
                {b.label}
              </p>

              {/* Title */}
              <h3
                className="font-serif text-xl md:text-2xl font-light mb-3 leading-snug"
                style={{ color: b.textColor }}
              >
                {b.title}
              </h3>

              {/* Body */}
              <p
                className="font-sans text-xs leading-relaxed flex-1"
                style={{ color: b.textColor, opacity: 0.65 }}
              >
                {b.body}
              </p>

              {/* Arrow */}
              <div
                className="mt-6 flex items-center gap-2 font-sans text-[0.62rem] tracking-[0.15em] uppercase transition-gap duration-300 group-hover:gap-3"
                style={{ color: b.accent }}
              >
                Find Out More <ArrowRight size={12} />
              </div>

              {/* Hover border accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: b.accent }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
