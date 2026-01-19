"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { ScrollReveal } from "@/components/features/scroll-reveal"

const plans = [
  {
    name: "STARTER",
    price: "€2.299",
    period: "/lună",
    description: "Pentru testarea și validarea direcției creative",
    features: [
      "Set lunar de conținut video AI",
      "Set lunar conținut static AI",
      "Direcție creativă & prompt engineering",
      "Livrare în formate standard",
      "Feedback & ajustări incluse",
    ],
    cta: "CONTACTEAZA-NE",
    highlighted: false,
  },
  {
    name: "PROFESIONAL",
    price: "€5.499",
    period: "/lună",
    description: "Pentru echipe care au nevoie de volum constant",
    features: [
      "Volum extins de conținut video și static",
      "Variații multiple din același concept",
      "Storyboard & structură de reclamă",
      "Refresh creativ recurent",
      "Suport prioritar",
    ],
    cta: "CONTACTEAZA-NE",
    highlighted: true,
  },
  {
    name: "ENTERPRISE",
    price: "Personalizat",
    period: "",
    description: "Pentru proiecte cu cerințe complexe și scalare",
    features: [
      "Volume personalizate",
      "Direcție creativă dedicată",
      "Procese și livrări custom",
      "Colaborare strategică continuă",
    ],
    cta: "CONTACTEAZA-NE",
    highlighted: false,
  },
]

export function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance tracking-wider uppercase">
              MODELE DE COLABORARE
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 tracking-wider">
              Fiecare colaborare este adaptată volumului, ritmului și nevoilor creative ale proiectului.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className={`p-8 pricing-3d-card group cursor-default flex flex-col border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,162,106,0.15)] ${plan.highlighted ? 'shadow-[0_0_30px_rgba(201,162,106,0.15)] border-primary/30' : ''}`}
              >
                {/* Premium Top Line - All Cards */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b08d55] via-[#e3c489] to-[#b08d55] transition-opacity duration-500 ${plan.highlighted ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} />
                
                <div className="mb-8 relative z-10 pricing-content-float">
                  {plan.highlighted ? (
                     <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/30 text-[10px] sm:text-xs font-bold tracking-widest text-[#e3c489] uppercase mb-4 shadow-[0_0_10px_rgba(201,162,106,0.2)]">
                       Most Popular
                     </span>
                  ) : (
                     /* Spacer to align headers if needed, or just keep layout flexible */
                     <div className="h-[26px] mb-4 sm:mb-4 lg:mb-4 opacity-0"></div>
                  )}
                  
                  <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white tracking-wide uppercase group-hover:text-[#e3c489] transition-colors duration-300">{plan.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:border-primary/20 transition-colors duration-500">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative z-10 pricing-content-float delay-75">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover/item:border-primary/60 transition-colors shadow-[0_0_5px_rgba(201,162,106,0.0)] group-hover/item:shadow-[0_0_8px_rgba(201,162,106,0.3)]">
                        <Check className="w-3 h-3 text-primary check-glow" />
                      </div>
                      <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 pricing-content-float delay-100">
                  <Button
                    className={`w-full py-6 text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 ${
                      plan.highlighted 
                        ? "bg-primary text-black hover:bg-[#e3c489] hover:shadow-[0_0_20px_rgba(201,162,106,0.5)] scale-100" 
                        : "bg-white/5 text-white hover:bg-primary/20 border border-white/10 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(201,162,106,0.15)]"
                    }`}
                    onClick={scrollToContact}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
