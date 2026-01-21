"use client"

import { useState, useEffect, useRef } from "react"
import { WorkCard } from "@/components/features/work-card"
import { WorkModal } from "@/components/features/work-modal"
import { ScrollReveal } from "@/components/features/scroll-reveal"

const workProjects = [
  {
    id: 1,
    title: "Prezentare PRIME FRAME",
    category: "Showreel",
    tags: ["Cinematic", "AI Generated", "High Energy"],
    imagePlaceholder: "/assets/images/project1_thumb.png",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/c82977043c58a43128de6ff208281b60/manifest/video.m3u8",
    description: "Un montaj dinamic ce definește standardul Prime Frame. O succesiune de vizualuri hipnotice care culminează cu un final narativ provocator: 'That's just what you've seen' – o promisiune a potențialului nemărginit pe care îl oferim.",
  },
  {
    id: 2,
    title: "Duelul Națiunilor",
    category: "Sports Betting",
    tags: ["Character Design", "High Concept", "Regional Marketing"],
    imagePlaceholder: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/01c303e294d969589114cce605e53901/thumbnails/thumbnail.jpg?time=1s&height=600",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/01c303e294d969589114cce605e53901/manifest/video.m3u8",
    description: "Un meci de tenis reinterpretat mitologic. Spania (Toreador) vs. Italia (Gladiator) într-o confruntare vizuală unică. Am folosit AI pentru a fuziona estetica sportivă cu designul de costume istorice, creând o campanie memorabilă pentru audiențe specifice.",
  },
  {
    id: 3,
    title: "Derby-ul Războinicilor",
    category: "Sports Promo",
    tags: ["Epic Battle", "Team Branding", "Visual FX"],
    imagePlaceholder: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/23fedd2a2625c8ab43f015caa47d61e0/thumbnails/thumbnail.jpg?time=2s&height=600",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/23fedd2a2625c8ab43f015caa47d61e0/manifest/video.m3u8",
    description: "FCSB vs Fenerbahçe re-imaginat ca o bătălie epică. Terenul devine câmp de luptă, iar jucătorii sunt războinici în armuri personalizate cu culorile cluburilor. O metaforă vizuală puternică pentru intensitatea competiției la nivel înalt.",
  },
  {
    id: 4,
    title: "Anida Beauty Care AI",
    category: "Beauty Commercial",
    tags: ["AI Model", "Hyper-Realistic", "Product Focus"],
    imagePlaceholder: "/assets/images/project4_thumb.png",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/33c7c2b8763dd03f9a1f5148c63e1b3a/manifest/video.m3u8",
    description: "Spot publicitar pentru salonul Anida Beauty Care. Protagonista este un model 100% generat de AI, demonstrând aplicarea produsului cu un nivel de realism care sfidează distincția dintre virtual și real.",
  },
  {
    id: 5,
    title: "Travel Free Experience",
    category: "Retail Commercial",
    tags: ["Product Showcase", "Retail Marketing", "Dynamic Editing"],
    imagePlaceholder: "/assets/images/project5_thumb.png",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/abf9d3ec0f4d8c1dd2a0ec1a252f95b2/manifest/video.m3u8",
    description: "Campanie video pentru Travel Free Bordershop. O prezentare dinamică a selecției exclusive de produse, concepută pentru a capta atenția călătorilor și a evidenția varietatea ofertei premium din locațiile de graniță.",
  },
  {
    id: 6,
    title: "Free Spins Campaign",
    category: "Casino Marketing",
    tags: ["Player Acquisition", "Promo Offer", "Visual FX"],
    imagePlaceholder: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/113f1cc45b60e2f00bb0983738f3ccc4/thumbnails/thumbnail.jpg?time=1s&height=600",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/113f1cc45b60e2f00bb0983738f3ccc4/manifest/video.m3u8",
    description: "Campanie dedicată ofertei de rotiri gratuite fără depunere. Un spot alert, construit pentru a maximiza rata de conversie și a comunica instantaneu valoarea beneficiului către jucători.",
  },
]

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof workProjects)[0] | null>(null)

  return (
    <section id="work" className="py-16 sm:py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 transition-all duration-300 hover:scale-[1.01]">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-20 bg-black/40 backdrop-blur-sm py-8 px-6 rounded-3xl border border-white/5 mx-auto max-w-4xl shadow-2xl">
            <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance text-3xl tracking-widest uppercase">
              FEATURED WORK
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 tracking-wider">
              O selecție de conținut cinematic video creat pentru clienții noștri
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="container mx-auto px-4 sm:px-6 transition-all duration-300 hover:scale-[1.01]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {workProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <WorkCard
                title={project.title}
                category={project.category}
                tags={project.tags}
                imagePlaceholder={project.imagePlaceholder}
                onClick={() => setSelectedProject(project)}
              />
            </ScrollReveal>
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
