'use client'

import { useEffect } from 'react'

export default function Scroll3D() {
  useEffect(() => {
    const root = document.documentElement

    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      root.style.setProperty('--sp', `${(window.scrollY / max) * 100}%`)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
