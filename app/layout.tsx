import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic", "normal"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "The Atelier Collective | Luxury Artistry & Beauty",
  description: "An umbrella of specialized studios: Hair, Beauty, Ink, Adornment, and Apparel.",
    generator: 'v0.app'
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
