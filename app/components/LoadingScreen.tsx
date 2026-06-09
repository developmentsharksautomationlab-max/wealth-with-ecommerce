'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [pct, setPct]     = useState(0)
  const [phase, setPhase] = useState<'in' | 'out' | 'gone'>('in')

  useEffect(() => {
    const duration = 2000
    const start    = Date.now()
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setPct(Math.round(eased * 100))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    const outTimer  = setTimeout(() => setPhase('out'),  2100)
    const goneTimer = setTimeout(() => setPhase('gone'), 2800)
    return () => { clearTimeout(outTimer); clearTimeout(goneTimer) }
  }, [])

  if (phase === 'gone') return null

  const r   = 70
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - pct / 100)

  const status =
    pct < 35 ? 'Initializing systems…'
    : pct < 70 ? 'Loading platform data…'
    : pct < 95 ? 'Almost ready…'
    : 'Welcome'

  return (
    <div className={`ls-overlay${phase === 'out' ? ' ls-out' : ''}`}>
      <div className="ls-grid" />

      <div className="ls-center">
        <div className="ls-ring-wrap">
          <svg viewBox="0 0 170 170" className="ls-ring-svg">
            <defs>
              <linearGradient id="ls-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#00c9ae" />
                <stop offset="100%" stopColor="#40dfd0" />
              </linearGradient>
            </defs>
            <circle className="ls-ring-bg"   cx="85" cy="85" r={r} />
            <circle
              className="ls-ring-fill"
              cx="85" cy="85" r={r}
              strokeDasharray={circ}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="ls-logo-center">
            <Image src="/logo/logo4.png" alt="WealthWithEcom" width={110} height={62} priority />
          </div>
        </div>

        <div className="ls-pct">{pct}<span>%</span></div>
        <div className="ls-status">{status}</div>
      </div>
    </div>
  )
}
