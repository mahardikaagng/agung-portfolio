import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Agung Portfolio',
  description: 'Premium personal portfolio foundation with dark luxury visuals and modern interactions.',
  metadataBase: new URL('https://mahardikaagng.github.io'),
  openGraph: {
    title: 'Agung Portfolio',
    description: 'Premium personal portfolio foundation with dark luxury visuals and modern interactions.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-[#050507] text-slate-100">
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>{children}</body>
    </html>
  )
}
