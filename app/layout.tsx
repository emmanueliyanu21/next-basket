import type { Metadata } from 'next'

import './globals.css'
import ThemeClient from './rootLayout'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { footer } from '../container/static-data';

export const metadata: Metadata = {
  title: 'Next Basket E-commerce',
  description: 'Your one stop for everything',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeClient>
          <Header />
          <Navbar />
          {children}
          <Footer data={footer} />
        </ThemeClient>
      </body>
    </html>
  )
}
