'use client'

import { useState } from 'react'

// Same Formspree form as the ad landing page — leads land in
// info@wealthwithecom.com. Set NEXT_PUBLIC_FORMSPREE_ID in .env.local.
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''}`

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')

    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const json = await res.json().catch(() => null)
        setStatus('error')
        setError(json?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error — please check your connection and try again.')
    }
  }

  if (status === 'success') {
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
    <form className="form-box" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="_subject"
        value="New Free Consultation Request — Wealth With Ecom™"
      />
      {/* Honeypot (Formspree ignores submissions where _gotcha is filled) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
        aria-hidden="true"
      />
      <div className="row2">
        <div className="field">
          <label htmlFor="fname">First Name *</label>
          <input id="fname" name="first_name" type="text" placeholder="Jane" required />
        </div>
        <div className="field">
          <label htmlFor="lname">Last Name *</label>
          <input id="lname" name="last_name" type="text" placeholder="Doe" required />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" placeholder="jane@email.com" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" placeholder="+1 ..." required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="budget">Capital Budget *</label>
        <select id="budget" name="budget" required defaultValue="">
          <option value="" disabled>Select your budget range…</option>
          <option>$5,000 – $15,000</option>
          <option>$15,000 – $30,000</option>
          <option>$30,000 – $75,000</option>
          <option>$75,000+</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="store">Which store(s) are you interested in? *</label>
        <select id="store" name="store_interest" required defaultValue="">
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
          name="message"
          rows={3}
          placeholder="Goals, timeline, family/friends accounts…"
          style={{ resize: 'none' }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-gold"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Submitting…' : 'Request My Free Consultation →'}
      </button>
      {status === 'error' && (
        <p style={{ textAlign: 'center', color: '#ff6b6b', fontSize: 13, marginTop: 12 }}>{error}</p>
      )}
      <p style={{ textAlign: 'center', color: 'var(--muted-2)', fontSize: 12, marginTop: 14 }}>
        🔒 End-to-end encryption active.
      </p>
    </form>
  )
}
