"use client"

import { useEffect } from "react"

interface WorkModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  category: string
  tags: string[]
  description: string
  videoUrl?: string
}

export function WorkModal({ isOpen, onClose, title, category, tags, description, videoUrl }: WorkModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/shorts/")) {
      const videoId = url.split("/shorts/")[1].split("?")[0]
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1`
    }
    if (url.includes("drive.google.com")) {
      // The button is part of their player and cannot be removed
      return url
    }
    return url
  }

  const isEmbed = videoUrl && (videoUrl.includes("youtube.com") || videoUrl.includes("drive.google.com"))
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : ""

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-lg overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="aspect-video bg-muted relative flex items-center justify-center">
          {videoUrl ? (
            isEmbed ? (
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={videoUrl} controls className="w-full h-full object-contain" autoPlay playsInline>
                Browser-ul tău nu suportă video playback.
              </video>
            )
          ) : (
            <div className="text-center text-muted-foreground">
              <div className="text-5xl sm:text-8xl mb-2 sm:mb-4">▶</div>
              <div className="text-sm sm:text-lg">Adaugă URL video în work-section.tsx</div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-8">
          <div className="text-xs sm:text-sm text-primary mb-2 font-medium">{category}</div>
          <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">{title}</h2>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-lg leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-secondary text-secondary-foreground text-xs sm:text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
