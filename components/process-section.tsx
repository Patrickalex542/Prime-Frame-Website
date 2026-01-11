"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Brief & Concept",
    description: "Ne dai detalii despre brand, produs și audiență. Stabilim stilul vizual și mesajul campaniei.",
  },
  {
    number: "02",
    title: "Generare AI",
    description:
      "AI-ul nostru creează sute de variante de reclame - video și statice - optimizate pentru platformele tale.",
  },
  {
    number: "03",
    title: "Selecție & Livrare",
    description: "Alegi creativitățile preferate, noi le pregătim în toate formatele necesare pentru campanii.",
  },
  {
    number: "04",
    title: "Iterații & Refresh",
    description: "Generăm noi variante constant pe baza feedback-ului tău și a nevoilor de campanie.",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollProgress = (entry.intersectionRatio - 0.2) / 0.6
            const stepIndex = Math.min(Math.floor(scrollProgress * steps.length), steps.length - 1)
            setActiveStep(Math.max(0, stepIndex))
          }
        })
      },
      { threshold: Array.from({ length: 100 }, (_, i) => i / 100) },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-widest">
            Procesul Nostru
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 tracking-wider">
            Un framework dovedit pentru crearea de creative cu conversie ridicată la scară mare
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-border hidden lg:block">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center lg:items-start">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 transition-all duration-500 ${
                      index <= activeStep
                        ? "bg-primary text-primary-foreground scale-110"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {step.number}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center lg:text-left">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
