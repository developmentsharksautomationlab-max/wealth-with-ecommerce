import Link from 'next/link'
import Image from 'next/image'
import CounterStats from './components/CounterStats'

const PLATFORMS = [
  { name: 'Amazon',     logo: '/logos/amazon.png',   w: 90,  h: 50 },
  { name: 'Shopify',    logo: '/logos/shopify.png',  w: 90,  h: 50 },
  { name: 'Walmart',    logo: '/logos/walmart.png',  w: 160, h: 70 },
  { name: 'Etsy',       logo: '/logos/etsy.png',     w: 90,  h: 50 },
  { name: 'TikTok Shop',logo: '/logos/tiktok.png',   w: 90,  h: 60 },
  { name: 'YouTube',    logo: '/logos/youtube.png',  w: 90,  h: 50 },
]

const PAIN_CARDS = [
  {
    ic: '💸',
    tag: 'Passive Income',
    num: '01',
    h: 'I want money without a job',
    p: 'You want income flowing every month without clocking in, learning tech or managing operations.',
    a: 'We run 100% of store operations. You receive monthly income reports and payouts.',
  },
  {
    ic: '🤖',
    tag: 'Hands-Free',
    num: '02',
    h: 'I need a truly automated business',
    p: "You don't want to learn Amazon, Shopify or TikTok, or manage inventory, ads and support.",
    a: 'Zero hours of your time after onboarding. A completely hands-free, done-for-you model.',
  },
  {
    ic: '📈',
    tag: 'Smart Capital',
    num: '03',
    h: 'I want to invest my capital well',
    p: 'You have money to deploy and want it working in a real, cash-flowing business — not sitting idle.',
    a: 'Capital-first strategy with risk controls, diversified platforms and transparent reporting.',
  },
  {
    ic: '👨‍👩‍👧‍👦',
    tag: 'Family Operations',
    num: '04',
    h: 'I need a team to run many stores',
    p: 'You want one team that can run multiple e-commerce businesses for your family and friends.',
    a: 'Specialist pods scale across unlimited accounts — one partner for your whole network.',
  },
  {
    ic: '🛡️',
    tag: 'Risk-Averse',
    num: '05',
    h: "I can't afford to gamble",
    p: "You worked hard for your savings and don't want to watch it disappear on a guess.",
    a: 'Multi-channel diversification, signed agreements and monthly visibility on every dollar.',
  },
  {
    ic: '💰',
    tag: 'Real Returns',
    num: '06',
    h: 'I just want to make money',
    p: 'At the end of the day, you want a legitimate, reliable way to grow your wealth.',
    a: 'A proven operating model across six platforms, built to compound month after month.',
  },
]

const STORIES = [
  {
    initials: 'SM',
    av: 'linear-gradient(135deg,#00c9ae,#40dfd0)',
    name: 'Sarah M.',
    who: 'Former nurse',
    platform: 'Amazon + Walmart',
    earn: '$11,400 / mo',
    q: "Honestly I was skeptical the first two months. Then the payouts just kept coming. Now I check my dashboard over coffee instead of clocking into a double shift.",
  },
  {
    initials: 'DR',
    av: 'linear-gradient(135deg,#c9a23a,#e8c96a)',
    name: 'David R.',
    who: 'Retired engineer',
    platform: 'Shopify',
    earn: '$7,800 / mo',
    q: "I didn't want a job in retirement — I wanted income I didn't have to babysit. Their team handles operations end to end. I just watch the numbers.",
  },
  {
    initials: 'AK',
    av: 'linear-gradient(135deg,#ff7a59,#ffb088)',
    name: 'Aisha K.',
    who: 'Mom of 3',
    platform: 'TikTok + Etsy',
    earn: '$9,200 / mo',
    q: "Running this around three kids sounded impossible. But I don't actually run anything — they do. More time at home, more coming in than my old desk job.",
  },
  {
    initials: 'MT',
    av: 'linear-gradient(135deg,#4ade80,#1aa86a)',
    name: 'Marcus T.',
    who: 'Ex-logistics manager',
    platform: 'Amazon FBA',
    earn: '$14,600 / mo',
    q: "Took about 90 days to ramp. By month five it cleared what I made managing a warehouse. The reporting is what sold me — I can see every dollar move.",
  },
  {
    initials: 'PN',
    av: 'linear-gradient(135deg,#9b6cff,#c4a0ff)',
    name: 'Priya N.',
    who: 'Part-time teacher',
    platform: 'Walmart',
    earn: '$6,300 / mo',
    q: "Started small because I was nervous about the investment. Glad I did — it's steady and hands-off. I reinvested my first few payouts into a second store.",
  },
  {
    initials: 'JW',
    av: 'linear-gradient(135deg,#3aa0ff,#5ad1ff)',
    name: 'James W.',
    who: 'Former contractor',
    platform: 'Shopify + TikTok',
    earn: '$18,900 / mo',
    q: "I've been burned by 'passive income' before. This is the first one where someone else does the work and I still own the asset. Two stores now and counting.",
  },
]

