"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Video, ImageIcon, Sparkles } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Video Ads AI",
    description: "Reclame video generate cu AI pentru social media și platforme de advertising.",
    features: [
      "Video ads pentru Facebook, Instagram, TikTok",
      "Multiple formate și dimensiuni",
      "Adaptare automată pe platforme",
      "Brand-safe și optimizat pentru conversie",
    ],
  },
  {
    icon: ImageIcon,
    title: "Static Ads AI",
    description: "Banners și creatives statice generate cu AI pentru campaniile tale.",
    features: [
      "Display ads și banners multi-format",
      "Adaptare rapidă pentru diferite piețe",
      "Design consistent cu brandul",
      "Gata pentru orice platformă",
    ],
  },
  {
    icon: Sparkles,
    title: "Creative Variations",
    description: "Generăm sute de variante creative pentru testare și scalare.",
    features: [
      "Variante multiple din același concept",
      "Diferite stiluri și abordări",
      "Testare A/B la scară",
      "Refresh continuu de creativități",
    ],
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance tracking-widest">
            Ce Generăm
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 tracking-wider">
            Creativități AI pentru toate nevoile tale de advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                style={{
                  transform:
                    hoveredIndex === index
                      ? "perspective(1000px) translateZ(20px)"
                      : "perspective(1000px) translateZ(0px)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{service.description}</p>
                </div>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
