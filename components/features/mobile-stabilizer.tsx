"use client"

import { useEffect } from "react"

export function MobileStabilizer() {
  useEffect(() => {
    // 1. Prevent Pinch-to-Zoom
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        // More than 1 finger (pinch) -> Block it
        e.preventDefault()
      }
    }

    // 2. Prevent Double-Tap to Zoom (Polyfill for rare browsers ignoring touch-action)
    let lastTouchEnd = 0
    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }

    // Add listeners with passive: false to allow preventDefault
    document.addEventListener("touchstart", handleTouchStart, { passive: false })
    document.addEventListener("touchend", handleTouchEnd, { passive: false })

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return null
}
