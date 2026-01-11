"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 2,
      })
    }

    const animate = () => {
      time += 0.01

      ctx.fillStyle = "rgba(20, 20, 20, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        if (particle.z < 0 || particle.z > 1000) particle.vz *= -1

        const scale = 1000 / (1000 + particle.z)
        const x = particle.x * scale + (canvas.width / 2) * (1 - scale)
        const y = particle.y * scale + (canvas.height / 2) * (1 - scale)
        const size = 2 * scale

        const hue = 190
        const lightness = 50 + Math.sin(time + i * 0.1) * 20
        ctx.fillStyle = `hsl(${hue}, 80%, ${lightness}%)`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()

        particles.forEach((otherParticle, j) => {
          if (i >= j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const dz = particle.z - otherParticle.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 150) {
            const otherScale = 1000 / (1000 + otherParticle.z)
            const otherX = otherParticle.x * otherScale + (canvas.width / 2) * (1 - otherScale)
            const otherY = otherParticle.y * otherScale + (canvas.height / 2) * (1 - otherScale)

            ctx.strokeStyle = `hsla(190, 80%, 60%, ${0.3 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(otherX, otherY)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "rgb(20, 20, 20)" }} />
}
