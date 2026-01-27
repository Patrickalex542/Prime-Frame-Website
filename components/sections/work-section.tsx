"use client"

import { useState, useEffect, useRef } from "react"
import { WorkCard } from "@/components/features/work-card"
import { WorkModal } from "@/components/features/work-modal"
import { ScrollReveal } from "@/components/features/scroll-reveal"

const workProjects = [
  {
    id: 1,
    title: "PREZENTARE PRIME FRAME",
    category: "Showreel",
    tags: ["Cinematic", "AI Generated", "High Energy"],
    imagePlaceholder: "/assets/images/project1_thumb.png",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/c82977043c58a43128de6ff208281b60/manifest/video.m3u8",
    description: "Un montaj dinamic ce definește standardul Prime Frame. O succesiune de vizualuri hipnotice care culminează cu un final narativ provocator: 'That's just what you've seen' – o promisiune a potențialului nemărginit pe care îl oferim.",
  },
  {
    id: 2,
    title: "DUEL OF TITANS — SINNER VS ALCARAZ",
    category: "Sports Betting",
    tags: ["Sports Cinematic", "Concept Teaser", "Character Design"],
    imagePlaceholder: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/01c303e294d969589114cce605e53901/thumbnails/thumbnail.jpg?time=38s&height=600",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/01c303e294d969589114cce605e53901/manifest/video.m3u8",
    description: "Un teaser cinematic pentru Australian Open, construit ca un duel mitologic între cei mai dominanți doi jucători ai momentului: Jannik Sinner și Carlos Alcaraz. Italia devine Gladiatorul. Spania devine Matadorul. Întrebarea finală rămâne deschisă: cine va câștiga?",
  },
  {
    id: 3,
    title: "DERBY-UL RĂZBOINICILOR",
    category: "Sports Promo",
    tags: ["Epic Battle", "Team Branding", "Visual FX"],
    imagePlaceholder: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/23fedd2a2625c8ab43f015caa47d61e0/thumbnails/thumbnail.jpg?time=8s&height=600",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/23fedd2a2625c8ab43f015caa47d61e0/manifest/video.m3u8",
    description: "FCSB vs Fenerbahçe re-imaginat ca o bătălie epică. Terenul devine câmp de luptă. O metaforă vizuală puternică pentru intensitatea competiției la nivel înalt.",
  },
  {
    id: 4,
    title: "ANIDA BEAUTY CARE — AI COMMERCIAL",
    category: "Beauty Commercial",
    tags: ["AI Model", "Hyper-Realistic", "Product Focus"],
    imagePlaceholder: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/33c7c2b8763dd03f9a1f5148c63e1b3a/thumbnails/thumbnail.jpg?time=4s&height=600",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/33c7c2b8763dd03f9a1f5148c63e1b3a/manifest/video.m3u8",
    description: "Spot publicitar pentru salonul Anida Beauty Care. Protagonista este un model 100% generat de AI, demonstrând aplicarea produsului cu un nivel de realism care sfidează distincția dintre virtual și real.",
  },
  {
    id: 5,
    title: "CASINO PROMO",
    category: "Casino Affiliate",
    tags: ["Cinematic Promo", "Casino Affiliate", "Performance Marketing"],
    imagePlaceholder: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/132d4a109dad92a4fc8c251cd5768a54/thumbnails/thumbnail.jpg?time=0s&height=600",
    videoUrl: "https://customer-b1qiu5sh2cpso0d8.cloudflarestream.com/132d4a109dad92a4fc8c251cd5768a54/manifest/video.m3u8",
    description: "Clip promoțional realizat pentru Cazinoz, ca parte a unei campanii de afiliere ce promovează o ofertă de casino online Napoleon Games. O execuție cinematică orientată spre impact rapid și claritate vizuală.",
  },
  {
    id: 6,
    title: "FREE SPINS CAMPAIGN",
    category: "Casino Marketing",
    tags: ["Player Acquisition", "Promo Offer", "Visual FX", "Casino Marketing"],
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
          imagePlaceholder={selectedProject.imagePlaceholder}
        />
      )}
    </section>
  )
}
