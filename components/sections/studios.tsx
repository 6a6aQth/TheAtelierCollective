import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const studios = [
  {
    name: "The Hair Atelier",
    description: "Bespoke wigs, high-fashion braiding, and editorial styling for the modern woman.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80",
    color: "bg-primary text-white",
    link: "/studios/hair",
  },
  {
    name: "The Ink Atelier",
    description: "High-end tattoo artistry focusing on fine lines, ornamental blackwork, and timeless skin art.",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80",
    color: "bg-foreground text-background",
    link: "/studios/ink",
  },
  {
    name: "The Adornment Atelier",
    description: "Fine jewelry collections and personal talismans crafted for those who value subtle luxury.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
    color: "bg-accent/20 text-foreground",
    link: "/studios/adornment",
  },
]

export function Studios() {
  return (
    <section id="studios" className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">The Collective</span>
            <h2 className="text-5xl md:text-7xl">
              Discover the <span className="italic">Five Chambers</span> of Artistry
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
            Each studio operates as a specialized sanctuary for a specific craft, united by a commitment to perfection
            and artistic integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-border/20 border-y border-border/20">
          {studios.map((studio, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] overflow-hidden bg-muted flex flex-col justify-end p-8 md:p-12 transition-all duration-700 hover:z-10"
            >
              <Image
                src={studio.image || "/placeholder.svg"}
                alt={studio.name}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl md:text-4xl text-foreground">{studio.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 max-w-xs transition-all duration-500 group-hover:text-foreground">
                  {studio.description}
                </p>
                <Link
                  href={studio.link}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold group/link"
                >
                  Explore Studio
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-primary/5 p-12 md:p-20 space-y-8 flex flex-col justify-center border border-primary/10">
            <h3 className="text-4xl md:text-5xl">The Beauty Atelier</h3>
            <p className="text-muted-foreground leading-relaxed">
              Curated makeup artistry, holistic skincare treatments, and precision brow/lash design. A temple for the
              aesthetic self.
            </p>
            <button className="self-start border-b border-primary pb-1 text-[10px] uppercase tracking-[0.2em] font-bold">
              View Services
            </button>
          </div>
          <div className="bg-foreground text-background p-12 md:p-20 space-y-8 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl text-background">The Apparel Atelier</h3>
            <p className="text-background/60 leading-relaxed">
              Limited-run fashion collections and bespoke garment construction. Wearable art for the discerning
              collector.
            </p>
            <button className="self-start border-b border-background/40 pb-1 text-[10px] uppercase tracking-[0.2em] font-bold">
              Discover Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
