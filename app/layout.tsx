import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic", "normal"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "The Atelier Collective | Luxury Artistry & Beauty",
  description: "A luxury creative hub housing five specialized studios: Hair, Ink, Talisman, Beauty & Apparel. Where optimal elegance meets exquisite craft.",
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'The Atelier Collective',
    description: 'A luxury creative hub housing five specialized studios. Hair, Ink, Talisman, Beauty & Apparel. Where optimal elegance meets exquisite craft.',
    siteName: 'The Atelier Collective',
    images: [
      {
        url: '/Og image.JPEG',
        width: 1200,
        height: 630,
        alt: 'The Atelier Collective - Luxury Artistry & Beauty',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Atelier Collective',
    description: 'A luxury creative hub housing five specialized studios. Where optimal elegance meets exquisite craft.',
    images: ['/Og image.JPEG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
