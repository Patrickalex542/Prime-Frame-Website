"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface WorkCardProps {
  title: string
  category: string
  tags: string[]
  imagePlaceholder: string
  onClick: () => void
}

export function WorkCard({ title, category, tags, imagePlaceholder, onClick }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "group relative overflow-hidden cursor-pointer transition-all duration-500",
        // Mobile-first "Premium Glass" styles
        "border border-white/20 bg-gradient-to-br from-white/10 to-black/60 backdrop-blur-xl shadow-lg",
        // Desktop hover effects
        "hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30",
        // Rest of layout
      )}
      style={{
        transform: isHovered
          ? "perspective(1000px) rotateX(2deg) rotateY(-2deg)"
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        {imagePlaceholder.startsWith("/") || imagePlaceholder.startsWith("http") ? (
           <img 
             src={imagePlaceholder} 
             alt={title} 
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
           />
        ) : (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <div className="text-6xl mb-2">▶</div>
            <div className="text-sm">{imagePlaceholder}</div>
          </div>
        </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-90 transition-all duration-300 group-hover:scale-110">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-black/60 group-hover:border-amber-500/30 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1 shadow-sm"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-primary mb-2 font-medium">{category}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
