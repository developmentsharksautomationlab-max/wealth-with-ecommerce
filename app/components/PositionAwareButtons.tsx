'use client'

import { useEffect } from 'react'

/**
 * Position-aware hover for every `.btn` on the page.
 *
 * Uses event delegation on `document` (pointer events bubble), so it covers
 * all current and future buttons — Server-rendered <Link>s included — without
 * touching each instance. It writes the cursor's position inside the hovered
 * button to CSS custom properties that `globals.css` turns into a glow that
 * blooms from the entry point and follows the cursor:
 *   --bx / --by  ->  cursor position relative to the button box (px)
 */
export default function PositionAwareButtons() {
  useEffect(() => {
    const btnFrom = (t: EventTarget | null) =>
      t instanceof Element ? (t.closest('.btn') as HTMLElement | null) : null

    const setPos = (btn: HTMLElement, x: number, y: number) => {
      const r = btn.getBoundingClientRect()
      btn.style.setProperty('--bx', `${x - r.left}px`)
      btn.style.setProperty('--by', `${y - r.top}px`)
    }

    // Place the glow at the exact entry point the instant the cursor arrives.
    const onOver = (e: PointerEvent) => {
      const btn = btnFrom(e.target)
      if (btn) setPos(btn, e.clientX, e.clientY)
    }

    // Track the cursor while inside, throttled to one update per frame.
    let frame = 0
    let pending: { btn: HTMLElement; x: number; y: number } | null = null
    const onMove = (e: PointerEvent) => {
      const btn = btnFrom(e.target)
      if (!btn) return
      pending = { btn, x: e.clientX, y: e.clientY }
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (pending) setPos(pending.btn, pending.x, pending.y)
      })
    }

    document.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
