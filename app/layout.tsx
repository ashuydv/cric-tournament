import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LoadingProvider from '@/components/loading-provider'
import SocialMediaLinks from '@/components/social-media-links'

export const metadata: Metadata = {
  title: 'RunBhumi | India\'s Greatest Cricket Talent Hunt',
  description: 'RunBhumi is India\'s first-ever televised individual cricket talent hunt scouting extraordinary players from cities to remote villages across the nation.',
  generator: 'RunBhumi',
  keywords: ['cricket talent hunt', 'cricket trials', 'cricket academy', 'Indian cricket', 'cricket gurukul', 'cricket talent search', 'T20 cricket', 'cricket opportunity', 'grassroots cricket', 'cricket televised'],
  authors: [{ name: 'Narendra Khanna' }, { name: 'Tarak Bajpai' }],
  category: 'Sports & Cricket',
  openGraph: {
    title: 'RunBhumi | India\'s Greatest Cricket Talent Hunt',
    description: 'Discover India\'s first televised cricket talent platform transforming raw talent into national sensations through nationwide trials, 45-day Gurukul training, and televised T20 leagues.',
    url: 'https://runbhumi.com',
    siteName: 'RunBhumi',
    images: [
      {
        url: '/og-cricket-talent-hunt.jpg',
        width: 1200,
        height: 630,
        alt: 'RunBhumi - India\'s Greatest Cricket Talent Hunt',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RunBhumi | Where Cricket Dreams Come Alive',
    description: 'India\'s first televised cricket talent hunt scouting extraordinary players from cities to villages across the nation. 36 cities. 128 players. 45-day Gurukul.',
    images: ['/twitter-cricket-image.jpg'],
    creator: '@runbhumi',
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
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://runbhumi.com',
    languages: {
      'en-US': 'https://runbhumi.com/en-us',
      'hi-IN': 'https://runbhumi.com/hi',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  metadataBase: new URL('https://runbhumi.com'),
  other: {
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff',
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        {/* Additional structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              "name": "RunBhumi",
              "description": "India's Greatest Cricket Talent Hunt",
              "url": "https://runbhumi.com",
              "logo": "https://runbhumi.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/runbhumi",
                "https://www.instagram.com/runbhumi",
                "https://twitter.com/runbhumi"
              ],
              "founder": {
                "@type": "Person",
                "name": "Narendra Khanna"
              },
              "event": {
                "@type": "SportsEvent",
                "name": "RunBhumi Cricket Talent Hunt",
                "startDate": "2023",
                "location": {
                  "@type": "Country",
                  "name": "India"
                },
                "description": "National cricket talent hunt across 36 cities in India"
              }
            })
          }}
        />
      </head>
      <body className={montserrat.className}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <LoadingProvider>
              {children}
            </LoadingProvider>
          </main>
          <Footer />
          <SocialMediaLinks />
        </div>
      </body>
    </html>
  );
}