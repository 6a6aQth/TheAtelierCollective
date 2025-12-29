"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-8",
        isScrolled
          ? "bg-foreground py-4 md:py-4 border-b border-primary/10 text-background"
          : "bg-transparent text-foreground",
      )}
    >
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
          <span className="block text-xl md:text-2xl font-serif tracking-tighter leading-none group-hover:italic transition-all">
            THE ATELIER
          </span>
          <span
            className={cn(
              "block text-[8px] md:text-[10px] uppercase tracking-[0.4em] mt-1 transition-colors",
              isScrolled ? "text-background/60" : "text-primary",
            )}
          >
            COLLECTIVE
          </span>
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <Link href="/cart" className="relative group">
            <ShoppingBag
              className={cn(
                "w-4 h-4 transition-colors",
                isScrolled
                  ? "text-background/80 group-hover:text-background"
                  : "text-foreground/80 group-hover:text-primary",
              )}
            />
            <span className="absolute -top-1 -right-1 text-[8px] bg-primary text-white w-3 h-3 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2 md:hidden">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link
            href="#book"
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
        <div className="flex flex-col gap-8 text-center">
          {["Studios", "About", "Gallery", "Book", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-serif italic hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
