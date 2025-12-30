"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

const LiquidEther = dynamic(() => import("@/components/ui/LiquidEther"), {
  ssr: false,
})

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-secondary/30 pt-32 pb-24">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <LiquidEther
          colors={["#D4A5A5", "#C9B1A0", "#E8D5C4", "#BFA89E"]}
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
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Optimal <span className="italic">elegance</span> meets exquisite <span className="italic">craft</span>.
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
          <Link 
            href="#studios"
            className="bg-primary text-primary-foreground px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground transition-all duration-300"
          >
            Explore the Studios
          </Link>
          <Link 
            href="/book"
            className="border border-primary/20 hover:border-primary px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] opacity-40 z-10">
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
