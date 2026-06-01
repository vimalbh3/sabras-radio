import type { Metadata } from 'next'
import { CheckCircle, ArrowRight } from 'lucide-react'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Advertise',
  description: 'Reach over one million South Asian listeners. Advertise on Sabras Radio.',
}

const packages = [
  {
    name: 'Sponsorship',
    desc: 'Own a flagship show with full brand association, read-outs, and integrated digital promotion.',
    features: ['Show sponsor credits', 'Presenter read-outs', 'Social media integration', 'Microsite feature', 'Monthly performance report'],
    cta: 'Enquire',
    highlight: false,
  },
  {
    name: 'Campaign',
    desc: 'A full cross-platform campaign combining airtime, digital, social and live event exposure.',
    features: ['Bespoke airtime schedule', 'Digital display ads', 'Social media campaign', 'Event presence', 'Detailed analytics', 'Dedicated account manager'],
    cta: 'Get a Proposal',
    highlight: true,
  },
  {
    name: 'Spot Ads',
    desc: 'Premium 30 or 60-second spots broadcast to our audience during peak listening times.',
    features: ['30 or 60 second spots', 'Peak time slots available', 'Professional production', 'Frequency planning', 'Reach reporting'],
    cta: 'Enquire',
    highlight: false,
  },
]

export default function AdvertisePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'var(--color-navy)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(184,149,95,0.12), transparent)' }}
        />
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>Partner With Us</p>
          <h1
            className="font-serif font-light leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--color-ivory)' }}
          >
            Reach One Million<br />
            <em style={{ color: 'var(--color-gold-muted)' }}>South Asian Listeners</em>
          </h1>
          <p
            className="font-sans text-sm max-w-xl leading-relaxed"
            style={{ color: 'var(--color-gold-champagne)', opacity: 0.65 }}
          >
            Sabras Radio is the UK&apos;s leading South Asian radio station. With over 30 years of trust, heritage and cultural authority, we offer unrivalled access to this affluent and engaged audience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-14 border-t" style={{ borderColor: 'rgba(216,198,165,0.15)' }}>
            {[
              { num: '1M+',   label: 'Weekly Listeners' },
              { num: '30+',   label: 'Years Broadcasting' },
              { num: '24/7',  label: 'Live Broadcast' },
              { num: '£52k',  label: 'Average Household Income' },
            ].map((s) => (
              <div
                key={s.label}
                className="pt-8 pr-8"
              >
                <p className="font-serif text-4xl font-light" style={{ color: 'var(--color-gold-champagne)' }}>
                  {s.num}
                </p>
                <p className="font-sans text-[0.65rem] tracking-widest uppercase mt-2" style={{ color: 'var(--color-gold-champagne)', opacity: 0.5 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad formats */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">Advertising Formats</p>
            <h2 className="section-title">Our Ad Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { title: 'Radio Spots',       desc: '30 & 60-second broadcast ads in premium peak-time slots.' },
              { title: 'Show Sponsorship',  desc: 'Own a show with full branding, credits and presenter association.' },
              { title: 'Digital Display',   desc: 'Leaderboard, rectangle and sidebar units across sabrasradio.com.' },
              { title: 'Branded Content',   desc: 'Native editorial integrations produced by our creative team.' },
              { title: 'Social Media',      desc: 'Sponsored posts and campaign amplification across all platforms.' },
              { title: 'Event Presence',    desc: 'Presence at roadshows, Bollywood nights and community events.' },
              { title: 'Competition Tie-In', desc: 'Sponsored prize competitions with high listener engagement.' },
              { title: 'Podcast Ads',       desc: 'Pre-roll and mid-roll sponsorship on Sabras podcast content.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 border card-hover"
                style={{ borderColor: 'rgba(216,198,165,0.2)', background: 'white' }}
              >
                <h3 className="font-serif text-lg mb-2" style={{ color: 'var(--color-navy)' }}>
                  {item.title}
                </h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Example ad placements */}
          <div className="space-y-4">
            <p className="section-label">Example Placements</p>
            <AdSlot size="leaderboard" label="Leaderboard 728×90 · Desktop Header" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AdSlot size="rectangle" label="Rectangle 300×250" />
              <AdSlot size="rectangle" label="Rectangle 300×250" />
              <AdSlot size="rectangle" label="Rectangle 300×250" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory-warm)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">Packages</p>
            <h2 className="section-title">Choose Your Package</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: pkg.highlight ? 'var(--color-navy)' : 'white',
                  boxShadow: pkg.highlight ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
                }}
              >
                {pkg.highlight && (
                  <span
                    className="font-sans text-[0.55rem] tracking-[0.25em] uppercase font-semibold px-2 py-1 w-fit mb-4"
                    style={{ background: 'var(--color-gold-muted)', color: 'var(--color-ivory)' }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className="font-serif text-2xl font-light mb-3"
                  style={{ color: pkg.highlight ? 'var(--color-ivory)' : 'var(--color-navy)' }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="font-sans text-xs leading-relaxed mb-6"
                  style={{ color: pkg.highlight ? 'rgba(216,198,165,0.6)' : 'var(--color-espresso-light)', opacity: pkg.highlight ? 1 : 0.7 }}
                >
                  {pkg.desc}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle
                        size={13}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-gold-muted)' }}
                      />
                      <span
                        className="font-sans text-xs"
                        style={{ color: pkg.highlight ? 'rgba(216,198,165,0.75)' : 'var(--color-espresso-light)', opacity: pkg.highlight ? 1 : 0.75 }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={pkg.highlight ? 'btn-gold w-full justify-center' : 'btn-navy w-full justify-center'}
                >
                  {pkg.cta} <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <p className="section-label mb-4">Get in Touch</p>
          <h2 className="section-title mb-6">Ready to reach your audience?</h2>
          <p className="font-sans text-sm max-w-xl mx-auto mb-8" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
            Our commercial team will build a bespoke proposal for your brand. Get in touch today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:commercial@sabrasradio.com" className="btn-gold">
              Email Our Team <ArrowRight size={13} />
            </a>
            <a href="tel:01162610666" className="btn-outline">
              Call 0116 261 0666
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
