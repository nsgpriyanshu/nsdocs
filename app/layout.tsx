import { RootProvider } from 'fumadocs-ui/provider/next'
import { Geist } from 'next/font/google'
import type { ReactNode } from 'react'
import './global.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
