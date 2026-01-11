"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "€2.299",
    period: "/lună",
    description: "Perfect pentru testarea creativelor generate cu AI",
    features: [
      "20 variante reclame video pe lună",
      "40 variante reclame statice pe lună",
      "2 strategii de campanie",
      "Testare A/B de bază",
      "Suport prin email",
      "Integrare ghiduri de brand",
    ],
    cta: "Începe Perioada de Probă",
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "€5.499",
    period: "/lună",
    description: "Pentru echipe gata să scaleze performanța",
    features: [
      "100 variante reclame video pe lună",
      "200 variante reclame statice pe lună",
      "5 strategii de campanie",
      "Framework avansat de testare A/B",
      "Suport prioritar & apeluri de strategie",
      "Localizare multi-piață",
      "Sistem de reîmprospătare creativă",
      "Dashboard analitică performanță",
    ],
    cta: "Rezervă un Apel",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Personalizat",
    period: "",
    description: "Scalare nelimitată pentru branduri în creștere rapidă",
    features: [
      "Variante video & statice nelimitate",
      "Strategii de campanie nelimitate",
      "Strateg creativ dedicat",
      "Suport premium complet",
      "Training model AI personalizat",
      "Acces API pentru integrări",
      "Review-uri de business trimestriale",
      "Termeni de contract personalizați",
    ],
    cta: "Contactează Vânzări",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance tracking-wider">
            Prețuri Simple și Transparente
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 tracking-wider">
            Alege planul care se potrivește etapei tale de creștere. Scalează sus sau jos oricând.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 bg-card border transition-all duration-300 flex flex-col relative ${
                plan.highlighted
                  ? "border-primary shadow-2xl shadow-primary/20 lg:scale-105"
                  : "border-border hover:border-primary/50"
              }`}
              style={{
                transform:
                  hoveredIndex === index && !plan.highlighted
                    ? "perspective(1000px) translateZ(10px) translateY(-5px)"
                    : plan.highlighted && hoveredIndex === null
                      ? "perspective(1000px) translateZ(0px)"
                      : hoveredIndex === index && plan.highlighted
                        ? "perspective(1000px) translateZ(15px) translateY(-5px)"
                        : "perspective(1000px) translateZ(0px)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-primary text-primary-foreground text-xs md:text-sm font-bold rounded-full whitespace-nowrap z-10">
                  Cel Mai Popular
                </div>
              )}

              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1 sm:gap-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm md:text-base">{plan.period}</span>
                </div>
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
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                size="lg"
                onClick={scrollToContact}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
