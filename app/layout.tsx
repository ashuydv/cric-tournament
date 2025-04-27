import type { Metadata } from 'next'
import './globals.css'
import { Roboto, Playfair_Display } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LoadingProvider from '@/components/loading-provider'
import SocialMediaLinks from '@/components/social-media-links'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export const metadata: Metadata = {
  title: 'RunBhumi',
  description: '',
  generator: 'RunBhumi',
}

// Load Roboto for body text
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

// Load Playfair Display for headings
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfairDisplay.variable}`}>
      <body className={roboto.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main>
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