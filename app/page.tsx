import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Studios } from "@/components/sections/studios"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />

      <Hero />

      {/* Philosophy Section */}
      <section
        id="about"
        className="py-24 md:py-48 px-6 md:px-12 bg-secondary/30 border-y border-primary/5 overflow-hidden"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
            <Image
              src="/Atelier About.JPEG"
              alt="The Founders"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-background p-8 border border-primary/10 hidden md:block">
              <span className="block text-4xl font-serif italic mb-2">3</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium leading-tight">
                Sisters. <br />
                One Vision.
              </span>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Philosophy</span>
              <h2 className="text-5xl md:text-7xl text-balance">
                Founded on <span className="italic">Heritage</span> & Modern Artistry
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Atelier Collective was founded by the three Namalima sisters as a unified sanctuary where
                high-fashion editorial meets traditional craftsmanship.
              </p>
              <p>
                We believe beauty is not a service to be rendered, but a curated experience of self-discovery. Our
                collective exists to redefine the boundaries of what a creative studio can be.
              </p>
            </div>

            <div className="pt-6">
              <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold">
                Our Story
                <div className="w-12 h-[1px] bg-foreground group-hover:w-24 transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Studios />

      {/* Gallery Highlight */}
      <section id="gallery" className="pb-24 md:pb-40 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto space-y-12">
          <div className="flex items-center justify-between border-b border-primary/10 pb-8">
            <h2 className="text-4xl md:text-5xl">Artistic Archives</h2>
            <Link
              href="/gallery"
              className="text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { src: "/Atelier Models 2.JPEG", alt: "Atelier Model 2" },
              { src: "/Atelier Models 3.JPEG", alt: "Atelier Model 3" },
              { src: "/Atelier Models 4.JPG", alt: "Atelier Model 4" },
              { src: "/Atelier Models 7.JPEG", alt: "Atelier Model 7" },
            ].map((image, i) => (
              <div key={i} className="aspect-[4/5] bg-muted relative group overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="block text-2xl md:text-3xl font-serif tracking-tighter">THE ATELIER</span>
              <span className="block text-[10px] uppercase tracking-[0.4em] text-background/40">COLLECTIVE</span>
            </div>
            <p className="text-background/60 text-sm max-w-xs leading-relaxed">
              A luxury creative hub housing five specialized studios. Dedicated to creativity, culture, and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
            <div className="space-y-4">
              <span className="text-background/40">Contact</span>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Inquiries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <span className="text-background/40">Follow</span>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Pinterest
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Vimeo
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-background/40">Join the Newsletter</span>
            <div className="flex border-b border-background/20 pb-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none text-[10px] w-full focus:ring-0 placeholder:text-background/20"
              />
              <button className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[9px] text-background/30 uppercase tracking-[0.1em]">
              © 2025 THE ATELIER COLLECTIVE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

      </footer>
    </main>
  )
}

import Link from "next/link"
