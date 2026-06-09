import ContactForm from '../components/ContactForm'

export const metadata = {
  title: 'Book a Free Strategy Call — WealthWithEcom',
  description:
    'Share a few details and a senior consultant will return with the best marketplace plan, clear next steps and realistic timelines for your automated store.',
}

export default function ContactPage() {
  return (
    <>
      <section className="subhero">
        <div className="wrap">
          <div className="crumb">// Start Your Portfolio</div>
          <h1>Tell us what you want your store to do.</h1>
          <p>
            Share a few details and a senior consultant will return with the best marketplace plan,
            clear next steps and realistic timelines.
          </p>
        </div>
      </section>

      <section className="sec" id="contact-form">
        <div className="wrap">
          <div className="form-wrap">
            <div className="contact-side">
              <h3>Direct lines</h3>
              <div className="ci">
                <span className="ic">✉️</span>
                <div>
                  <div className="l">Email</div>
                  <div className="v">invest@wealthwithecom.com</div>
                </div>
              </div>
              <div className="ci">
                <span className="ic">📞</span>
                <div>
                  <div className="l">Strategy Desk</div>
                  <div className="v">+1 (000) 000-0000</div>
                </div>
              </div>
              <div className="ci">
                <span className="ic">🌐</span>
                <div>
                  <div className="l">AI Division</div>
                  <div className="v">aisharkss.com</div>
                </div>
              </div>
              <div className="ci" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <span className="ic">🔒</span>
                <div>
                  <div className="l">Security</div>
                  <div className="v">End-to-end encrypted intake</div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 32,
                  padding: 20,
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: 14,
                }}
              >
                <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--gold)' }}>Minimum investment:</strong> $5,000<br />
                  <strong style={{ color: 'var(--gold)' }}>Time to first revenue:</strong> 30–60 days<br />
                  <strong style={{ color: 'var(--gold)' }}>Management fee:</strong> Performance-based only
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
