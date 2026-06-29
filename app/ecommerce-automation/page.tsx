import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AdApplicationForm from '../components/AdApplicationForm'

export const metadata: Metadata = {
  title: 'Wealth With Ecom™ — Premium Brand Partnership',
  description:
    'Done-for-you private-label brand building on Amazon, TikTok Shop, Etsy, Shopify, and Walmart. We build the e-commerce brand. You own the asset.',
}

/* ---- Top nav links (in-page anchors) ---- */
const NAV = [
  { label: 'What We Build', href: '#what-we-build' },
  { label: 'The Process', href: '#process' },
  { label: 'Investment', href: '#investment' },
]

/* ---- Live-on platforms ---- */
const LIVE_ON = [
  { name: 'Amazon', logo: '/logos/amazon.png', w: 74, h: 34 },
  { name: 'TikTok Shop', logo: '/logos/tiktok.png', w: 70, h: 40 },
  { name: 'Etsy', logo: '/logos/etsy.png', w: 60, h: 32 },
  { name: 'Shopify', logo: '/logos/shopify.png', w: 78, h: 36 },
  { name: 'Walmart', logo: '/logos/walmart.png', w: 110, h: 44 },
]

/* ---- The Problem ---- */
const PROBLEMS = [
  'Random product testing with no brand architecture — chasing trends instead of owning a category.',
  'Thin margins because positioning was never built correctly from the start.',
  'Supplier dependency that means one change ends everything you’ve built.',
  'Revenue that looks good until you subtract ad spend, fulfilment, and returns.',
  'Stores that generate income — but couldn’t be sold for more than a month’s revenue.',
]

/* ---- What We Do ---- */
const PILLARS = [
  {
    n: '01',
    h: 'Brand Architecture',
    p: 'Positioning, naming, category selection, and competitive differentiation built for premium margin. We own the category before we place the first order.',
  },
  {
    n: '02',
    h: 'Product + Inventory',
    p: 'Private label, wholesale, or white label inventory sourced and deployed from day one. Real products. Real stock. Not dropshipping promises.',
  },
  {
    n: '03',
    h: 'Platform Execution',
    p: 'Full setup and optimisation across your chosen platform. Listings, A+ content, pricing strategy, and algorithm alignment — done for you, owned by you.',
  },
  {
    n: '04',
    h: 'Ongoing Management',
    p: 'We manage, optimise, and scale. Monthly reporting. Transparent margin tracking. Profit split model — we only win when you win.',
  },
]

/* ---- Results ---- */
const CASES = [
  {
    cat: 'Premium Home & Living',
    platform: 'Etsy + Amazon',
    rows: [
      { l: 'Investment', v: '$12,000' },
      { l: 'Setup', v: '$4,000' },
      { l: 'Inventory', v: '$8,000' },
      { l: 'Month 3 Revenue', v: 'Consistent' },
      { l: 'Month 6 Margin', v: '40%+' },
    ],
    status: 'Active · Scaling',
  },
  {
    cat: 'Wellness & Beauty',
    platform: 'TikTok Shop + Shopify',
    rows: [
      { l: 'Investment', v: '$15,000' },
      { l: 'Setup', v: '$4,000' },
      { l: 'Inventory', v: '$11,000' },
      { l: 'Revenue Yr 1', v: '£150,000' },
      { l: 'Asset Value', v: '£500K–£750K' },
    ],
    status: 'Active · Exit Ready',
  },
  {
    cat: 'Kitchen & Lifestyle',
    platform: 'Amazon + Walmart',
    rows: [
      { l: 'Investment', v: '$10,000' },
      { l: 'Setup', v: '$4,000' },
      { l: 'Inventory', v: '$6,000' },
      { l: 'Revenue', v: 'Growing' },
      { l: 'Margin', v: '35%+' },
    ],
    status: 'Active · Month 5',
  },
]

/* ---- Investment breakdown ---- */
const INVEST = [
  {
    amt: '$4,000',
    desc: 'Setup, brand architecture, platform build, full execution.',
  },
  {
    amt: '$6,000',
    desc: 'Real inventory: private label, wholesale, or white label, sourced and deployed for your brand.',
  },
  {
    amt: 'Ongoing',
    desc: 'Profit split model. No monthly retainer. We take a percentage of profit only.',
  },
]

