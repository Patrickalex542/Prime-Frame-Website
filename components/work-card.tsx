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
        "group relative overflow-hidden cursor-pointer transition-all duration-500 border-border bg-card",
        "hover:scale-105 hover:shadow-2xl hover:shadow-primary/20",
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
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <div className="text-6xl mb-2">▶</div>
            <div className="text-sm">{imagePlaceholder}</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
