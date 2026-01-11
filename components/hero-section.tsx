"use client"

import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "./animated-background"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight">
          AI Ads that convert
          <br />
          <span className="text-primary">for iGaming</span> and
          <br />
          performance brands
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          High impact video and static creatives generated with AI, optimized for scale
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            onClick={() => scrollToSection("work")}
            className="text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="text-lg px-10 py-7 border-primary text-primary hover:bg-primary/10"
          >
            Book a Call
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