/* ---- The Process ---- */
const PROCESS = [
  {
    when: 'Week 1',
    h: 'Strategy Call',
    p: 'Category interest, investment level, and timeline. We map the brand opportunity and define the positioning before any capital moves.',
  },
  {
    when: 'Week 1–2',
    h: 'Brand Architecture',
    p: 'Positioning, naming, category claim, and competitor gap analysis. We build defensible differentiation before touching a product.',
  },
  {
    when: 'Week 2–3',
    h: 'Product Sourcing',
    p: 'Private label or wholesale inventory selected, sampled, and ordered. Real products. Real stock. Real margin architecture from the start.',
  },
  {
    when: 'Week 3–4',
    h: 'Platform Build',
    p: 'Store, listings, brand content, and backend automation deployed across your chosen platform. Ready to launch.',
  },
  {
    when: 'Month 2–3',
    h: 'Launch & Optimise',
    p: 'Revenue reporting begins. Profit split activates. We optimise and begin scaling category penetration.',
  },
  {
    when: 'Month 3+',
    h: 'Ongoing Management & Growth',
    p: 'Continuous management, category expansion, and brand scaling. Monthly transparent reporting. Exit planning available from month six.',
  },
]

/* ---- FAQ ---- */
const FAQ = [
  {
    q: 'I’ve tried e-commerce before and it didn’t work.',
    a: 'Most people tried a model built around trend-chasing and cheap products. We build premium-positioned brands with defensible margins. Different model. Different outcome. The failure rate in e-commerce is almost entirely a positioning and architecture problem — not a platform problem.',
  },
  {
    q: 'How do I know this will perform?',
    a: 'We operate on a profit split. We have no financial incentive to build something that doesn’t generate revenue. Our model only works if yours does. That alignment is the entire point of how we’ve structured this.',
  },
  {
    q: 'What if I want to exit eventually?',
    a: 'That’s part of the design. Every brand we build is constructed to hold exit value. E-commerce brands sell for three to five times annual revenue when built correctly. We can walk you through realistic 2–3 year exit projections on your strategy call.',
  },
  {
    q: '$10,000 is a serious investment.',
    a: 'It is. Which is why it’s not right for everyone. This is for people who are serious about building a real digital asset — not dabbling in a side hustle. The people who do well here treat this like a capital deployment decision, not an impulse purchase.',
  },
]

const Logo = ({ w, h, priority = false }: { w: number; h: number; priority?: boolean }) => (
  <Image
    src="/logo/logo4.png"
    alt="Wealth With Ecom"
    width={w}
    height={h}
    priority={priority}
    style={{ display: 'block' }}
  />
)

