import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LoadingProvider from '@/components/loading-provider'

export const metadata: Metadata = {
  title: 'RunBhumi',
  description: '',
  generator: 'RunBhumi',
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
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <LoadingProvider>
              {children}
            </LoadingProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}