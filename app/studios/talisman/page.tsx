"use client"

import { Navbar } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"

const LiquidEther = dynamic(() => import("@/components/ui/LiquidEther"), {
  ssr: false,
})

const collections = [
  {
    id: 1,
    name: "The Heritage Collection",
    description: "Pieces inspired by ancestral traditions, reimagined for the modern wearer.",
    pieces: 12,
  },
  {
    id: 2,
    name: "The Elemental Series",
    description: "Jewelry that captures the essence of earth, water, fire, and air.",
    pieces: 8,
  },
  {
    id: 3,
    name: "The Personal Talismans",
    description: "Custom-designed pieces imbued with personal meaning and protection.",
    pieces: "Custom",
  },
]

const featuredPieces = [
  {
    name: "The Ancestral Ring",
    material: "18k Gold & Onyx",
    price: "$2,400",
  },
  {
    name: "The Serpent Cuff",
    material: "Sterling Silver",
    price: "$890",
  },
  {
    name: "The Moon Pendant",
    material: "14k Gold & Moonstone",
    price: "$1,650",
  },
  {
    name: "The Protection Charm",
    material: "Mixed Metals & Obsidian",
    price: "$560",
  },
]

export default function TalismanStudioPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary/30 pt-32 pb-20">
        {/* LiquidEther Background */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <LiquidEther
            colors={["#C9A86C", "#D4AF37", "#E8D5A3", "#B8860B"]}
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
            The <span className="italic">Talisman</span> Atelier
          </h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            Fine jewelry collections and personal talismans crafted for those who value subtle luxury. 
            Each piece carries meaning beyond its beauty.
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
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src="/Atelier Models 6.JPG"
              alt="Talisman Atelier"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Our Craft</span>
            <h2 className="text-4xl md:text-5xl">
              Jewelry as <span className="italic">Personal Mythology</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At The Talisman Atelier, we create more than jewelry—we craft personal artifacts 
                that carry stories, protect their wearers, and connect them to something greater.
              </p>
              <p>
                Drawing from ancient symbolism and contemporary design, each piece is meticulously 
                handcrafted using ethically sourced materials and traditional goldsmithing techniques.
              </p>
            </div>
            <button className="bg-primary text-primary-foreground px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground transition-all duration-300">
              Commission a Piece
            </button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">The Collections</span>
            <h2 className="text-4xl md:text-5xl">Curated <span className="italic">Series</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-background p-10 border border-primary/10 space-y-6">
                <span className="text-5xl font-serif text-primary/20">{String(collection.id).padStart(2, "0")}</span>
                <h3 className="text-2xl font-serif">{collection.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{collection.description}</p>
                <div className="pt-4 border-t border-primary/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {typeof collection.pieces === "number" ? `${collection.pieces} Pieces` : collection.pieces}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">Featured</span>
            <h2 className="text-4xl md:text-6xl mb-6">Signature <span className="italic">Pieces</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPieces.map((piece, idx) => (
              <div key={idx} className="group text-center space-y-4">
                <div className="aspect-square bg-secondary/30 relative overflow-hidden flex items-center justify-center">
                  <span className="text-6xl font-serif text-primary/20 group-hover:text-primary/40 transition-colors">
                    ✧
                  </span>
                </div>
                <h3 className="text-lg font-serif">{piece.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{piece.material}</p>
                <p className="text-lg font-medium text-primary">{piece.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commission CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-screen-xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif">
            Create Your Own <span className="italic">Talisman</span>
          </h2>
          <p className="text-background/60 max-w-xl mx-auto leading-relaxed">
            Work directly with our master jewelers to design a piece that carries your personal story, 
            symbolism, and intention. Every custom creation is a one-of-a-kind treasure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-background text-foreground px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Start Your Commission
            </button>
            <button className="border border-background/30 hover:border-background px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300">
              View Process
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 px-6 md:px-12 border-t border-primary/10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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

