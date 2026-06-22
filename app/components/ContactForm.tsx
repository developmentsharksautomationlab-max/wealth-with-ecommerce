'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-box" style={{ textAlign: 'center', padding: '60px 36px' }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 24, marginBottom: 12 }}>
          Thank You!
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
          A senior consultant will reach out within 24 hours to schedule your free strategy call.
        </p>
      </div>
    )
  }

  return (
    <form className="form-box" onSubmit={handleSubmit} noValidate>
      <div className="row2">
        <div className="field">
          <label htmlFor="fname">First Name *</label>
          <input id="fname" type="text" placeholder="Jane" required />
        </div>
        <div className="field">
          <label htmlFor="lname">Last Name *</label>
          <input id="lname" type="text" placeholder="Doe" required />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" placeholder="jane@email.com" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" type="tel" placeholder="+1 ..." required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="budget">Capital Budget *</label>
        <select id="budget" required defaultValue="">
          <option value="" disabled>Select your budget range…</option>
          <option>$5,000 – $15,000</option>
          <option>$15,000 – $30,000</option>
          <option>$30,000 – $75,000</option>
          <option>$75,000+</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="store">Which store(s) are you interested in? *</label>
        <select id="store" required defaultValue="">
          <option value="" disabled>Select a platform…</option>
          <option>Amazon Automated Store</option>
          <option>Shopify Automated Store</option>
          <option>Walmart Automated Store</option>
          <option>Etsy Automated Store</option>
          <option>TikTok Automated Store</option>
          <option>YouTube Automated Account</option>
          <option>Diversified Portfolio (Multiple)</option>
          <option>AI Sharks — AI Solutions</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="notes">Anything we should know?</label>
        <textarea
          id="notes"
          rows={3}
          placeholder="Goals, timeline, family/friends accounts…"
          style={{ resize: 'none' }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-gold"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        Request My Free Consultation →
      </button>
      <p style={{ textAlign: 'center', color: 'var(--muted-2)', fontSize: 12, marginTop: 14 }}>
        🔒 End-to-end encryption active.
      </p>
    </form>
  )
}
