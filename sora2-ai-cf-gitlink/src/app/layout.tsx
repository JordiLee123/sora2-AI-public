import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sora 2 AI Placeholder',
  description: 'Public GitHub mirror pointing visitors to the official sora-2-ai.com experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
