'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import SabrasLogo from './SabrasLogo'
import { useApp } from '@/contexts/AppContext'

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Schedule',   href: '/schedule' },
  { label: 'News',       href: '/news' },
  { label: 'Presenters', href: '/presenters' },
  { label: 'Events',     href: '/events' },
  { label: 'Advertise',  href: '/advertise' },
  { label: 'Contact',    href: '/contact' },
]

const socials = [
  { label: 'Facebook',  href: '#', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { label: 'Twitter/X', href: '#', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { label: 'Instagram', href: '#', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { label: 'YouTube',   href: '#', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
]

export default function Header() {
  const { openListenLive, nowPlaying } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-[90] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(247,243,237,0.97)' : 'var(--color-ivory)',
          boxShadow: scrolled ? 'var(--shadow-header)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* Top utility bar */}
        <div
          className={`transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}
          style={{ background: 'var(--color-navy-dark)', borderBottom: '1px solid rgba(216,198,165,0.1)' }}
        >
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between h-9">
            {/* Now playing ticker */}
            <div className="flex items-center gap-3 overflow-hidden flex-1 min-w-0">
              <span
                className="flex-shrink-0 font-sans text-[0.55rem] tracking-[0.2em] uppercase font-semibold px-2 py-0.5"
                style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
              >
                On Air
              </span>
              <div className="overflow-hidden flex-1">
                <div className="marquee-track">
                  {[0, 1].map((j) => (
                    <span
                      key={j}
                      className="font-sans text-[0.65rem] pr-16 whitespace-nowrap"
                      style={{ color: 'var(--color-gold-champagne)', opacity: 0.8 }}
                    >
                      {nowPlaying.show}{nowPlaying.presenter ? ` with ${nowPlaying.presenter}` : ''}
                      {nowPlaying.track && <>&nbsp;·&nbsp; Now Playing: {nowPlaying.track}</>}
                      {nowPlaying.nextShow && <>&nbsp;·&nbsp; Up Next: {nowPlaying.nextShow}{nowPlaying.nextPresenter ? ` with ${nowPlaying.nextPresenter}` : ''}{nowPlaying.nextTime ? ` at ${nowPlaying.nextTime}` : ''}</>}
                      {nowPlaying.listeners != null && <>&nbsp;·&nbsp; {nowPlaying.listeners.toLocaleString()} listeners</>}
                      &nbsp;·&nbsp; Call us: 0116 261 0666
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact + socials */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0 ml-6">
              <a
                href="https://wa.me/441162610666"
                className="flex items-center gap-1.5 font-sans text-[0.65rem] transition-colors hover:opacity-100"
                style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}
              >
                <MessageCircle size={11} />
                WhatsApp
              </a>
              <a
                href="tel:01162610666"
                className="flex items-center gap-1.5 font-sans text-[0.65rem] transition-colors hover:opacity-100"
                style={{ color: 'var(--color-gold-champagne)', opacity: 0.7 }}
              >
                <Phone size={11} />
                0116 261 0666
              </a>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="transition-colors hover:opacity-100"
                    style={{ color: 'var(--color-gold-champagne)', opacity: 0.55 }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center gap-6 h-[64px]">
          {/* Logo */}
          <SabrasLogo variant="dark" />

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-[0.72rem] font-medium tracking-[0.08em] uppercase transition-colors duration-200 relative group"
                style={{ color: 'var(--color-espresso)' }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                  style={{ background: 'var(--color-gold-muted)' }}
                />
              </Link>
            ))}
            <button
              onClick={openListenLive}
              className="font-sans text-[0.72rem] font-medium tracking-[0.08em] uppercase transition-colors duration-200 relative group"
              style={{ color: 'var(--color-espresso)' }}
            >
              Listen Live
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ background: 'var(--color-gold-muted)' }}
              />
            </button>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3 ml-auto">
            <button onClick={openListenLive} className="btn-gold hidden sm:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-ivory animate-pulse" />
              Listen Live
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{ color: 'var(--color-navy)' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className="gold-divider" />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[80] lg:hidden transition-all duration-400 ${mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        style={{ background: 'var(--color-navy-dark)' }}
      >
        <div className="flex flex-col h-full pt-[80px] px-8 pb-8">
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-serif text-3xl font-light py-3 border-b transition-colors"
                style={{
                  color: 'var(--color-ivory)',
                  borderColor: 'rgba(216,198,165,0.1)',
                  transitionDelay: `${i * 40}ms`,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobileOpen(false); openListenLive() }}
              className="font-serif text-3xl font-light py-3 text-left border-b"
              style={{ color: 'var(--color-gold-muted)', borderColor: 'rgba(216,198,165,0.1)' }}
            >
              Listen Live
            </button>
          </nav>

          <div className="flex items-center gap-5 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="transition-colors hover:opacity-100"
                style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="tel:01162610666"
              className="flex items-center gap-2 font-sans text-xs"
              style={{ color: 'var(--color-gold-champagne)', opacity: 0.5 }}
            >
              <Phone size={12} />
              0116 261 0666
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[64px]" aria-hidden="true" />
    </>
  )
}