export default function EcommerceAutomationPage() {
  return (
    <div className="ad">
      {/* ============ TOP BAR ============ */}
      <header className="ad-nav">
        <div className="ad-wrap ad-nav-inner">
          <Link href="/" className="ad-logo" aria-label="Wealth With Ecom — Home">
            <Logo w={91} h={52} priority />
          </Link>
          <nav className="ad-nav-links mono">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <a href="#apply" className="ad-nav-cta">Book a Strategy Call</a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="ad-hero">
        <div className="ad-hero-bg" aria-hidden="true" />
        <div className="ad-wrap ad-hero-inner">
          <p className="ad-eyebrow mono reveal">
            <span className="ad-eyebrow-line" />
            Wealth With Ecom™ · Premium Brand Partnership
          </p>

          <h1 className="ad-h1 serif reveal">
            We Build the E-Commerce Brand.{' '}
            <span className="g">You Own the Asset.</span>
          </h1>

          <p className="ad-hero-sub reveal">
            Done-for-you private-label brand building on Amazon, TikTok Shop,
            Etsy, Shopify, and Walmart. Real inventory. Real margin. Profit
            split — we only grow when you grow.
          </p>

          <p className="ad-hero-note reveal">
            For serious investors, entrepreneurs, and professionals deploying
            capital into e-commerce assets — not building another job for
            themselves.
          </p>

          <div className="ad-cta-row reveal">
            <a href="#watch" className="ad-pill ad-pill-gold">Watch How It Works</a>
            <a href="#apply" className="ad-pill ad-pill-ghost">Book a Strategy Call</a>
          </div>

          <div className="ad-liveon reveal">
            <span className="ad-liveon-label mono">Live On</span>
            <div className="ad-liveon-logos">
              {LIVE_ON.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={p.name}
                  src={p.logo}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  style={{ objectFit: 'contain', height: 'auto' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE PROBLEM ============ */}
      <section className="sec ad-sec">
        <div className="ad-wrap">
          <p className="sec-label reveal">The Problem</p>
          <h2 className="sec-h serif reveal">
            Most e-commerce ‘businesses’ aren’t businesses. They’re{' '}
            <span className="g">jobs in disguise.</span>
          </h2>

          <div className="ad-problems">
            {PROBLEMS.map((p, i) => (
              <div className="ad-prob reveal" key={i}>
                <span className="ad-prob-mark">✦</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUOTE + VIDEO ============ */}
      <section className="sec ad-sec ad-quote-sec" id="watch">
        <div className="ad-wrap">
          <blockquote className="ad-quote serif reveal">
            “There’s a different way to enter this market. And it starts with
            the decision to <span className="g">build a brand — not operate a store.</span>”
          </blockquote>

          <div className="ad-video-block center">
            <p className="sec-label reveal">Before We Talk — Watch This First</p>
            <h2 className="sec-h serif reveal">
              What we build, how it works, and what it could mean for you.
            </h2>

            <div className="ad-video reveal" aria-hidden="true">
              <div className="ad-video-play">
                <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                  <path d="M5 4l8 6-8 6V4zm8 0l8 6-8 6V4z" />
                </svg>
              </div>
            </div>
            <p className="ad-video-cap reveal">
              Watch this before you book your call. 4 minutes.
            </p>

            <p className="ad-ready reveal">Ready to see what we’d build for your category?</p>
            <a href="#apply" className="ad-pill ad-pill-gold reveal">Apply For A Strategy Call →</a>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="sec ad-sec" id="what-we-build">
        <div className="ad-wrap">
          <p className="sec-label reveal">What We Do</p>
          <h2 className="sec-h serif reveal">
            We architect, build, and operate your premium e-commerce brand —
            from zero to a <span className="g">scalable asset.</span>
          </h2>
          <p className="sec-intro reveal">
            Wealth with Ecom™ partners with a small number of serious investors
            each month to build fully operational, premium-positioned e-commerce
            brands. This is not a course. Not a template. This is a complete
            done-for-you brand build — with real inventory, real architecture,
            and a profit-split partnership model that ensures our success is tied
            directly to yours.
          </p>

          <div className="ad-pillars reveal">
            {PILLARS.map((p) => (
              <div className="ad-pillar" key={p.n}>
                <span className="ad-pillar-n serif">{p.n}</span>
                <h3 className="serif">{p.h}</h3>
                <p>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESULTS ============ */}
      <section className="sec ad-sec">
        <div className="ad-wrap">
          <p className="sec-label reveal">Results</p>
          <h2 className="sec-h serif reveal">
            What the partnership looks like in practice.
          </h2>

          <div className="ad-cases">
            {CASES.map((c) => (
              <div className="ad-case reveal" key={c.cat}>
                <div className="ad-case-head mono">
                  {c.cat.toUpperCase()}
                  <span className="ad-case-plat">{c.platform}</span>
                </div>
                <div className="ad-case-rows">
                  {c.rows.map((r) => (
                    <div className="ad-case-row" key={r.l}>
                      <span className="ad-case-l">{r.l}</span>
                      <span className="ad-case-v">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="ad-case-status mono">
                  <span className="ad-status-dot" />
                  {c.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INVESTMENT ============ */}
      <section className="sec ad-sec" id="investment">
        <div className="ad-wrap">
          <p className="sec-label reveal">Investment</p>
          <h2 className="sec-h serif reveal">What the partnership requires.</h2>
          <p className="sec-intro reveal">
            We are transparent about investment because we work with people who
            make decisions based on facts — not excitement.
          </p>

          <div className="ad-invest reveal">
            <h3 className="ad-invest-h serif">Premium Brand Partnership</h3>
            <p className="ad-invest-from mono">From $10,000</p>

            <div className="ad-invest-rows">
              {INVEST.map((r) => (
                <div className="ad-invest-row" key={r.amt}>
                  <span className="ad-prob-mark">✦</span>
                  <span className="ad-invest-amt">{r.amt}</span>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>

            <p className="ad-invest-note">
              This is not right for everyone. If you are looking for a quick
              return with minimal capital, this is not for you. If you are
              looking to build a real brand asset with a team invested in its
              performance — apply below.
            </p>
          </div>
        </div>
      </section>

      {/* ============ THE PROCESS ============ */}
      <section className="sec ad-sec" id="process">
        <div className="ad-wrap">
          <p className="sec-label reveal">The Process</p>
          <h2 className="sec-h serif reveal">
            From application to asset — what the first 90 days look like.
          </h2>

          <div className="ad-process">
            {PROCESS.map((s, i) => (
              <div className="ad-step reveal" key={s.when}>
                <div className="ad-step-rail">
                  <span className="ad-step-num mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="ad-step-body">
                  <span className="ad-step-when mono">{s.when}</span>
                  <h3 className="serif">{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMON QUESTIONS ============ */}
      <section className="sec ad-sec">
        <div className="ad-wrap">
          <p className="sec-label reveal">Common Questions</p>
          <h2 className="sec-h serif reveal">You might be thinking…</h2>

          <div className="ad-faq">
            {FAQ.map((f) => (
              <details className="ad-q reveal" key={f.q}>
                <summary className="ad-q-q serif">
                  <span className="ad-q-text">“{f.q}”</span>
                  <span className="ad-q-icon" aria-hidden="true" />
                </summary>
                <p className="ad-q-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ APPLY ============ */}
      <section className="sec ad-sec ad-apply-sec" id="apply">
        <div className="ad-wrap center">
          <p className="sec-label reveal">Apply Below</p>
          <h2 className="sec-h serif reveal">
            This is for a specific type of person. <span className="g">If that’s you —</span>
          </h2>
          <p className="sec-intro reveal">
            We work with a limited number of brand partners each month. Not
            because of artificial scarcity — because proper brand architecture
            requires real attention, and we refuse to cut corners.
          </p>
          <p className="sec-intro reveal">
            Fill in the brief application below. We’ll review it and, if it’s a
            fit, schedule your strategy call within 48 hours.
          </p>
        </div>
      </section>

      {/* ============ APPLICATION FORM (functional — emails the lead) ============ */}
      <section className="sec ad-sec ad-form-sec">
        <div className="ad-wrap">
          <div className="reveal">
            <AdApplicationForm />
          </div>

          <p className="ad-form-note center reveal">
            We review every application personally and respond within 48 hours.
            No pressure. No pitch. Just a real conversation about whether this is
            the right move for where you are.
          </p>
        </div>
      </section>

      {/* ============ FOOTER (presentational) ============ */}
      <footer className="ad-foot">
        <div className="ad-wrap">
          <div className="ad-foot-top">
            <div className="ad-foot-brand">
              <Link href="/" className="ad-foot-logo" aria-label="Wealth With Ecom — Home">
                <Logo w={140} h={80} />
              </Link>
              <p className="ad-foot-state">
                Done-for-you private-label e-commerce brand building. We build
                the brand — you own the asset.
              </p>
            </div>
            <div className="ad-foot-meta">
              <span className="ad-foot-tag mono">Premium Brand Division</span>
              <span className="ad-foot-tag mono">Confidential</span>
              <div className="ad-foot-plats">
                {LIVE_ON.map((p) => (
                  <span key={p.name}>{p.name}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="ad-foot-bottom">
            <span>© 2026 Wealth with Ecom™ · All rights reserved</span>
            <span className="ad-foot-disc">
              Results shown are not typical or guaranteed. Individual results vary.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
