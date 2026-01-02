import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Animind - Understand Your Pet\'s Behavior',
  description: 'AI-powered pet behavior analysis app. Currently focusing on rabbits, with cats and dogs coming soon. Join our beta testing program.',
  keywords: 'pet behavior, rabbit behavior, pet analysis, animal behavior, pet care, rabbit care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

