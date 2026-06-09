'use client'

import { useEffect, useRef } from 'react'

const STATS = [
  { prefix: '$', num: 42, suffix: 'M+', label: 'Revenue Managed' },
  { prefix: '', num: 340, suffix: '%', label: 'Avg Client ROI' },
  { prefix: '', num: 500, suffix: '+', label: 'Active Investors' },
  { prefix: '', num: 6, suffix: '', label: 'Platforms Operated' },
]

function animateCount(el: HTMLElement, target: number, prefix: string, suffix: string) {
  let cur = 0
  const step = target / 50
  const iv = setInterval(() => {
    cur += step
    if (cur >= target) {
      cur = target
      clearInterval(iv)
    }
    el.textContent = prefix + Math.floor(cur) + suffix
  }, 20)
}

export default function CounterStats() {
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          el.querySelectorAll<HTMLElement>('[data-count]').forEach((num) => {
            const target = Number(num.getAttribute('data-count'))
            const prefix = num.getAttribute('data-prefix') || ''
            const suffix = num.getAttribute('data-suffix') || ''
            animateCount(num, target, prefix, suffix)
          })
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="hero-stats reveal" ref={ref}>
      {STATS.map((s) => (
        <div className="s" key={s.label}>
          <div
            className="num"
            data-count={s.num}
            data-prefix={s.prefix}
            data-suffix={s.suffix}
          >
            {s.prefix}0{s.suffix}
          </div>
          <div className="lbl">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
