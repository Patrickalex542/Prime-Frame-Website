"use client"
// Deployment Sync: 2026-01-11-v3

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { AIButton } from "@/components/features/ai-button"

interface HeroNebulaProps {
  title?: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export default function HeroNebula({
  title = "CINEMATIC AI-ENHANCED CONTENT",
  subtitle = "Studio de creație AI care produce conținut cinematic – video și static – customizat pentru identitatea brandului tău.",
  ctaPrimary = { label: "Portofoliu", href: "#work" },
  ctaSecondary = { label: "CONTACTEAZA-NE", href: "#contact" },
}: HeroNebulaProps) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cleanedUpRef = useRef(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    cleanedUpRef.current = false

    // Dynamic viewport calculations
    const getViewportParams = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const aspect = width / height
      const isMobile = width < 768
      const isLandscapeMobile = width > height && height < 500
      
      // Calculate dynamic sphere radius based on viewport size
      // Use a base of min dimension * percentage
      const minDim = Math.min(width, height)
      let radiusBase = minDim * 0.0025 // Dynamic scaling factor
      
      // Clamp values to sane defaults
      if (isMobile) {
        radiusBase = Math.max(1.5, Math.min(2.1, width * 0.005)) // Adjusted for optimal mobile fit
      } else {
        radiusBase = Math.max(2.5, Math.min(3.5, width * 0.002))
      }
      
      if (isLandscapeMobile) radiusBase = 1.8

      return {
        isMobile,
        isLandscapeMobile,
        particleCount: isMobile ? 8000 : 20000,
        sphereRadius: radiusBase,
        cameraZ: isLandscapeMobile ? 12 : isMobile ? 12 : 9 // Optimized mobile camera distance
      }
    }

