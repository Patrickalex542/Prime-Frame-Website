"use client"

import { useState, useEffect } from "react"

interface WorkModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  category: string
  tags: string[]
  description: string
  videoUrl?: string
  imagePlaceholder?: string
}

export function WorkModal({ isOpen, onClose, title, category, tags, description, videoUrl, imagePlaceholder }: WorkModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setIsPlaying(false) // Reset play state when opening
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
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&autoplay=1`
    }
    if (url.includes("cloudflarestream.com") || url.includes("videodelivery.net")) {
      if (url.includes("/iframe")) return url + "?autoplay=true"
      
      const match = url.match(/([a-f0-9]{32})/)
      const videoId = match ? match[1] : null

      if (videoId) {
         return `https://iframe.videodelivery.net/${videoId}?preload=true&autoplay=true`
      }
      return url
    }
    return url
  }

  const isEmbed = 
    videoUrl && (
      videoUrl.includes("youtube.com") || 
      videoUrl.includes("drive.google.com") || 
      videoUrl.includes("cloudflarestream.com")
    )
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : ""

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-lg overflow-hidden animate-in zoom-in-95 duration-300 shadow-2xl">
        {/* Animated Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300 hover:rotate-90 group"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="absolute inset-0 rounded-full animate-pulse ring-1 ring-white/20 group-hover:ring-amber-500/50"></span>
        </button>

        <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
          {videoUrl ? (
            isPlaying ? (
              isEmbed ? (
                <iframe
                  src={embedUrl}
                  title={title}
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
              // Cover State with Custom Play Button
              <div 
                className="absolute inset-0 cursor-pointer group" 
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail */}
                {imagePlaceholder && (imagePlaceholder.startsWith("/") || imagePlaceholder.startsWith("http")) ? (
                  <img 
                    src={imagePlaceholder} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <span className="text-muted-foreground">No Preview</span>
                  </div>
                )}
                
                {/* Black Glass Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl group-hover:bg-black/60 group-hover:border-amber-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 shadow-sm"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
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
