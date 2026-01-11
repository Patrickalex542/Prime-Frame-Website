"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { AIButton } from "./ai-button"

interface HeroNebulaProps {
  title?: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export default function HeroNebula({
  title = "Reclame AI de Impact.",
  subtitle = "Portofoliu de creativități generate cu AI pentru branduri competitive.",
  ctaPrimary = { label: "Vezi Portofoliul", href: "#work" },
  ctaSecondary = { label: "Rezervă o Discuție", href: "#contact" },
}: HeroNebulaProps) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const nebulaGroup = new THREE.Group()
    scene.add(nebulaGroup)

    // Create a circular texture for glowing particles
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas")
      canvas.width = 64
      canvas.height = 64
      const context = canvas.getContext("2d")
      if (!context) return null

      const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(0.2, "rgba(255, 215, 122, 0.8)")
      gradient.addColorStop(0.5, "rgba(201, 162, 106, 0.3)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      context.fillStyle = gradient
      context.fillRect(0, 0, 64, 64)

      const texture = new THREE.CanvasTexture(canvas)
      return texture
    }

    const particleTexture = createCircleTexture()

    // 1. DENSE CORE (The actual "Sphere")
    const coreParticlesCount = 6000
    const corePositions = new Float32Array(coreParticlesCount * 3)
    const coreColors = new Float32Array(coreParticlesCount * 3)
    const coreSizes = new Float32Array(coreParticlesCount)

    for (let i = 0; i < coreParticlesCount; i++) {
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      // Dense center distribution
      const r = Math.pow(Math.random(), 2.5) * 2.2

      corePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      corePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      corePositions[i * 3 + 2] = r * Math.cos(phi)

      const color = new THREE.Color()
      const rand = Math.random()
      if (rand > 0.4) {
        color.setHSL(0.1, 0.6, 0.5) // Vibrant Gold
      } else {
        color.setHSL(0.08, 0.3, 0.2) // Deep Bronze
      }
      coreColors[i * 3] = color.r
      coreColors[i * 3 + 1] = color.g
      coreColors[i * 3 + 2] = color.b
      
      coreSizes[i] = (Math.random() * 0.1 + 0.02)
    }

    const coreGeometry = new THREE.BufferGeometry()
    coreGeometry.setAttribute("position", new THREE.BufferAttribute(corePositions, 3))
    coreGeometry.setAttribute("color", new THREE.BufferAttribute(coreColors, 3))
    coreGeometry.setAttribute("size", new THREE.BufferAttribute(coreSizes, 1))

    const coreMaterial = new THREE.PointsMaterial({
      size: 0.035,
      map: particleTexture,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const corePoints = new THREE.Points(coreGeometry, coreMaterial)
    nebulaGroup.add(corePoints)

    // 2. AMBIENT BACKGROUND STARS
    const bgStarsCount = 2000
    const bgPositions = new Float32Array(bgStarsCount * 3)
    for (let i = 0; i < bgStarsCount; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)
        const r = 10 + Math.random() * 30
        bgPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        bgPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        bgPositions[i * 3 + 2] = r * Math.cos(phi)
    }
    const bgGeometry = new THREE.BufferGeometry()
    bgGeometry.setAttribute("position", new THREE.BufferAttribute(bgPositions, 3))
    const bgMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
    })
    const bgStars = new THREE.Points(bgGeometry, bgMaterial)
    scene.add(bgStars)

    // 3. GLOWING RINGS
    const createGlowRing = (radius: number, rotation: number, color: number, opacity: number) => {
      const ringGeometry = new THREE.TorusGeometry(radius, 0.015, 16, 200)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        blending: THREE.AdditiveBlending,
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = rotation
      nebulaGroup.add(ring)
      return ring
    }

    const ring1 = createGlowRing(2.8, Math.PI / 2.5, 0xc9a26a, 0.3)
    const ring2 = createGlowRing(3.2, Math.PI / 1.8, 0xd4af7a, 0.15)

    // Add a pulsing central point light
    const pointLight = new THREE.PointLight(0xc9a26a, 2, 10)
    scene.add(pointLight)

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)
      
      const time = Date.now() * 0.001
      
      nebulaGroup.rotation.y = time * 0.1
      nebulaGroup.rotation.x = time * 0.05
      
      // Pulse effects
      coreMaterial.opacity = 0.8 + Math.sin(time * 2) * 0.1
      pointLight.intensity = 2 + Math.sin(time * 3) * 0.5
      
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <section className="hero-nebula">
      <div className="hero-canvas" ref={mountRef} aria-hidden="true" />

      <div className="hero-overlay">
        <div className="hero-content-top my-12 -mt-[15px] max-w-4xl mx-auto flex flex-col items-center">
          <div className="badge animate-fade-in">NEXT GEN MARKETING</div>
          <h1 className="hero-title text-center leading-tight tracking-tighter mt-6 mb-4">{title}</h1>
          <p className="hero-subtitle text-center max-w-2xl px-4">{subtitle}</p>
        </div>

        <div className="hero-content-bottom">
          <div className="hero-actions flex flex-col items-center md:flex-row md:justify-center py-0 text-lg px-8 py-3 gap-6 md:gap-12">
            <AIButton href={ctaPrimary.href} label={ctaPrimary.label} />
            <AIButton href={ctaSecondary.href} label={ctaSecondary.label} className="secondary-ai-btn" />
          </div>

          <div className="scroll-arrow-container">
            <svg
              className="scroll-arrow w-8 h-8 cursor-pointer"
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
