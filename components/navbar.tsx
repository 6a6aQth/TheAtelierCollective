"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 bg-foreground text-background">

      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex-1 hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <Link href="#studios" className="hover:text-primary transition-colors">
            Studios
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#gallery" className="hover:text-primary transition-colors">
            Gallery
          </Link>
        </div>

        <Link href="/" className="flex-shrink-0 text-center group">
          <Image
            src="/Atelier Logo with no background.png"
            alt="The Atelier Collective"
            width={120}
            height={60}
            className="h-10 md:h-14 w-auto transition-all duration-300 brightness-0 invert"
          />
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <Link href="/cart" className="relative group">
            <ShoppingBag className="w-4 h-4 transition-colors text-background/80 group-hover:text-background" />
            <span className="absolute -top-1 -right-1 text-[8px] bg-primary text-white w-3 h-3 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2 md:hidden">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link
            href="/book"
            className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-transform duration-700 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-8 text-center text-foreground">
          <Link
            href="/#studios"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-serif italic hover:text-primary transition-colors"
          >
            Studios
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-serif italic hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-serif italic hover:text-primary transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/book"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-serif italic hover:text-primary transition-colors"
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  )
}
