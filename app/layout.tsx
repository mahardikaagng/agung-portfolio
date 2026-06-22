import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const SITE_URL = 'https://agung-portfolio-agung-mahardika-s-projects.vercel.app'

export const metadata: Metadata = {
  title: 'Anak Agung Gede Mahardika Juliananda | Digital Marketing Professional',
  description: 'BNSP Certified Digital Marketing Professional with expertise in Business Development, Strategic Operations, and Project Management. Proven track record in securing institutional tenders, managing large-scale B2B operations, and leading high-impact projects.',
  metadataBase: new URL(SITE_URL),
  authors: [{ name: 'Anak Agung Gede Mahardika Juliananda' }],
  keywords: [
    'Digital Marketing',
    'Business Development',
    'Strategic Operations',
    'Project Management',
    'B2B Sales',
    'Event Management',
    'Bali',
    'Indonesia',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Anak Agung Gede Mahardika Juliananda',
    title: 'Anak Agung Gede Mahardika Juliananda | Digital Marketing Professional',
    description: 'BNSP Certified Digital Marketing Professional with expertise in Business Development, Strategic Operations, and Project Management.',
    images: [
      {
        url: '/profile.png',
        width: 593,
        height: 838,
        alt: 'Anak Agung Gede Mahardika Juliananda',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anak Agung Gede Mahardika Juliananda | Digital Marketing Professional',
    description: 'BNSP Certified Digital Marketing Professional with expertise in Business Development, Strategic Operations, and Project Management.',
    images: ['/profile.png'],
    creator: '@mahardikaagng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-[#050507] text-slate-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Anak Agung Gede Mahardika Juliananda',
              alternateName: 'Agung Mahardika',
              url: SITE_URL,
              image: '/profile.png',
              email: 'gungdemahardika@gmail.com',
              telephone: '+62812468733356',
              jobTitle: 'Digital Marketing Professional',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              sameAs: [
                'https://github.com/mahardikaagng',
                'https://www.linkedin.com/in/anak-agung-gede-mahardika-juliananda-51a730248',
              ],
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Denpasar',
                  addressRegion: 'Bali',
                  addressCountry: 'ID',
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>{children}</body>
    </html>
  )
}
