import type { Metadata } from 'next'
import Head from 'next/head';

import './globals.css'
import ThemeClient from './rootLayout'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { footer } from '../containers/static-data';

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
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
