import { Navbar } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const wigs = [
  {
    id: 1,
    name: "The Sovereign",
    description: "A luxurious statement piece with cascading waves and rich depth.",
    images: [
      "/The Atelier Hair wig 1 Image 1.JPEG",
      "/The Atelier Hair wig 1 Image 2.JPEG",
    ],
    status: "Available",
  },
  {
    id: 2,
    name: "The Empress",
    description: "Elegant and regal, designed for those who command attention.",
    images: [
      "/The Atelier Hair wig 2 image 1.JPEG",
      "/The Atelier Hair wig 2 image 2.JPEG",
      "/The Atelier Hair wig 2 image 3.JPEG",
    ],
    status: "Available",
  },
  {
    id: 3,
    name: "The Muse",
    description: "Artistic expression meets wearable beauty in this editorial favorite.",
    images: [
      "/The Atelier Hair wig 3 image 1.JPEG",
      "/The Atelier Hair wig 3 image 2.JPEG",
    ],
    status: "Available",
  },
  {
    id: 4,
    name: "The Ethereal",
    description: "Soft, flowing, and effortlessly graceful for the modern woman.",
    images: [
      "/The Atelier Hair wig 4 image 1.JPEG",
      "/The Atelier Hair wig 4 image 2.JPEG",
    ],
    status: "Available",
  },
  {
    id: 5,
    name: "The Opulent",
    description: "Bold volume and dramatic presence for unforgettable moments.",
    images: [
      "/The Atelier Hair wig 5 image 1.JPEG",
      "/The Atelier Hair wig 5 image 2.JPEG",
    ],
    status: "Available",
  },
  {
    id: 6,
    name: "The Refined",
    description: "Understated elegance with meticulous attention to detail.",
    images: [
      "/The Atelier Hair wig 6 image 1.JPEG",
      "/The Atelier Hair wig 6 image 2.JPEG",
      "/The Atelier Hair wig 6 image 3.JPEG",
    ],
    status: "Available",
  },
  {
    id: 7,
    name: "The Visionary",
    description: "A forward-thinking design that pushes the boundaries of style.",
    images: [
      "/The Atelier Hair wig 7 image 1.JPEG",
      "/The Atelier Hair wig 7 image 2.JPEG",
    ],
    status: "Available",
  },
]

export default function HairStudioPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary/30 pt-32 pb-20">
        <div className="text-center px-6 max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/Atelier_The Atelier Hair Logo.PNG"
              alt="The Hair Atelier Logo"
              width={200}
              height={100}
              className="h-20 md:h-28 w-auto"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[0.9] text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            The <span className="italic">Hair</span> Atelier
          </h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            Bespoke wigs, high-fashion braiding, and editorial styling for the modern woman. 
            Each piece is crafted with meticulous attention to detail.
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

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl">Crafted with <span className="italic">Precision</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-10 border border-primary/10 space-y-4 text-center">
              <h3 className="text-2xl font-serif">Bespoke Wigs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Custom-designed luxury wigs crafted to your exact specifications and personal style.
              </p>
            </div>
            <div className="bg-background p-10 border border-primary/10 space-y-4 text-center">
              <h3 className="text-2xl font-serif">Editorial Styling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                High-fashion hair styling for photoshoots, events, and editorial productions.
              </p>
            </div>
            <div className="bg-background p-10 border border-primary/10 space-y-4 text-center">
              <h3 className="text-2xl font-serif">Artisan Braiding</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Traditional and contemporary braiding techniques elevated to art form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wig Collection */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">The Collection</span>
            <h2 className="text-4xl md:text-6xl mb-6">Our <span className="italic">Signature</span> Pieces</h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
              Each wig is a one-of-a-kind creation, handcrafted with the finest materials and designed to transform.
            </p>
          </div>

          <div className="space-y-32">
            {wigs.map((wig, idx) => (
              <div
                key={wig.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Images */}
                <div className={`grid gap-4 ${wig.images.length === 3 ? "grid-cols-3" : "grid-cols-2"} ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {wig.images.map((image, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="aspect-[3/4] relative overflow-hidden group"
                    >
                      <Image
                        src={image}
                        alt={`${wig.name} - View ${imgIdx + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className={`space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
                      Piece {String(wig.id).padStart(2, "0")}
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 ${
                      wig.status === "Available" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {wig.status}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif">{wig.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                    {wig.description}
                  </p>
                  <button className="bg-primary text-primary-foreground px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground transition-all duration-300">
                    Inquire About This Piece
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-screen-xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif">
            Ready to <span className="italic">Transform?</span>
          </h2>
          <p className="text-background/60 max-w-xl mx-auto leading-relaxed">
            Book a consultation with our master stylists to discover your perfect piece 
            or discuss a custom creation tailored exclusively for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-background text-foreground px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Book Consultation
            </button>
            <button className="border border-background/30 hover:border-background px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300">
              View Braiding Services
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