const DAY = [
  {
    t: '7:00 AM ☕',
    you: 'You wake up, check your phone.',
    we: '<b>WealthWithEcom:</b> Overnight sales summary is already in your inbox. Orders fulfilled on Amazon & Walmart, Shopify inventory updated.',
  },
  {
    t: '12:00 PM 🍽️',
    you: 'Lunch — no e-commerce work.',
    we: '<b>WealthWithEcom:</b> PPC bids adjusted across marketplaces, new listings live, customer tickets handled. Zero input needed.',
  },
  {
    t: '6:00 PM 📺',
    you: 'Dinner, relax, TV.',
    we: '<b>WealthWithEcom:</b> TikTok promos run, campaigns optimized, monthly performance report drafted for you.',
  },
  {
    t: '11:59 PM 💤',
    you: 'Asleep.',
    we: '<b>WealthWithEcom:</b> Stores stay open. Revenue earned while you slept — across all six platforms. Numbers ready tomorrow.',
  },
]

const SERVICES = [
  { key: 'amazon', pf: 'AMZ-01', h: 'Amazon Automated Store', p: 'Full FBA store build, product hunting, PPC and fulfillment — the flagship marketplace.', roi: '+24%', l: 'Avg Channel Growth' },
  { key: 'shopify', pf: 'SHP-02', h: 'Shopify Automated Store', p: 'DTC brand store with paid traffic, email retention and 3.2× ROAS targeting.', roi: '3.2×', l: 'Avg ROAS' },
  { key: 'walmart', pf: 'WMT-03', h: 'Walmart Automated Store', p: 'Walmart Marketplace & WFS listings tapping $500B+ in annual customer traffic.', roi: '+18%', l: 'Avg Channel Growth' },
  { key: 'etsy', pf: 'ETS-04', h: 'Etsy Automated Store', p: 'Niche handmade & print-on-demand storefront with SEO-driven organic sales.', roi: '+22%', l: 'Avg Channel Growth' },
  { key: 'tiktok', pf: 'TTK-05', h: 'TikTok Automated Store', p: 'TikTok Shop with live, affiliates and content — our fastest-growing channel.', roi: '+89%', l: '90-Day Growth' },
  { key: 'youtube', pf: 'YT-06', h: 'YouTube Automated Account', p: 'Faceless, monetized YouTube channel built and managed end-to-end for ad & affiliate income.', roi: 'Passive', l: 'Ad + Affiliate Income' },
]

const CTA_ITEMS = ['TALK TO US', 'BOOK A STRATEGY CALL', 'INVEST PASSIVELY', 'BUILD WEALTH']

const TRUST_CHECKS = [
  'Signed partnership agreement before any capital moves',
  'Live dashboard access from day one',
  'Dedicated consultant per account — a real human',
  'Multi-channel diversification across 6 platforms',
  'Transparent monthly payout reports, no hidden fees',
  "Clear exit terms — your money isn't locked forever",
]

