"use client"

import { useRef, useEffect, useState } from "react"
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
  const nebulaRef = useRef<THREE.Group | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)

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
    nebulaRef.current = nebulaGroup

    // Create nebula particles
    const particlesCount = 1500
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 2 + Math.random() * 2

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const color = new THREE.Color()
      const rand = Math.random()
      if (rand > 0.6) {
        color.setHSL(0.1, 0.4, 0.3) // Gold/Amber
      } else {
        color.setHSL(0.0, 0.0, 0.1) // Deep Dark
      }
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    nebulaGroup.add(particles)
    particlesRef.current = particles

    // Add rings
    const createRing = (radius: number, rotation: number) => {
      const ringGeometry = new THREE.TorusGeometry(radius, 0.005, 16, 100)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xc9a26a, // Brand Gold
        transparent: true,
        opacity: 0.2,
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = rotation
      nebulaGroup.add(ring)
    }

    createRing(2.5, Math.PI / 2.5)
    createRing(2.8, Math.PI / 1.8)

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)
      nebulaGroup.rotation.y += 0.001
      nebulaGroup.rotation.x += 0.0005
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
        <div className="hero-content-top my-12 -mt-[15px] text-justify">
          <div className="badge">NEXT GEN MARKETING</div>
          <h1 className="hero-title text-center leading-tight tracking-tighter sm:tracking-normal">{title}</h1>
          <p className="hero-subtitle text-center">{subtitle}</p>
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
