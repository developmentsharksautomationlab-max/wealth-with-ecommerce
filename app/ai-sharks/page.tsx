import Link from 'next/link'

export const metadata = {
  title: 'AI Sharks — Custom AI Agents & Automation | WealthWithEcom',
  description:
    'AI Sharks provides custom AI agents, workflow automation and AI strategy for business owners and startups. Turn manual work into autonomous, scalable systems.',
}

const AI_FEATS = [
  {
    ic: '🤖',
    h: 'Custom AI Agents',
    p: 'Autonomous agents that handle customer support, lead qualification and sales conversations 24/7.',
  },
  {
    ic: '⚙️',
    h: 'Workflow Automation',
    p: 'We connect your tools and let AI run the repetitive, time-consuming work across your whole stack.',
  },
  {
    ic: '📊',
    h: 'Data & Insights',
    p: "AI dashboards that surface what's working and forecast what's next for your business.",
  },
  {
    ic: '🚀',
    h: 'Startup AI Strategy',
    p: 'Roadmaps that turn AI from a buzzword into measurable ROI and a real competitive edge.',
  },
  {
    ic: '💬',
    h: 'Conversational AI',
    p: 'Branded chat assistants trained on your business to convert visitors and retain customers.',
  },
  {
    ic: '🔗',
    h: 'System Integration',
    p: 'Seamlessly plug AI into your CRM, store and ops so everything talks to everything.',
  },
]

const STATS = [
  { n: '80%', l: 'Avg manual work eliminated' },
  { n: '24/7', l: 'Autonomous operation' },
  { n: '3–5×', l: 'Faster ops after deployment' },
]

export default function AISharksPage() {
  return (
    <>
      <section
        className="subhero"
        style={{ background: 'linear-gradient(135deg, #0a1420, #0d0a18)' }}
      >
        <div className="wrap">
          <div className="crumb" style={{ color: '#7eb0ff' }}>
            // Sister Brand · aisharkss.com
          </div>
          <h1>AI Sharks — intelligence that runs your business.</h1>
          <p>
            We provide AI solutions to business owners and startups: custom agents, automation systems
            and AI strategy that turn manual work into autonomous, scalable systems.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-gold"
              href="https://www.aisharkss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit aisharkss.com →
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Request an AI Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" id="what-we-deliver">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">// What AI Sharks delivers</div>
            <h2 className="sec-h">From manual to autonomous.</h2>
            <p className="sec-intro">
              We build the systems that remove you from the repetitive work — so you can focus on
              growing your business instead of running it.
            </p>
          </div>
          <div className="feat-list" style={{ marginTop: 46 }}>
            {AI_FEATS.map((f) => (
              <div className="fl reveal" key={f.h}>
                <div className="ic">{f.ic}</div>
                <div>
                  <h4>{f.h}</h4>
                  <p>{f.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} id="stats">
        <div className="wrap">
          <div className="big-stats">
            {STATS.map((s) => (
              <div className="bstat reveal" key={s.l}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec center" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '58ch', margin: '0 auto' }}>
            <div className="sec-label">// Next step</div>
            <h2 className="sec-h" style={{ margin: '0 auto' }}>
              Ready to automate your business with AI?
            </h2>
            <p className="sec-intro">
              Book a free AI audit call. We'll map out exactly where AI can replace manual work and
              build a deployment roadmap for you.
            </p>
            <div style={{ marginTop: 26 }}>
              <Link href="/contact" className="btn btn-gold">
                Request a Free AI Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
