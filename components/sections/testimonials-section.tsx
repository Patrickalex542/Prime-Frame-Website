"use client"

import { Star, Quote } from "lucide-react"
import { useRef, useEffect } from "react"

export function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: "Andrei Popescu",
      role: "Marketing Manager, TechFlow",
      content: "Colaborarea cu Prime Frame a fost o revelație. Video-urile AI generate au o calitate cinematică pe care nu am mai întâlnit-o. Au reușit să surprindă esența brandului nostru într-un mod vizual specticulos.",
      rating: 5,
    },
    {
      id: 2,
      name: "Elena Radu",
      role: "Founder, Luxe Decor",
      content: "Viteză și profesionalism! Am avut nevoie de o campanie de vizualuri statice într-un timp record, iar echipa a livrat materiale de o claritate și creativitate excepțională. Recomand cu încredere!",
      rating: 5,
    },
    {
      id: 3,
      name: "Mihai Stănescu",
      role: "CEO, CryptoVerse",
      content: "Conținutul video creat de Prime Frame a dublat engagement-ul pe canalele noastre de social media. Abordarea lor futuristă și atenția la detalii au făcut ca brandul nostru să iasă cu adevărat în evidență.",
      rating: 5,
    },
    {
      id: 4,
      name: "Diana Ionescu",
      role: "Brand Director, FashionForward",
      content: "Un partener de încredere pentru orice brand care vrea să inoveze. Imaginile generate sunt hipnotizante și extrem de premium. Exact ce aveam nevoie pentru lansarea noii colecții.",
      rating: 5,
    },
  ]

  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation()
    }

    function addAnimation() {
      if (scrollerRef.current) {
        scrollerRef.current.setAttribute("data-animated", "true")
      }
    }
  }, [])

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 bg-black/40 backdrop-blur-sm py-8 px-6 rounded-3xl border border-white/5 mx-auto max-w-4xl shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            CE SPUN <span className="text-primary">CLIENȚII</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partenerii noștri care au ales inovația și calitatea cinematică.
          </p>
        </div>

        <div 
          ref={scrollerRef}
          className="scroller relative max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          <div className="flex gap-6 py-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[350px] md:w-[450px] max-w-full flex-shrink-0 relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8 md:p-10 transition-all hover:border-primary/50 group"
              >
                <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <Quote size={40} />
                </div>

                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg text-foreground/90 mb-8 leading-relaxed relative z-10">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl font-bold text-primary border border-primary/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scroller[data-animated="true"] .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1.5rem));
          }
        }
      `}</style>
    </section>
  )
}
