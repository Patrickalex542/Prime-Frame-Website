"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Video, ImageIcon, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/features/scroll-reveal"

const services = [
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
              <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="relative overflow-hidden p-6 md:p-8 rounded-[20px] bg-[linear-gradient(145deg,#121212,#050505)] border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6),0_0_30px_rgba(201,162,106,0.05)] group cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Cinematic Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-primary transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(201,162,106,0.8)]" />

                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/5 transition-all duration-400 group-hover:scale-105 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(201,162,106,0.2)]">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#a0a0a0] transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(201,162,106,0.6)]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-wide uppercase">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6 font-light">{service.description}</p>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500 relative z-10" />

                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_rgba(201,162,106,0.8)] transition-all duration-300" />
                      <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors duration-300">{feature}</span>
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
