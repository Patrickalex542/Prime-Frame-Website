"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    price: "€2.299",
    period: "/lună",
    description: "Pentru testarea și validarea direcției creative",
    features: [
      "Set lunar de reclame video AI",
      "Set lunar de reclame statice AI",
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
      "Volum extins de reclame video și statice",
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
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance tracking-wider uppercase">
            MODELE DE COLABORARE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 tracking-wider">
            Fiecare colaborare este adaptată volumului, ritmului și nevoilor creative ale proiectului.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            plan.highlighted ? (
              <div
                key={index}
                className="premium-card-outer lg:scale-105 transition-all duration-300"
                style={{
                  transform:
                    hoveredIndex === index
                      ? "perspective(1000px) translateZ(15px) translateY(-5px)"
                      : "perspective(1000px) translateZ(0px)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="premium-dot"></div>
                <div className="premium-card-inner p-6 md:p-8">
                  <div className="premium-ray"></div>
                  <div className="premium-line topl"></div>
                  <div className="premium-line leftl"></div>
                  <div className="premium-line bottoml"></div>
                  <div className="premium-line rightl"></div>
                  
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-primary text-primary-foreground text-xs md:text-sm font-bold rounded-full whitespace-nowrap z-10">
                    Cel Mai Popular
                  </div>

                  <div className="mb-6 md:mb-8 relative z-20">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-xs md:text-sm mb-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow relative z-20">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 relative z-20"
                    size="lg"
                    onClick={scrollToContact}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ) : (
              <Card
                key={index}
                className={`p-6 md:p-8 bg-card border transition-all duration-300 flex flex-col relative border-border hover:border-primary/50`}
                style={{
                  transform:
                    hoveredIndex === index
                      ? "perspective(1000px) translateZ(10px) translateY(-5px)"
                      : "perspective(1000px) translateZ(0px)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4">{plan.description}</p>
                </div>

                <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  size="lg"
                  onClick={scrollToContact}
                >
                  {plan.cta}
                </Button>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
