'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SELECTORS = '.card, .svc, .member, .tier, .bstat, .ai-feat'
const MAX_TILT = 10      // degrees
const LIFT_Z   = 14      // px translateZ

export default function Tilt3D() {
  const pathname = usePathname()

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return

    const targets = document.querySelectorAll<HTMLElement>(SELECTORS)
    const off: (() => void)[] = []

    targets.forEach((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width  - 0.5   // -0.5 → 0.5
        const y = (e.clientY - r.top)  / r.height - 0.5
        el.style.transition = 'transform 0.12s ease-out'
        el.style.transform  =
          `perspective(900px) rotateY(${x * MAX_TILT}deg) rotateX(${-y * MAX_TILT}deg) translateZ(${LIFT_Z}px)`
      }
      const leave = () => {
        el.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
        el.style.transform  = ''
      }

      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
      off.push(() => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
        el.style.transform  = ''
        el.style.transition = ''
      })
    })

    return () => off.forEach((fn) => fn())
  }, [pathname])

  return null
}
