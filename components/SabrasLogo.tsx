import Link from 'next/link'

export default function SabrasLogo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const headColor = variant === 'light' ? '#F7F3ED' : '#0F1C3F'
  const subColor  = variant === 'light' ? '#D8C6A5' : '#B8955F'
  const dotColor  = variant === 'light' ? '#D8C6A5' : '#B8955F'

  return (
    <Link href="/" aria-label="Sabras Radio — Home" className="flex flex-col leading-none select-none">
      <span
        className="font-serif text-[1.75rem] font-semibold tracking-[0.18em] uppercase"
        style={{ color: headColor, fontFamily: 'var(--font-serif)' }}
      >
        SABRAS
        <span style={{ color: dotColor }}>.</span>
      </span>
      <span
        className="font-sans text-[0.52rem] tracking-[0.5em] font-medium uppercase mt-[-3px]"
        style={{ color: subColor, fontFamily: 'var(--font-sans)' }}
      >
        Radio
      </span>
    </Link>
  )
}
