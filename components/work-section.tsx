"use client"

import { useState, useEffect, useRef } from "react"
import { WorkCard } from "./work-card"
import { WorkModal } from "./work-modal"

const workProjects = [
  {
    id: 1,
    title: "Lansare Cazinou Cripto",
    category: "iGaming",
    tags: ["Conținut Video", "Variante A/B", "Stil UGC"],
    imagePlaceholder: "Campanie Conținut Cazinou",
    videoUrl: "https://drive.google.com/file/d/1nVeY7qcVHPrp4Um7KRmV5VgtnzTIhfLo/preview",
    description:
      "Am lansat o campanie de conținut video cinematic cu conversie ridicată pentru o nouă platformă de cazinou cripto. Am generat peste 50 de variante cu AI, testând diferite hook-uri și CTA-uri.",
  },
  {
    id: 2,
    title: "Promoție Pariuri Sportive",
    category: "Marketing de Performanță",
    tags: ["Conținut Static", "Localizare", "Variante A/B"],
    imagePlaceholder: "Campanie Pariuri",
    videoUrl: "https://youtube.com/shorts/-BQTkBSQUbg", // Adaugă URL-ul tău de video aici
    description:
      "Am creat seturi de conținut static localizat pentru 12 piețe. Generarea bazată pe AI a permis testarea rapidă a titlurilor și vizualurilor.",
  },
  {
    id: 3,
    title: "Creative Joc Slots",
    category: "iGaming",
    tags: ["Conținut Video", "Stil UGC"],
    imagePlaceholder: "Video Slots",
    videoUrl: "", // Adaugă URL-ul tău de video aici
    description:
      "Am produs conținut video autentic în stil UGC care prezintă gameplay-ul la sloturi. AI a ajutat la menținerea consistenței brandului, scalând producția de conținut de 10 ori mai rapid decât metodele tradiționale.",
  },
  {
    id: 4,
    title: "Experiență Cazinou Live",
    category: "Gaming Premium",
    tags: ["Conținut Video", "Conținut Static", "Variante A/B"],
    imagePlaceholder: "Cazinou Live",
    videoUrl: "", // Adaugă URL-ul tău de video aici
    description:
      "Am dezvoltat creative video și statice premium care evidențiază experiența cu dealer live. Testarea multi-variantă a identificat combinații câștigătoare care au dublat ratele de conversie.",
  },
  {
    id: 5,
    title: "Campanie Rețea Afiliere",
    category: "Marketing de Performanță",
    tags: ["Conținut Static", "Localizare", "Variante A/B"],
    imagePlaceholder: "Campanie Afiliere",
    videoUrl: "", // Adaugă URL-ul tău de video aici
    description:
      "Am construit un sistem scalabil de conținut creativ pentru parteneri afiliați în peste 20 de piețe.",
  },
  {
    id: 6,
    title: "Promovare Turneu",
    category: "iGaming",
    tags: ["Conținut Video", "Conținut Static", "Stil UGC"],
    imagePlaceholder: "Conținut Turneu",
    videoUrl: "", // Adaugă URL-ul tău de video aici
    description:
      "Am creat conținut video și static care transmit urgență pentru turneul sezonier de poker. Variantele generate cu AI au testat diferite trigger-e emoționale, rezultând o creștere de 250% în înscrieri.",
  },
]

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof workProjects)[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="work" className="py-16 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 transition-all duration-300 hover:scale-[1.01]">
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance text-3xl tracking-widest uppercase">
            FEATURED WORK
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 tracking-wider">
            O selecție de conținut cinematic video creat pentru clienții noștri
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {workProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <WorkCard
                title={project.title}
                category={project.category}
                tags={project.tags}
                imagePlaceholder={project.imagePlaceholder}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <WorkModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          category={selectedProject.category}
          tags={selectedProject.tags}
          description={selectedProject.description}
          videoUrl={selectedProject.videoUrl}
        />
      )}
    </section>
  )
}
