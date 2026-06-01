import Link from 'next/link'
import SabrasLogo from './SabrasLogo'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home',         href: '/' },
  { label: 'Listen Live',  href: '#' },
  { label: 'Listen Back',  href: '/listen-back' },
  { label: 'Schedule',     href: '/schedule' },
  { label: 'Presenters',   href: '/presenters' },
  { label: 'News',         href: '/news' },
  { label: 'Events',       href: '/events' },
  { label: 'Competitions', href: '/competitions' },
  { label: 'Advertise',    href: '/advertise' },
  { label: 'Contact',      href: '/contact' },
]

const socials = [
  { label: 'Facebook',  href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: 'Twitter/X', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: 'Instagram', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: 'YouTube',   href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-navy-dark)', color: 'var(--color-ivory)' }}>
      {/* Sponsor strip */}
      <div style={{ background: 'var(--color-navy)', borderBottom: '1px solid rgba(216,198,165,0.08)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-8">
          <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: 'var(--color-gold-champagne)', opacity: 0.4 }}>
            Official Partners
          </span>
          {['Partner Brand', 'Sponsor Name', 'Media Group', 'Cultural Brand', 'Community Partner'].map((p) => (
            <span key={p} className="font-serif text-xs italic" style={{ color: 'var(--color-gold-champagne)', opacity: 0.35 }}>
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <SabrasLogo variant="light" />
          <p className="font-sans text-xs leading-relaxed mt-6 mb-6" style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}>
            The UK&apos;s premier South Asian radio station. Bringing you the biggest hits, exclusive shows, and the voices that matter since 1995.
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="transition-all duration-200 hover:opacity-100 hover:scale-110"
                style={{ color: 'var(--color-gold-champagne)', opacity: 0.45 }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: 'var(--color-gold-muted)' }}>
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-sans text-xs transition-colors duration-200 hover:opacity-100"
                  style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: 'var(--color-gold-muted)' }}>
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={13} style={{ color: 'var(--color-gold-muted)', flexShrink: 0, marginTop: 2 }} />
              <span className="font-sans text-xs leading-relaxed" style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}>
                Sabras Radio, Network House,<br />Bede Island Business Park,<br />Leicester LE2 7EA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={13} style={{ color: 'var(--color-gold-muted)' }} />
              <a href="tel:01162610666" className="font-sans text-xs hover:opacity-100 transition-opacity" style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}>
                0116 261 0666
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={13} style={{ color: 'var(--color-gold-muted)' }} />
              <a href="mailto:hello@sabrasradio.com" className="font-sans text-xs hover:opacity-100 transition-opacity" style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}>
                hello@sabrasradio.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: 'var(--color-gold-muted)' }}>
            Stay Connected
          </h3>
          <p className="font-sans text-xs mb-5 leading-relaxed" style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}>
            Get exclusive news, show updates and competition alerts delivered to your inbox.
          </p>
          <form className="space-y-3" action="#">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 font-sans text-xs bg-transparent border focus:outline-none focus:border-gold-muted transition-colors"
              style={{
                borderColor: 'rgba(216,198,165,0.2)',
                color: 'var(--color-ivory)',
              }}
            />
            <button type="submit" className="btn-gold w-full justify-center text-[0.6rem]">
              Subscribe
            </button>
          </form>

          {/* App download */}
          <div className="mt-6">
            <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--color-gold-muted)', opacity: 0.6 }}>
              Download the App
            </p>
            <div className="flex gap-2">
              <a href="#" className="flex items-center gap-2 px-3 py-2 border font-sans text-[0.6rem] transition-all hover:opacity-100" style={{ borderColor: 'rgba(216,198,165,0.2)', color: 'var(--color-gold-champagne)', opacity: 0.5 }}>
                <svg width="12" height="12" viewBox="0 0 814 1000" fill="currentColor"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.5-57.5-155.5-127.8c-47.1-66.5-88.3-166.5-88.3-261.2 0-161.9 105.5-247.3 209.1-247.3 55.8 0 102.1 36.3 137.3 36.3 33.8 0 86.8-37.7 152.2-37.7 25.6 0 108.2 2.6 168.6 98.8zM549.8 149.5c25.6-28.2 43.5-67.9 43.5-107.7 0-5.8-.6-11.6-1.9-16.2-41.5 1.9-91.5 28.2-122.9 59.9-22.7 23.3-43.5 62.2-43.5 103.3 0 6.4 1.3 12.8 1.9 14.7 2.6.6 6.4 1.3 10.3 1.3 37.6 0 85.1-24.3 112.6-55.3z"/></svg>
                App Store
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 border font-sans text-[0.6rem] transition-all hover:opacity-100" style={{ borderColor: 'rgba(216,198,165,0.2)', color: 'var(--color-gold-champagne)', opacity: 0.5 }}>
                <svg width="12" height="12" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l4.6 2.6 247.1-247v-5.7L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.8 17.1-26.3-.1-36.1l-1.1-.7zm-73.5 56.3L204.4 281l-64.4 64.4 211.6 121.4 106.7-60.3-64.3-65.2z"/></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(216,198,165,0.08)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[0.65rem]" style={{ color: 'var(--color-gold-champagne)', opacity: 0.35 }}>
            © {new Date().getFullYear()} Sabras Radio Ltd. All rights reserved. Ofcom licensed broadcaster.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Editorial Policy'].map((item) => (
              <a key={item} href="#" className="font-sans text-[0.65rem] hover:opacity-100 transition-opacity" style={{ color: 'var(--color-gold-champagne)', opacity: 0.35 }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
