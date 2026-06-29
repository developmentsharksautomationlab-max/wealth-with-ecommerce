'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Formspree form ID (just the part after /f/). Set NEXT_PUBLIC_FORMSPREE_ID
// in .env.local. Leads are delivered to the inbox tied to this form in the
// Formspree dashboard (info@wealthwithecom.com).
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''}`

const INVESTMENT_LEVELS = [
  'Under $10,000',
  '$10,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000+',
]

const CATEGORIES = [
  'Home & Living',
  'Wellness & Beauty',
  'Kitchen & Lifestyle',
  'Fashion & Apparel',
  'Pets',
  'Other / Not sure',
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function AdApplicationForm() {
  const router = useRouter()
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
        // Keep the button in its "Submitting…" state while we navigate away.
        router.push('/thank-you')
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

  return (
    <form className="ad-form form-box" onSubmit={handleSubmit}>
      {/* Formspree config — leads are delivered to the inbox tied to this form */}
      <input
        type="hidden"
        name="_subject"
        value="New Brand Partnership Application — Wealth With Ecom™"
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
          <label htmlFor="ad-fname">First Name *</label>
          <input id="ad-fname" name="first_name" type="text" placeholder="First name" required />
        </div>
        <div className="field">
          <label htmlFor="ad-lname">Last Name *</label>
          <input id="ad-lname" name="last_name" type="text" placeholder="Last name" required />
        </div>
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="ad-email">Email Address *</label>
          <input id="ad-email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <div className="field">
          <label htmlFor="ad-phone">Phone Number *</label>
          <input id="ad-phone" name="phone" type="tel" placeholder="Phone number" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="ad-investment">Investment Level *</label>
        <select id="ad-investment" name="investment_level" required defaultValue="">
          <option value="" disabled>Select your investment range…</option>
          {INVESTMENT_LEVELS.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="ad-category">Category Interest *</label>
        <select id="ad-category" name="category_interest" required defaultValue="">
          <option value="" disabled>Select your category interest…</option>
          {CATEGORIES.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="ad-message">What are you trying to build?</label>
        <textarea
          id="ad-message"
          name="message"
          rows={4}
          placeholder="Tell us about the brand you want to build…"
          style={{ resize: 'none' }}
        />
      </div>

      <button type="submit" className="ad-pill ad-pill-gold ad-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Submit Application →'}
      </button>

      {status === 'error' && <p className="ad-form-error">{error}</p>}
    </form>
  )
}
