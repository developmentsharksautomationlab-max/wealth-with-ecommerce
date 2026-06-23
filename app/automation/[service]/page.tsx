import Link from 'next/link'
import { notFound } from 'next/navigation'

const SVC_DATA: Record<string, {
  title: string
  desc: string
  crumb: string
  logo: string
  feats: [string, string, string][]
}> = {
  amazon: {
    title: 'Amazon Automated Store',
    crumb: '// Automation · Amazon FBA',
    logo: '/logos/amazon.png',
    desc: 'The flagship marketplace. We build, optimize and operate a complete Amazon FBA business on your behalf — from product research to PPC to fulfillment.',
    feats: [
      ['🔍', 'Product Hunting', 'Data-driven sourcing of profitable, low-competition products.'],
      ['📦', 'FBA & Logistics', 'Inventory, fulfillment and reorders handled end-to-end.'],
      ['🎯', 'PPC Management', 'Daily bid optimization to protect margin and scale sales.'],
      ['📝', 'Listing Optimization', 'SEO copy, A+ content and imagery that converts.'],
    ],
  },
  shopify: {
    title: 'Shopify Automated Store',
    crumb: '// Automation · Shopify',
    logo: '/logos/shopify.png',
    desc: 'A direct-to-consumer brand store with paid traffic, email retention and conversion optimization — built to compound.',
    feats: [
      ['🛍️', 'Brand Store Build', 'Custom, high-converting Shopify storefront.'],
      ['📧', 'Email & Retention', 'Automated flows that turn buyers into repeat customers.'],
      ['💸', 'Paid Traffic', 'Meta & Google campaigns targeting 3.2× ROAS.'],
      ['🔁', 'CRO', 'Continuous testing to lift conversion rate.'],
    ],
  },
  walmart: {
    title: 'Walmart Automated Store',
    crumb: '// Automation · Walmart',
    logo: '/logos/walmart.png',
    desc: 'Tap into $500B+ in annual Walmart customer traffic with a fully managed Marketplace and WFS operation.',
    feats: [
      ['🏪', 'Marketplace Setup', 'Account, approvals and catalog handled for you.'],
      ['🚚', 'WFS Fulfillment', 'Walmart Fulfillment Services for fast shipping.'],
      ['📈', 'Listing Merch', 'Optimized listings built to rank and sell.'],
      ['🛡️', 'Compliance', 'Ongoing account health and policy management.'],
    ],
  },
  etsy: {
    title: 'Etsy Automated Store',
    crumb: '// Automation · Etsy',
    logo: '/logos/etsy.png',
    desc: 'A niche handmade and print-on-demand storefront driven by Etsy SEO and organic discovery — low overhead, high margin.',
    feats: [
      ['🎨', 'Niche Selection', 'Profitable niches with proven buyer demand.'],
      ['🖨️', 'Print-on-Demand', 'No inventory — products made to order.'],
      ['🔎', 'Etsy SEO', 'Tag and title strategy for organic traffic.'],
      ['⭐', 'Review Engine', 'Systems that build trust and repeat sales.'],
    ],
  },
  tiktok: {
    title: 'TikTok Automated Store',
    crumb: '// Automation · TikTok Shop',
    logo: '/logos/tiktok.png',
    desc: 'Our fastest-growing channel. TikTok Shop with live selling, affiliate armies and viral content — managed completely for you.',
    feats: [
      ['🎵', 'TikTok Shop', 'Full shop setup and product seeding.'],
      ['📡', 'Live Selling', 'Managed live commerce sessions.'],
      ['🤝', 'Affiliate Network', 'Creators promoting your products at scale.'],
      ['🔥', 'Viral Content', 'Short-form content engineered to convert.'],
    ],
  },
  youtube: {
    title: 'YouTube Automated Account',
    crumb: '// Automation · YouTube',
    logo: '/logos/youtube.png',
    desc: 'A faceless, monetized YouTube channel built and run end-to-end — earning ad and affiliate income as a passive media asset.',
    feats: [
      ['🎬', 'Faceless Channel', 'Niche channel built without you on camera.'],
      ['✍️', 'Content Production', 'Scripting, editing and publishing handled.'],
      ['💰', 'Monetization', 'Ad revenue, affiliates and sponsorships.'],
      ['📊', 'Growth Ops', 'Thumbnails, SEO and analytics optimization.'],
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(SVC_DATA).map((service) => ({ service }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const data = SVC_DATA[service]
  if (!data) return {}
  return {
    title: `${data.title} — WealthWithEcom`,
    description: data.desc,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const data = SVC_DATA[service]
  if (!data) notFound()

  return (
    <>
      <section className="subhero">
        <div className="wrap">
          <div style={{ paddingLeft: '8%' }}>
            <div className="crumb">{data.crumb}</div>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <div className="hero-cta" style={{ marginTop: 30 }}>
              <Link href="/contact" className="btn btn-gold">Invest in This Store →</Link>
              <Link href="/#services" className="btn btn-ghost">All Products</Link>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.logo}
          alt=""
          aria-hidden="true"
          className="subhero-logo"
          style={{
            position: 'absolute',
            right: '18%',
            top: '50%',
            width: 220,
            height: 220,
            objectFit: 'contain',
            opacity: 0.7,
            pointerEvents: 'none',
            filter: 'sepia(1) hue-rotate(137deg) saturate(350%) brightness(0.9)',
          }}
        />
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-label">// How the model works</div>
          <h2 className="sec-h">Everything done for you on {data.title.split(' ')[0]}.</h2>
          <div className="feat-list" style={{ marginTop: 46 }}>
            {data.feats.map(([ic, h, p]) => (
              <div className="fl" key={h}>
                <div className="ic">{ic}</div>
                <div>
                  <h4>{h}</h4>
                  <p>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
