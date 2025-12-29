import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-muted pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80"
          alt="Luxury Studio Interior"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Optimal <span className="italic">elegance</span> meets exquisite <span className="italic">craft</span>.
          </h1>
        </div>

        <p className="text-sm md:text-lg max-w-xl mx-auto text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          Transforming the standard of beauty into a curated creative movement. Five specialized studios, one collective
          vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
          <button className="bg-primary text-primary-foreground px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground transition-all duration-300">
            Explore the Studios
          </button>
          <button className="border border-primary/20 hover:border-primary px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300">
            Book Appointment
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
        <div className="flex items-center gap-4">
          <span>Instagram</span>
          <div className="w-12 h-[1px] bg-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <span>Twitter</span>
          <div className="w-12 h-[1px] bg-foreground" />
        </div>
      </div>
    </section>
  )
}
