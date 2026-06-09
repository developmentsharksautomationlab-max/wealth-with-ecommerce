'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TICKER = [
  { id: '#1184', platform: 'Amazon FBA',  logo: '/logos/amazon.png',   val: '+$14,200/mo' },
  { id: '#2891', platform: 'Shopify',     logo: '/logos/shopify.png',  val: '+$9,400/mo'  },
  { id: '#3305', platform: 'TikTok Shop', logo: '/logos/tiktok.png',   val: '+$22,100/mo' },
  { id: '#4012', platform: 'Walmart',     logo: '/logos/walmart.png',  val: '+$7,600/mo'  },
  { id: '#5229', platform: 'Etsy POD',    logo: '/logos/etsy.png',     val: '+$5,300/mo'  },
  { id: '#6441', platform: 'Amazon FBA',  logo: '/logos/amazon.png',   val: '+$18,750/mo' },
  { id: '#7019', platform: 'Shopify',     logo: '/logos/shopify.png',  val: '+$11,900/mo' },
  { id: '#8234', platform: 'TikTok Shop', logo: '/logos/tiktok.png',   val: '+$31,400/mo' },
]

const DD_LINKS = [
  { href: '/automation/amazon',  logo: '/logos/amazon.png',   label: 'Amazon Automated Store',    w: 20, h: 20 },
  { href: '/automation/shopify', logo: '/logos/shopify.png',  label: 'Shopify Automated Store',   w: 20, h: 20 },
  { href: '/automation/walmart', logo: '/logos/walmart.png',  label: 'Walmart Automated Store',   w: 32, h: 20 },
  { href: '/automation/etsy',    logo: '/logos/etsy.png',     label: 'Etsy Automated Store',      w: 20, h: 20 },
  { href: '/automation/tiktok',  logo: '/logos/tiktok.png',   label: 'TikTok Automated Store',    w: 20, h: 20 },
  { href: '/automation/youtube', logo: '/logos/youtube.png',  label: 'YouTube Automated Account', w: 20, h: 20 },
]

function TickerItems() {
  return (
    <>
      {TICKER.map((t) => (
        <span key={t.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ color: 'var(--muted-2)' }}>CLIENT {t.id}</span>
          <span style={{ color: 'var(--muted-2)' }}>•</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.logo} alt={t.platform} width={16} height={16} style={{ objectFit: 'contain', borderRadius: 3 }} />
          {t.platform}
          <span style={{ color: 'var(--muted-2)' }}>•</span>
          <b>{t.val}</b>
          <span className="di">◆</span>
        </span>
      ))}
    </>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="ticker">
        <div className="ticker-track">
          <TickerItems />
          <TickerItems />
        </div>
      </div>

      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <Link href="/">
            <Image
              src="/logo/logo4.png"
              alt="WealthWithEcom"
              width={120}
              height={68}
              style={{ display: 'block' }}
              priority
            />
          </Link>

          <nav className={`nav-links${open ? ' mobile-open' : ''}`}>
            <Link href="/">Home</Link>
            <div className="dd">
              <a>Automation ▾</a>
              <div className="dd-menu">
                {DD_LINKS.map(l => (
                  <Link key={l.href} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.logo} alt={l.label} width={l.w} height={l.h} style={{ objectFit: 'contain', flexShrink: 0 }} />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/identity">Identity</Link>
            <Link href="/ai-sharks">AI Sharks</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div className="nav-contact">
              <span className="nc-label">Get in Touch</span>
              <a href="mailto:info@wealthwithecom.com" className="nc-email">info@wealthwithecom.com</a>
              <a href="tel:+10000000000" className="nc-phone">+1 (000) 000-0000</a>
            </div>
            <button
              className="burger"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
