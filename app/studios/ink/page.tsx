"use client"

import { Navbar } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"

const LiquidEther = dynamic(() => import("@/components/ui/LiquidEther"), {
  ssr: false,
})

const tattooStyles = [
  {
    id: 1,
    name: "Fine Line",
    description: "Delicate, precise linework creating intricate designs with subtle elegance.",
    image: "/Atelier Models 8.JPG",
  },
  {
    id: 2,
    name: "Ornamental Blackwork",
    description: "Bold geometric patterns and decorative motifs inspired by ancient traditions.",
    image: "/Atelier Models 9.JPEG",
  },
  {
    id: 3,
    name: "Botanical",
    description: "Nature-inspired designs featuring florals, leaves, and organic forms.",
    image: "/Atelier Models 10.JPG",
  },
]

const artists = [
  {
    name: "Marcus Chen",
    specialty: "Fine Line & Minimalist",
    experience: "8 years",
  },
  {
    name: "Zara Williams",
    specialty: "Ornamental & Blackwork",
    experience: "12 years",
  },
  {
    name: "David Okonkwo",
    specialty: "Botanical & Illustrative",
    experience: "6 years",
  },
]

export default function InkStudioPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-foreground text-background pt-32 pb-20">
        {/* LiquidEther Background */}
        <div className="absolute inset-0 z-0 pointer-events-auto opacity-30">
          <LiquidEther
            colors={["#1a1a1a", "#2d2d2d", "#404040", "#333333"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[0.9] text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            The <span className="italic">Ink</span> Atelier
          </h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto text-background/60 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            High-end tattoo artistry focusing on fine lines, ornamental blackwork, and timeless skin art. 
            Every piece is a collaboration between artist and canvas.
          </p>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="px-6 md:px-12 py-8 border-b border-primary/10">
        <div className="max-w-screen-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collective
          </Link>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl">
              Ink as <span className="italic">Eternal Art</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At The Ink Atelier, we believe tattoos are more than body modification—they are 
                permanent expressions of identity, memory, and personal mythology.
              </p>
              <p>
                Our artists approach each piece as a unique collaboration, taking time to understand 
                your vision and translating it into timeless skin art that you'll cherish forever.
              </p>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image
              src="/Atelier Models 5.JPG"
              alt="Ink Atelier"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">Specializations</span>
            <h2 className="text-4xl md:text-6xl mb-6">Our <span className="italic">Signature</span> Styles</h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
              From delicate fine lines to bold blackwork, our artists master diverse techniques to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tattooStyles.map((style) => (
              <div key={style.id} className="group">
                <div className="aspect-[4/5] relative overflow-hidden mb-6">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{style.name}</h3>
                <p className="text-sm text-muted-foreground">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-background/40 mb-4 block">The Team</span>
            <h2 className="text-4xl md:text-5xl">Our <span className="italic">Artists</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {artists.map((artist, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-background/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif">{artist.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-serif">{artist.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{artist.specialty}</p>
                <p className="text-sm text-background/60">{artist.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">Book Your Session</span>
            <h2 className="text-4xl md:text-5xl mb-6">Begin Your <span className="italic">Journey</span></h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
              Every tattoo starts with a conversation. Book a consultation to discuss your ideas with one of our artists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border border-primary/10 text-center space-y-4">
              <span className="text-4xl font-serif text-primary">01</span>
              <h3 className="text-xl font-serif">Consultation</h3>
              <p className="text-sm text-muted-foreground">Share your vision and collaborate with your chosen artist.</p>
            </div>
            <div className="p-8 border border-primary/10 text-center space-y-4">
              <span className="text-4xl font-serif text-primary">02</span>
              <h3 className="text-xl font-serif">Design</h3>
              <p className="text-sm text-muted-foreground">Receive custom artwork tailored to your body and style.</p>
            </div>
            <div className="p-8 border border-primary/10 text-center space-y-4">
              <span className="text-4xl font-serif text-primary">03</span>
              <h3 className="text-xl font-serif">Session</h3>
              <p className="text-sm text-muted-foreground">Experience the art in our serene, private studio space.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary text-primary-foreground px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground transition-all duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-background/40">
            © 2025 The Atelier Collective. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

