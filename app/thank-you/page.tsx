import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — Wealth With Ecom™',
  description: 'Your Premium Brand Partnership application has been received.',
  robots: { index: false, follow: false },
}

const PLATFORMS = ['Amazon', 'TikTok Shop', 'Etsy', 'Shopify', 'Walmart']

const STEPS = [
  {
    n: '01',
    h: 'We review your application',
    p: 'Every application is read personally by our team — usually within 48 hours. No bots, no auto-replies.',
  },
  {
    n: '02',
    h: 'We reach out',
    p: 'If it’s a fit, we’ll contact you by email or phone to confirm the details and lock in a time that works.',
  },
  {
    n: '03',
    h: 'Your strategy call',
    p: 'We map the brand opportunity for your category, your investment level, and the exact next steps to build the asset.',
  },
]

const REVIEWS = [
  {
    q: 'I stopped trying to run a store and let them build the brand. Six months in, it’s the first asset I own that I could actually sell.',
    name: 'James R.',
    role: 'Property investor',
    initials: 'JR',
  },
  {
    q: 'The profit-split model is what sold me — they only win when I win. No retainer, no fluff, just a real brand being built around real margin.',
    name: 'Daniela M.',
    role: 'Former agency owner',
    initials: 'DM',
  },
  {
    q: 'I deployed capital expecting another side project. What I got was a category-positioned brand with real inventory and real margin.',
    name: 'Aaron K.',
    role: 'Angel investor',
    initials: 'AK',
  },
]

const PREP = [
  'Double-check your contact details — use a phone and email you can reach at the scheduled time.',
  'Be ready to talk numbers — your investment level, timeline, and the category you’re drawn to.',
  'Bring your questions — anything you want clarity on before moving forward.',
]

const Logo = ({ w, h, priority = false }: { w: number; h: number; priority?: boolean }) => (
  <Image
    src="/logo/logo-gold.png"
    alt="Wealth With Ecom"
    width={w}
    height={h}
    priority={priority}
    style={{ display: 'block' }}
  />
)

export default function ThankYouPage() {
  return (
    <div className="ad">
      {/* ============ HEADER ============ */}
      <header className="ad-nav ty-nav">
        <div className="ad-wrap ty-nav-inner">
          <Link href="/" className="ad-logo" aria-label="Wealth With Ecom — Home">
            <Logo w={104} h={59} priority />
          </Link>
        </div>
      </header>

      {/* ============ CONFIRMATION HERO ============ */}
      <section className="sec ty-hero">
        <div className="ty-hero-bg" aria-hidden="true" />
        <div className="ad-wrap center">
          <div className="ty-check">✓</div>
          <p className="sec-label reveal">Application Received</p>
          <h1 className="ty-h1 serif reveal">
            Congrats — you’re in.{' '}
            <span className="g">Your application has been received.</span>
          </h1>
          <p className="ty-sub reveal">
            Thank you for applying to the Wealth With Ecom™ Premium Brand
            Partnership. Our team reviews every application personally — if it’s a
            fit, we’ll reach out within 48 hours to schedule your strategy call.
          </p>
        </div>
      </section>

      {/* ============ WHAT HAPPENS NEXT ============ */}
      <section className="sec ad-sec">
        <div className="ad-wrap">
          <p className="sec-label reveal">What Happens Next</p>
          <h2 className="sec-h serif reveal">Here’s what to expect from here.</h2>

          <div className="ty-steps">
            {STEPS.map((s) => (
              <div className="ty-step reveal" key={s.n}>
                <span className="ty-step-n serif">{s.n}</span>
                <h3 className="serif">{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="sec ad-sec">
        <div className="ad-wrap">
          <p className="sec-label reveal">Partner Stories</p>
          <h2 className="sec-h serif reveal">See what others have to say.</h2>

          <div className="ty-revs">
            {REVIEWS.map((r) => (
              <figure className="ty-rev reveal" key={r.name}>
                <div className="ty-rev-stars" aria-hidden="true">★★★★★</div>
                <blockquote className="ty-rev-q">“{r.q}”</blockquote>
                <figcaption className="ty-rev-by">
                  <span className="ty-rev-av">{r.initials}</span>
                  <span>
                    <span className="ty-rev-name">{r.name}</span>
                    <span className="ty-rev-role">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PREPARE FOR YOUR CALL ============ */}
      <section className="sec ad-sec">
        <div className="ad-wrap">
          <p className="sec-label reveal">Before We Speak</p>
          <h2 className="sec-h serif reveal">Prepare for your call.</h2>

          <div className="ty-prep reveal">
            {PREP.map((item, i) => (
              <div className="ty-prep-item" key={i}>
                <span className="ty-prep-tick" aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="ty-prep-close reveal">We look forward to speaking with you.</p>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="sec ad-sec ty-contact-sec">
        <div className="ad-wrap center">
          <p className="sec-label reveal">Questions In The Meantime?</p>
          <p className="ty-contact reveal">
            Reach our team anytime at{' '}
            <a href="mailto:info@wealthwithecom.com" className="ty-contact-mail">
              info@wealthwithecom.com
            </a>
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="ad-foot">
        <div className="ad-wrap">
          <div className="ad-foot-top">
            <div className="ad-foot-brand">
              <Link href="/" className="ad-foot-logo" aria-label="Wealth With Ecom — Home">
                <Logo w={140} h={80} />
              </Link>
              <p className="ad-foot-state">
                Done-for-you private-label e-commerce brand building. We build the
                brand — you own the asset.
              </p>
            </div>
            <div className="ad-foot-meta">
              <span className="ad-foot-tag mono">Premium Brand Division</span>
              <span className="ad-foot-tag mono">Confidential</span>
              <div className="ad-foot-plats">
                {PLATFORMS.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="ad-foot-bottom">
            <span>© 2025 Wealth with Ecom™ · All rights reserved</span>
            <span className="ad-foot-disc">
              Results shown are not typical or guaranteed. Individual results vary.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
