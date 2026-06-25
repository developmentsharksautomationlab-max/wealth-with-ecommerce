'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

/**
 * Wraps every page with the global Nav + Footer, EXCEPT on the standalone
 * ecommerce-automation landing page, which renders its own self-contained,
 * link-free header and footer. On that route neither Nav nor Footer is
 * rendered at all — so no global links/buttons (or their markup) appear.
 */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const p = pathname ?? ''
  const bare = p.startsWith('/ecommerce-automation') || p.startsWith('/thank-you')

  return (
    <>
      {!bare && <Nav />}
      <main>{children}</main>
      {!bare && <Footer />}
    </>
  )
}