const AI_FEATS_HOME = [
  { ic: '🤖', h: 'Custom AI Agents', p: 'Autonomous agents that handle support, sales and ops end-to-end.' },
  { ic: '⚙️', h: 'Workflow Automation', p: 'Connect your stack and let AI run the repetitive work 24/7.' },
  { ic: '📈', h: 'Startup AI Strategy', p: 'Roadmaps that turn AI from buzzword into measurable ROI.' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="wrap">
          <div className="hero-grid">
            {/* Left — text */}
            <div className="hero-left">
              <div className="eyebrow reveal">
                <span className="dot" />
                Your Future Self Is Waiting
              </div>
              <h1 className="hero-h reveal">
                Stop trading time for money.{' '}
                <span className="g">Own your freedom.</span>
              </h1>
              <p className="hero-sub reveal">
                Imagine waking up to income you didn't have to clock in for. WealthWithEcom builds and runs
                automated stores across Amazon, Shopify, Walmart, Etsy and TikTok — a real business that pays
                you while you live your life. You invest. We operate. You collect.
              </p>
              <div className="hero-cta reveal">
                <Link href="/contact" className="btn btn-gold">Start Investing →</Link>
                <Link href="/identity" className="btn btn-ghost">Meet Our Consultants</Link>
              </div>
            </div>

            {/* Right — 3D Dashboard Visual */}
            <div className="hero-visual" aria-hidden="true">
              {/* Ambient glow orb */}
              <div className="hv-glow-orb" />

              {/* Main card */}
              <div className="hv-card-wrap">
                <div className="hv-main">
                  {/* Scan line */}
                  <div className="hv-scan" />

                  <div className="hv-top">
                    <span className="hv-live"><span className="hv-dot-g" />LIVE</span>
                    <span className="hv-tag">STORE DASHBOARD</span>
                  </div>

                  <div className="hv-revenue">$24,830</div>
                  <div className="hv-rev-label">Monthly Earnings · All Platforms</div>

                  {/* Sparkline chart */}
                  <div className="hv-sparkline">
                    <svg viewBox="0 0 320 52" preserveAspectRatio="none" style={{ width: '100%', height: 52, display: 'block' }}>
                      <defs>
                        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(0,201,174,0.28)" />
                          <stop offset="100%" stopColor="rgba(0,201,174,0)" />
                        </linearGradient>
                      </defs>
                      <path className="hv-spark-area" d="M0,46 C30,42 55,34 80,28 C105,22 130,36 160,22 C190,10 220,20 255,12 C278,7 295,10 320,4 L320,52 L0,52 Z" />
                      <path className="hv-spark-line" d="M0,46 C30,42 55,34 80,28 C105,22 130,36 160,22 C190,10 220,20 255,12 C278,7 295,10 320,4" />
                    </svg>
                    <div className="hv-spark-stat">
                      <span className="hv-spark-up">↑ +34%</span>
                      <span> vs last month</span>
                    </div>
                  </div>

                  {/* Platform bars */}
                  <div className="hv-platforms">
                    {[
                      { name: 'Amazon',  logo: '/logos/amazon.png',  pct: '78%', val: '$11.4k', w: 16, h: 16 },
                      { name: 'Shopify', logo: '/logos/shopify.png', pct: '52%', val: '$7.8k',  w: 16, h: 16 },
                      { name: 'Walmart', logo: '/logos/walmart.png', pct: '38%', val: '$3.2k',  w: 26, h: 16 },
                      { name: 'TikTok',  logo: '/logos/tiktok.png',  pct: '28%', val: '$2.4k',  w: 16, h: 16 },
                    ].map(p => (
                      <div className="hv-plat-row" key={p.name}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.logo} alt={p.name} width={p.w} height={p.h} style={{ objectFit: 'contain', flexShrink: 0 }} />
                        <div className="hv-plat-track">
                          <div className="hv-plat-fill" style={{ width: p.pct }} />
                        </div>
                        <span className="hv-plat-val">{p.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Next payout strip */}
                  <div className="hv-payout">
                    <span className="hv-payout-label">NEXT PAYOUT</span>
                    <span className="hv-payout-val">$8,276 · Jun 30</span>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="hv-chip hv-chip-1">⚡ <span className="chip-val">+$847</span> New Sale · Amazon</div>
              <div className="hv-chip hv-chip-2">🤖 AI Auto-Optimized</div>
              <div className="hv-chip hv-chip-3">✓ <span className="chip-val">Order Fulfilled</span></div>
              <div className="hv-chip hv-chip-4">📈 <span className="chip-val">+34%</span> Growth</div>
              <div className="hv-chip hv-chip-5">💰 Payout Sent</div>
            </div>
          </div>

          <CounterStats />
        </div>
      </section>

      {/* ── PLATFORM MARQUEE ── */}
      <div className="marquee" aria-label="Platforms we operate on">
        <div className="marquee-track">
          {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <span key={i} className="pl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logo} alt={p.name} width={p.w} height={p.h} style={{ objectFit: 'contain' }} />
            </span>
          ))}
        </div>
      </div>

      {/* ── PAIN POINTS ── */}
      <section className="sec" id="why-us">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">// Why people invest with us</div>
            <h2 className="sec-h">Every reason you're here. A clear answer.</h2>
            <p className="sec-intro">
              These are the exact concerns our investors raise before partnering with WealthWithEcom — and
              how our model solves each one.
            </p>
          </div>
          <div className="cards">
            {PAIN_CARDS.map((c) => (
              <div className="card reveal" key={c.num}>
                <div className="num-bg">{c.num}</div>
                <div className="ic">{c.ic}</div>
                <div className="tag">{c.tag}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <p className="ans">→ {c.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE TRANSFORMATION ── */}
      <section className="sec" style={{ paddingTop: 0 }} id="lifestyle">
        <div className="wrap">
          <div
            className="life reveal"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2000&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="shade" />
            <div className="content">
              <h2>
                This is what <span className="g">freedom</span> actually feels like.
              </h2>
              <p>
                No alarm clock you didn't choose. No boss deciding your worth. Just a business that runs
                without you — funding the life you've been putting off.
              </p>
              <div className="lpills">
                <span className="lpill">⏰ Time with family</span>
                <span className="lpill">✈️ Travel on your terms</span>
                <span className="lpill">💤 Income while you sleep</span>
                <span className="lpill">🏡 Work from anywhere</span>
              </div>
              <Link href="/contact" className="btn btn-gold">Start Your Transformation →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section className="sec" style={{ paddingTop: 0 }} id="results">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">// Real investors · real results</div>
            <h2 className="sec-h">From employees to owners.</h2>
            <p className="sec-intro">
              Everyday people who stopped waiting and started building. Their stores run on our systems —
              their freedom is their own.
            </p>
          </div>
          <div className="reviews">
            {STORIES.map((s) => (
              <figure className="rv reveal" key={s.name}>
                <div className="rv-top">
                  <div className="rv-avatar" style={{ background: s.av }}>{s.initials}</div>
                  <div className="rv-id">
                    <div className="rv-name">
                      {s.name}
                      <span className="rv-verif" aria-label="Verified investor">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <div className="rv-who">{s.who} · {s.platform}</div>
                  </div>
                </div>
                <div className="rv-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="rv-quote">{s.q}</blockquote>
                <figcaption className="rv-foot">
                  <span className="rv-earn">▲ {s.earn}</span>
                  <span className="rv-src">Verified payout</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── A DAY IN THE LIFE ── */}
      <section className="sec" style={{ paddingTop: 0 }} id="how-it-works">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">// 24 hours, zero logins</div>
            <h2 className="sec-h">You live the day. We run the work.</h2>
          </div>
          <div className="timeline">
            {DAY.map((d) => (
              <div className="tl reveal" key={d.t}>
                <div className="t">{d.t}</div>
                <div className="you">{d.you}</div>
                <div className="we" dangerouslySetInnerHTML={{ __html: d.we }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec" style={{ paddingTop: 0 }} id="services">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">// Investment products</div>
            <h2 className="sec-h">Automated store portfolios.</h2>
            <p className="sec-intro">
              Pick a single channel or diversify across all six. Each store is fully built, optimized and
              operated by a dedicated specialist pod.
            </p>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <Link href={`/automation/${s.key}`} className="svc reveal" key={s.key}>
                <div className="pf">{s.pf}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <div className="roi">
                  <div>
                    <div className="v">{s.roi}</div>
                    <div className="l">{s.l}</div>
                  </div>
                  <span className="arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="cta-strip" aria-hidden="true">
        <div className="cta-track">
          {[...Array(4)].map((_, i) => (
            <span key={i}>
              {CTA_ITEMS.map((item) => (
                <span key={item}>
                  {item}
                  <span className="di"> • </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── TRUST ── */}
      <section className="sec" id="trust">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">// Capital discipline</div>
            <h2 className="sec-h">Your capital, treated with priority.</h2>
          </div>
          <div className="trust reveal">
            <div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 24, marginBottom: 8 }}>
                What we put in writing
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 24, lineHeight: 1.65 }}>
                We've helped hundreds of investors — retirees, professionals and families — earn consistent
                income while we operate their stores. Capital protected, reports clear, no daily grind.
              </p>
              <div className="checks">
                {TRUST_CHECKS.map((c) => (
                  <div className="ck" key={c}>
                    <span className="tick">✓</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="big-stats" style={{ marginTop: 0, gridTemplateColumns: '1fr' }}>
              <div className="bstat">
                <div className="n">24/7</div>
                <div className="l">Stores running while you sleep</div>
              </div>
              <div className="bstat">
                <div className="n">100%</div>
                <div className="l">Done-for-you operations</div>
              </div>
              <div className="bstat">
                <div className="n">1 Call</div>
                <div className="l">Dedicated consultant per account</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI SHARKS PREVIEW ── */}
      <section className="sec" style={{ paddingTop: 0 }} id="ai">
        <div className="wrap">
          <div className="ai-band reveal">
            <div className="badge">◈ NEW BRAND · AI SHARKS</div>
            <h2 className="sec-h" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em' }}>
              AI solutions for <span className="b">business owners</span> &amp; <span className="b">startups</span>.
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16.5, maxWidth: '60ch', margin: '18px 0 28px', lineHeight: 1.65, position: 'relative' }}>
              Our sister brand <strong style={{ color: 'var(--gold-2)' }}>AI Sharks</strong> brings the same
              systematic discipline to artificial intelligence — building custom AI agents, automation
              pipelines and intelligent tools that cut costs and scale operations for founders.
            </p>
            <div className="ai-feats">
              {AI_FEATS_HOME.map((f) => (
                <div className="ai-feat" key={f.h}>
                  <div className="ic">{f.ic}</div>
                  <h4>{f.h}</h4>
                  <p>{f.p}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 30 }}>
              <Link href="/ai-sharks" className="btn btn-ghost">Explore AI Sharks →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="sec center" id="contact-cta">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '60ch', margin: '0 auto' }}>
            <div className="sec-label">// Next move</div>
            <h2 className="sec-h" style={{ margin: '0 auto' }}>
              Ready to put your capital on a revenue system?
            </h2>
            <p className="sec-intro">
              Book a free strategy call with a senior consultant. We'll map the right marketplace, outline a
              launch plan and show you exactly how we execute.
            </p>
            <div style={{ marginTop: 30 }}>
              <Link href="/contact" className="btn btn-gold">Claim Your Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
