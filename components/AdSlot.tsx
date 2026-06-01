import clsx from 'clsx'

type AdSlotProps = {
  label?: string
  className?: string
  size?: 'leaderboard' | 'rectangle' | 'skyscraper' | 'banner' | 'square'
}

const sizes = {
  leaderboard: 'w-full h-[90px] md:h-[100px]',
  rectangle:   'w-full h-[250px]',
  skyscraper:  'w-full h-[600px]',
  banner:      'w-full h-[60px]',
  square:      'w-full h-[200px]',
}

export default function AdSlot({ label = 'Advertisement', className, size = 'leaderboard' }: AdSlotProps) {
  return (
    <div
      className={clsx(
        sizes[size],
        'border border-gold-champagne/30 bg-ivory-warm/40 flex flex-col items-center justify-center gap-1',
        className,
      )}
      aria-label="Advertisement"
      role="complementary"
    >
      <span
        className="text-[0.55rem] tracking-[0.3em] uppercase font-sans font-medium"
        style={{ color: 'var(--color-espresso-light)', opacity: 0.45 }}
      >
        {label}
      </span>
      <span
        className="text-[0.6rem] font-sans"
        style={{ color: 'var(--color-espresso-light)', opacity: 0.3 }}
      >
        Your brand here
      </span>
    </div>
  )
}
