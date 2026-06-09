import Link from 'next/link'

export const metadata = {
  title: 'Identity — Meet Our Consultants | WealthWithEcom',
  description:
    'Every investor gets a dedicated, seasoned e-commerce expert. Meet Aain, Zayn and Sharjeel — the consultants who build, run and scale your automated business.',
}

const TEAM = [
  {
    av: 'A',
    name: 'Aain',
    role: 'E-Commerce Investment Consultant',
    p: 'Specialist in Amazon FBA and multi-channel portfolio strategy. Guides investors from first capital to consistent monthly payouts.',
  },
  {
    av: 'Z',
    name: 'Zayn',
    role: 'Marketplace Growth Consultant',
    p: 'Leads Shopify, Walmart and TikTok Shop scaling. Turns new stores into diversified, cash-flowing assets.',
  },
  {
    av: 'S',
    name: 'Sharjeel',
    role: 'Operations & AI Consultant',
    p: 'Bridges WealthWithEcom and AI Sharks — automation, reporting and the systems that keep every store running 24/7.',
  },
]

const SOCIALS = [
  { label: 'IG', title: 'Instagram', href: '#' },
  { label: 'FB', title: 'Facebook', href: '#' },
  { label: 'LI', title: 'LinkedIn', href: '#' },
  { label: 'TT', title: 'TikTok', href: '#' },
]

export default function IdentityPage() {
  return (
    <>
      <section className="subhero">
        <div className="wrap">
          <div className="crumb">// Our Identity</div>
          <h1>The consultants behind your portfolio.</h1>
          <p>
            Every investor gets a dedicated, seasoned e-commerce expert. Meet the three consultants who
            build, run and scale our clients' automated businesses.
          </p>
        </div>
      </section>

      <section className="sec" id="team">
        <div className="wrap">
          <div className="team">
            {TEAM.map((m) => (
              <article className="member reveal" key={m.name}>
                <div className="ph">
                  <div className="av">{m.av}</div>
                </div>
                <div className="body">
                  <h3>{m.name}</h3>
                  <div className="role">{m.role}</div>
                  <p>{m.p}</p>
                  <div className="socials">
                    {SOCIALS.map((s) => (
                      <a key={s.title} href={s.href} title={s.title} aria-label={s.title}>
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec center" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '54ch', margin: '0 auto' }}>
            <h2 className="sec-h" style={{ margin: '0 auto' }}>
              Want one of them on your account?
            </h2>
            <p className="sec-intro">
              Book a call and we'll pair you with the consultant best suited to your goals.
            </p>
            <div style={{ marginTop: 26 }}>
              <Link href="/contact" className="btn btn-gold">Book a Consultation →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
