import type { Metadata } from 'next'
import './globals.css'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Run Bhumi',
  description: '',
  generator: 'Run Bhumi',
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
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
