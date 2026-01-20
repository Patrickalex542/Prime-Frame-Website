"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Video, ImageIcon, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/features/scroll-reveal"

const services = [
  {
    icon: ImageIcon,
    title: "STATIC CONTENT AI",
    description: "Imagini generate cu AI, create pentru coerență vizuală și utilizare în campanii",
    features: [
      "Bannere și creative statice multi-format",
      "Adaptare rapidă pentru diferite piețe",
      "Design aliniat cu identitatea brandului",
      "Pregătite pentru platforme de advertising",
    ],
  },
  {
    icon: Video,
    title: "VIDEO CONTENT AI",
    description: "Concept creativ și structură de reclamă",
    features: [
      "Prompt engineering avansat pentru control vizual",
      "Storyboard simplificat (hook → mesaj → final)",
      "Formate multiple pentru social media",
      "Adaptate pentru distribuție digitală",
    ],
  },
  {
    icon: Sparkles,
    title: "Creative Variations",
    description: "Generăm multiple variații creative pornind de la același concept, pentru testare și refresh continuu de conținut.",
    features: [
      "Variații multiple din același concept",
      "Ajustări de stil, compoziție și mesaj",
      "Testarea diferitelor abordări creative",
      "Refresh constant de conținut",
    ],
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance tracking-widest uppercase">
              CE LIVRĂM
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 tracking-wider">
              Conținut video cinematic, conținut static (foto) și servicii de creație grafică, realizate cu AI, concepute ca mini-spoturi și vizualuri de impact adaptate fiecărui canal digital
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
              <div
                className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(145deg,#121212,#050505)] border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6),0_0_30px_rgba(201,162,106,0.05)] group cursor-default h-full flex flex-col p-[clamp(1.5rem,3vw,2.5rem)]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Cinematic Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-primary transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(201,162,106,0.8)]" />

                <div className="mb-[clamp(1.5rem,3vh,2.5rem)] relative z-10 flex-1">
                  <div className="rounded-2xl flex items-center justify-center mb-[clamp(1rem,2vh,1.5rem)] bg-white/5 border border-white/5 transition-all duration-400 group-hover:scale-105 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(201,162,106,0.2)] w-[clamp(3.5rem,5vw,4.5rem)] h-[clamp(3.5rem,5vw,4.5rem)]">
                    <Icon className="text-[#a0a0a0] transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(201,162,106,0.6)] w-[clamp(1.75rem,2.5vw,2.25rem)] h-[clamp(1.75rem,2.5vw,2.25rem)]" />
                  </div>
                  <h3 className="font-bold mb-3 text-white tracking-wide uppercase text-[clamp(1.25rem,2vw,1.75rem)] leading-tight">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-[clamp(0.875rem,1.1vw,1rem)]">{service.description}</p>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500 relative z-10" />

                <ul className="space-y-[clamp(0.75rem,1.5vh,1rem)] relative z-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_rgba(201,162,106,0.8)] transition-all duration-300" />
                      <span className="text-gray-400 group-hover/item:text-gray-200 transition-colors duration-300 text-[clamp(0.875rem,1.1vw,1rem)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
