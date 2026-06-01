import type { Metadata } from 'next'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Sabras Radio — studio, advertising, events and general enquiries.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <p className="section-label mb-4" style={{ color: 'var(--color-gold-muted)' }}>We&apos;d Love to Hear From You</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light" style={{ color: 'var(--color-ivory)' }}>
            Get in Touch
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-ivory)' }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <p className="section-label mb-3">Send a Message</p>
              <h2 className="section-title mb-8">How Can We Help?</h2>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Contact cards */}
              {[
                {
                  icon: <Phone size={18} />,
                  title: 'Studio Line',
                  detail: '0116 261 0666',
                  sub: 'For song requests and shout-outs',
                  href: 'tel:01162610666',
                },
                {
                  icon: <MessageCircle size={18} />,
                  title: 'WhatsApp Studio',
                  detail: '+44 7700 900 000',
                  sub: 'Text or voice note the show',
                  href: 'https://wa.me/447700900000',
                },
                {
                  icon: <Mail size={18} />,
                  title: 'Email Us',
                  detail: 'hello@sabrasradio.com',
                  sub: 'For general and commercial enquiries',
                  href: 'mailto:hello@sabrasradio.com',
                },
              ].map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="flex items-start gap-5 p-6 border card-hover block"
                  style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-navy)', color: 'var(--color-gold-muted)' }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: 'var(--color-navy)' }}>
                      {c.title}
                    </p>
                    <p className="font-serif text-base font-medium" style={{ color: 'var(--color-espresso)' }}>
                      {c.detail}
                    </p>
                    <p className="font-sans text-[0.62rem] mt-0.5" style={{ color: 'var(--color-espresso-light)', opacity: 0.55 }}>
                      {c.sub}
                    </p>
                  </div>
                </a>
              ))}

              {/* Address */}
              <div
                className="p-6 border"
                style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'white' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-navy)', color: 'var(--color-gold-muted)' }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: 'var(--color-navy)' }}>
                      Studio Address
                    </p>
                    <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--color-espresso-light)', opacity: 0.7 }}>
                      Sabras Radio<br />
                      Network House<br />
                      Bede Island Business Park<br />
                      Leicester LE2 7EA
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div
                className="p-6 border"
                style={{ borderColor: 'rgba(216,198,165,0.25)', background: 'var(--color-navy)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={16} style={{ color: 'var(--color-gold-muted)' }} />
                  <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--color-gold-muted)' }}>
                    Office Hours
                  </p>
                </div>
                {[
                  { day: 'Monday – Friday', hrs: '9:00am – 6:00pm' },
                  { day: 'Saturday',        hrs: '10:00am – 4:00pm' },
                  { day: 'Sunday',          hrs: 'Closed (Studio Live)' },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-2.5 border-b last:border-b-0"
                    style={{ borderColor: 'rgba(216,198,165,0.1)' }}
                  >
                    <span className="font-sans text-[0.65rem]" style={{ color: 'var(--color-gold-champagne)', opacity: 0.6 }}>
                      {h.day}
                    </span>
                    <span className="font-sans text-[0.65rem] font-medium" style={{ color: 'var(--color-gold-champagne)' }}>
                      {h.hrs}
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