    let params = getViewportParams()

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.04)

    const renderer = new THREE.WebGLRenderer({
      antialias: !params.isMobile,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)

    rendererRef.current = renderer
    mount.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 0, params.cameraZ)

    const ambient = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambient)

    const key = new THREE.DirectionalLight(0xd4af7a, 1.2)
    key.position.set(3, 2, 4)
    scene.add(key)

    const fill = new THREE.DirectionalLight(0xc9a26a, 0.5)
    fill.position.set(-3, -1, 2)
    scene.add(fill)

    const rim = new THREE.PointLight(0xf5d799, 0.8, 50)
    rim.position.set(0, 5, -5)
    scene.add(rim)

    const group = new THREE.Group()
    scene.add(group)

    // Initial Geometry Creation
    let geometry: THREE.BufferGeometry
    let material: THREE.PointsMaterial
    let particles: THREE.Points
    let ring: THREE.Mesh

    function createObjects() {
      // Clean up old objects if they exist
      if (particles) {
        group.remove(particles)
        geometry.dispose()
        material.dispose()
      }
      if (ring) {
        group.remove(ring)
        // types for ring geometry/material disposal handled in cleanup
      }

      params = getViewportParams()
      
      const positions = new Float32Array(params.particleCount * 3)
      const colors = new Float32Array(params.particleCount * 3)
      const colorA = new THREE.Color("#c9a26a")
      const colorB = new THREE.Color("#d4af7a")
      const colorC = new THREE.Color("#f5d799")
      const tmpColor = new THREE.Color()

      for (let i = 0; i < params.particleCount; i++) {
        const u = Math.random()
        const v = Math.random()
        const theta = 2 * Math.PI * u
        const phi = Math.acos(2 * v - 1)
        const r = params.sphereRadius
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = r * Math.cos(phi)

        const rand = Math.random()
        if (rand < 0.6) tmpColor.copy(colorA)
        else if (rand < 0.85) tmpColor.copy(colorB)
        else tmpColor.copy(colorC)

        colors[i * 3] = tmpColor.r
        colors[i * 3 + 1] = tmpColor.g
        colors[i * 3 + 2] = tmpColor.b
      }

      geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
      // Store base positions for animation reference
      geometry.userData = { basePositions: positions.slice() }

      material = new THREE.PointsMaterial({
        size: params.isMobile ? 0.035 : 0.025,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(geometry, material)
      group.add(particles)

      // Ring
      const ringGeom = new THREE.TorusGeometry(params.sphereRadius + 0.5, 0.02, 12, 100)
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xd4af7a,
        metalness: 1.0,
        roughness: 0.2,
        emissive: 0xd4af7a,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.3,
      })
      ring = new THREE.Mesh(ringGeom, ringMat)
      ring.rotation.x = Math.PI / 2.2
      group.add(ring)
    }

    createObjects()

    const mouse = new THREE.Vector2(0, 0)
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }
    const dragRotationVelocity = { x: 0, y: 0 }
    const manualRotation = { x: 0, y: 0 }

    function onPointerMove(e: PointerEvent) {
      if (!rendererRef.current) return
      const rect = rendererRef.current.domElement.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x
        const deltaY = e.clientY - previousMousePosition.y
        dragRotationVelocity.x = deltaY * 0.005
        dragRotationVelocity.y = deltaX * 0.005
        manualRotation.x += dragRotationVelocity.x
        manualRotation.y += dragRotationVelocity.y
        previousMousePosition = { x: e.clientX, y: e.clientY }
      }
    }

    function onPointerDown(e: PointerEvent) {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
      if (rendererRef.current) rendererRef.current.domElement.style.cursor = "grabbing"
    }

    function onPointerUp() {
      isDragging = false
      if (rendererRef.current) rendererRef.current.domElement.style.cursor = "grab"
    }

    if (renderer.domElement) {
      renderer.domElement.style.cursor = "grab"
      renderer.domElement.addEventListener("pointermove", onPointerMove)
      renderer.domElement.addEventListener("pointerdown", onPointerDown)
      renderer.domElement.addEventListener("pointerup", onPointerUp)
      renderer.domElement.addEventListener("pointerleave", onPointerUp)
    }

    // Scroll sync logic
    function computeScrollTarget() {
      // Smoother scroll transition relative to viewport height
      const progress = window.scrollY / window.innerHeight
      const clamped = Math.max(0, Math.min(1, progress))
      // Move slightly less to keep visible longer
      ;(group as any).scrollOffset = clamped * 2.5
    }

    let resizeTimeout: NodeJS.Timeout
    function onResize() {
      if (!mount || !rendererRef.current) return
      
      // Debounce resize object recreation
      clearTimeout(resizeTimeout)
      
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
      
      // Recreate objects on significant resize to adjust radius
      resizeTimeout = setTimeout(() => {
         createObjects()
         // Update camera Z based on new params
         camera.position.z = params.cameraZ
      }, 200)
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", computeScrollTarget, { passive: true })

    const clock = new THREE.Clock()

    function animate() {
      if (cleanedUpRef.current || !rendererRef.current) return

      const t = clock.getElapsedTime()

      // Smooth camera follow
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      // Rotation physics
      group.rotation.y = t * 0.2 + manualRotation.y // Increased speed from 0.1 to 0.2
      group.rotation.x = manualRotation.x
      
      if (!isDragging) {
        dragRotationVelocity.x *= 0.95
        dragRotationVelocity.y *= 0.95
        manualRotation.x += dragRotationVelocity.x
        manualRotation.y += dragRotationVelocity.y
      }

      // Responsive positioning
      // Move sphere up/down based on scroll AND screen aspect ratio
      // On small screens, push it slightly lower to center in available space
      const baseY = params.isLandscapeMobile ? 0.5 : 0 
      const scrollYOffset = -((group as any).scrollOffset || 0)
      
      const targetY = baseY + scrollYOffset
      group.position.y += (targetY - group.position.y) * 0.1

      if (ring) ring.rotation.z = t * 0.2

      rendererRef.current.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cleanedUpRef.current = true
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("scroll", computeScrollTarget)
      window.removeEventListener("resize", onResize)
      
      if (renderer.domElement) {
        renderer.domElement.removeEventListener("pointermove", onPointerMove)
        renderer.domElement.removeEventListener("pointerdown", onPointerDown)
        renderer.domElement.removeEventListener("pointerup", onPointerUp)
        renderer.domElement.removeEventListener("pointerleave", onPointerUp)
      }

      if (geometry) geometry.dispose()
      if (material) material.dispose()
      
      renderer.dispose()
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section className="hero-nebula relative w-full h-[100dvh] overflow-hidden bg-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-10" ref={mountRef} aria-hidden="true" />

      <div 
        className="hero-overlay relative z-20 h-full flex flex-col justify-between items-center w-full px-5 py-[4vh] md:pt-[80px] md:pb-[40px]"
      >
        <div className="hero-content-top flex flex-col items-center px-4 md:px-6 lg:px-12 w-full max-w-7xl mx-auto mt-[5vh] mb-[2vh] md:mt-[40px] md:mb-[50px]">
          <div className="badge self-start -mt-[8px] text-[10px] sm:text-[11px] px-[10px] py-[5px] sm:px-[12px] sm:py-[6px] opacity-70">NEXT GEN MARKETING</div>
          <h1 className="hero-title text-center uppercase tracking-[-0.02em] font-bold mt-[10px] text-[clamp(1.2rem,4.5vw,5rem)] md:text-[clamp(2.5rem,5.5vw,6rem)] lg:text-[clamp(3rem,6vw,7.5rem)] px-2 md:px-0 leading-[1.1] w-full max-w-[100vw] overflow-hidden whitespace-nowrap">
            CINEMATIC AI-ENHANCED<br />CONTENT
          </h1>
          <p className="hero-subtitle flex justify-center text-center mt-[10px] max-w-[62ch] opacity-70 text-[clamp(0.875rem,2vw,1.125rem)] md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="hero-content-bottom w-full relative z-30">
          <div className="hero-actions flex flex-row flex-wrap justify-center lg:justify-between items-center w-full max-w-7xl mx-auto px-4 lg:px-20 gap-2 sm:gap-4 -mt-[20px] md:-mt-[15px] pb-[15px] md:pb-0">
            <AIButton href={ctaPrimary.href} label={ctaPrimary.label} className="flex-1 lg:flex-none min-w-[140px] sm:min-w-[180px] py-4 sm:py-5 text-sm sm:text-lg" />
            <AIButton href={ctaSecondary.href} label={ctaSecondary.label} className="secondary-ai-btn flex-1 lg:flex-none min-w-[140px] sm:min-w-[180px] py-4 sm:py-5 text-sm sm:text-lg" />
          </div>
          <div className="scroll-arrow-container flex justify-center items-center mt-8 mb-5 sm:mt-12">
            <svg
              className="scroll-arrow cursor-pointer animate-bounce w-8 h-8 sm:w-10 sm:h-10 text-primary opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            >
              <path
                d="M7 13L12 18L17 13M7 6L12 11L17 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
