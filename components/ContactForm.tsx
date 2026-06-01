'use client'

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-sans text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
            First Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border font-sans text-sm focus:outline-none transition-colors"
            style={{ borderColor: 'rgba(216,198,165,0.3)', background: 'white', color: 'var(--color-espresso)' }}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label className="block font-sans text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border font-sans text-sm focus:outline-none transition-colors"
            style={{ borderColor: 'rgba(216,198,165,0.3)', background: 'white', color: 'var(--color-espresso)' }}
            placeholder="Your last name"
          />
        </div>
      </div>
      <div>
        <label className="block font-sans text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
          Email Address
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 border font-sans text-sm focus:outline-none transition-colors"
          style={{ borderColor: 'rgba(216,198,165,0.3)', background: 'white', color: 'var(--color-espresso)' }}
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block font-sans text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
          Enquiry Type
        </label>
        <select
          className="w-full px-4 py-3 border font-sans text-sm focus:outline-none transition-colors appearance-none"
          style={{ borderColor: 'rgba(216,198,165,0.3)', background: 'white', color: 'var(--color-espresso)' }}
        >
          <option>General Enquiry</option>
          <option>Advertising &amp; Commercial</option>
          <option>Music Submission</option>
          <option>Events &amp; Roadshows</option>
          <option>Competition</option>
          <option>Technical / Website</option>
          <option>Press &amp; Media</option>
        </select>
      </div>
      <div>
        <label className="block font-sans text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: 'var(--color-espresso-light)', opacity: 0.6 }}>
          Message
        </label>
        <textarea
          rows={6}
          className="w-full px-4 py-3 border font-sans text-sm focus:outline-none transition-colors resize-none"
          style={{ borderColor: 'rgba(216,198,165,0.3)', background: 'white', color: 'var(--color-espresso)' }}
          placeholder="Tell us how we can help…"
        />
      </div>
      <button type="submit" className="btn-gold text-[0.7rem] px-8 py-4">
        Send Message
      </button>
    </form>
  )
}
