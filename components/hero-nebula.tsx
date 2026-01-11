"use client"
// Deployment Sync: 2026-01-11-v2

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
  const cleanedUpRef = useRef(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    cleanedUpRef.current = false

    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
    const PARTICLE_COUNT = isMobile ? 6000 : isTablet ? 15000 : 26000
    const SPHERE_RADIUS = isMobile ? 2.1 : 3.0

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.04)

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: isMobile ? "low-power" : "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)

    rendererRef.current = renderer
    mount.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 0, isMobile ? 12 : 10)

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

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const basePositions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)

    const colorA = new THREE.Color("#c9a26a")
    const colorB = new THREE.Color("#d4af7a")
    const colorC = new THREE.Color("#f5d799")
    const tmpColor = new THREE.Color()

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = 2 * Math.PI * u
      const phi = Math.acos(2 * v - 1)

      const r = SPHERE_RADIUS
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      const idx = i * 3
      positions[idx] = x
      positions[idx + 1] = y
      positions[idx + 2] = z

      basePositions[idx] = x
      basePositions[idx + 1] = y
      basePositions[idx + 2] = z

      const rand = Math.random()
      if (rand < 0.6) {
        tmpColor.copy(colorA)
      } else if (rand < 0.85) {
        tmpColor.copy(colorB)
      } else {
        tmpColor.copy(colorC)
      }

      colors[idx] = tmpColor.r
      colors[idx + 1] = tmpColor.g
      colors[idx + 2] = tmpColor.b
    }

    const geom = new THREE.BufferGeometry()
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: isMobile ? 0.04 : 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geom, mat)
    group.add(particles)

    const ringRadius = SPHERE_RADIUS + (isMobile ? 0.5 : 0.5)
    const ringGeom = new THREE.TorusGeometry(ringRadius, 0.025, 12, 240)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xd4af7a,
      metalness: 1.0,
      roughness: 0.2,
      emissive: 0xd4af7a,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.4,
    })
    const ring = new THREE.Mesh(ringGeom, ringMat)
    ring.rotation.x = Math.PI / 2.2
    group.add(ring)

    const mouse = new THREE.Vector2(0, 0)

    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }
    const dragRotationVelocity = { x: 0, y: 0 }
    const manualRotation = { x: 0, y: 0 }

    function onPointerMove(e: PointerEvent) {
      if (!rendererRef.current) return
      const rect = rendererRef.current.domElement.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      mouse.set(x, y)

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x
        const deltaY = e.clientY - previousMousePosition.y

        dragRotationVelocity.x = deltaY * 0.01
        dragRotationVelocity.y = deltaX * 0.01

        manualRotation.x += dragRotationVelocity.x
        manualRotation.y += dragRotationVelocity.y

        previousMousePosition = { x: e.clientX, y: e.clientY }
      }
    }

    function onPointerDown(e: PointerEvent) {
      if (!rendererRef.current) return
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
      rendererRef.current.domElement.style.cursor = "grabbing"
    }

    function onPointerUp() {
      if (!rendererRef.current) return
      isDragging = false
      rendererRef.current.domElement.style.cursor = "grab"
    }

    if (renderer.domElement) {
      renderer.domElement.style.cursor = "grab"
      renderer.domElement.addEventListener("pointermove", onPointerMove)
      renderer.domElement.addEventListener("pointerdown", onPointerDown)
      renderer.domElement.addEventListener("pointerup", onPointerUp)
      renderer.domElement.addEventListener("pointerleave", onPointerUp)
    }

    function computeScrollTarget() {
      const scrollY = window.scrollY
      const progress = scrollY / 800
      const clampedProgress = Math.max(0, Math.min(1, progress))

      // Vertical movement synchronized with scroll
      ;(group as any).scrollOffset = clampedProgress * 3
    }

    computeScrollTarget()
    
    function onResize() {
      if (!mount || !rendererRef.current) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2))
    }
    
    // Throttled scroll handler
    let scrollTimeout: number | null = null
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = window.requestAnimationFrame(() => {
          computeScrollTarget()
          scrollTimeout = null
        })
      }
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", throttledScroll, { passive: true })

    const clock = new THREE.Clock()

    function animate() {
      if (cleanedUpRef.current || !rendererRef.current) return

      const t = clock.getElapsedTime()

      const camTargetX = mouse.x * 0.5
      const camTargetY = mouse.y * 0.3
      camera.position.x += (camTargetX - camera.position.x) * 0.06
      camera.position.y += (camTargetY - camera.position.y) * 0.06
      camera.lookAt(0, 0, 0)

      group.rotation.y = t * 0.25 + manualRotation.y
      group.rotation.x = manualRotation.x

      if (!isDragging) {
        dragRotationVelocity.x *= 0.95
        dragRotationVelocity.y *= 0.95
        manualRotation.x += dragRotationVelocity.x
        manualRotation.y += dragRotationVelocity.y
      }

      const targetY = -((group as any).scrollOffset || 0)
      group.position.y += (targetY - group.position.y) * 0.08

      ring.rotation.z = t * 0.8

      const posAttr = geom.getAttribute("position") as THREE.BufferAttribute
      const pos = posAttr.array as Float32Array

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const idx = i * 3

        const bx = basePositions[idx]
        const by = basePositions[idx + 1]
        const bz = basePositions[idx + 2]

        pos[idx] = bx
        pos[idx + 1] = by
        pos[idx + 2] = bz
      }

      posAttr.needsUpdate = true

      rendererRef.current.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cleanedUpRef.current = true

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }

      window.removeEventListener("scroll", throttledScroll)
      window.removeEventListener("resize", onResize)
      if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout)

      if (renderer.domElement) {
        renderer.domElement.removeEventListener("pointermove", onPointerMove)
        renderer.domElement.removeEventListener("pointerdown", onPointerDown)
        renderer.domElement.removeEventListener("pointerup", onPointerUp)
        renderer.domElement.removeEventListener("pointerleave", onPointerUp)
      }

      geom.dispose()
      mat.dispose()
      ringGeom.dispose()
      ringMat.dispose()

      if (mount && renderer.domElement && renderer.domElement.parentNode === mount) {
        try {
          mount.removeChild(renderer.domElement)
        } catch (e) {
          // Silently fail if already removed
        }
      }

      renderer.dispose()
      rendererRef.current = null
    }
  }, [])

  return (
    <section className="hero-nebula">
      <div className="hero-canvas" ref={mountRef} aria-hidden="true" />

      <div className="hero-overlay">
        <div className="hero-content-top mt-20 mb-12 text-center">
          <div className="badge">NEXT GEN MARKETING</div>
          <h1 className="hero-title text-center">{title}</h1>
          <p className="hero-subtitle text-center">{subtitle}</p>
        </div>

        <div className="hero-content-bottom">
          <div className="hero-actions flex flex-col items-center md:flex-row md:justify-center py-0 text-lg px-8 py-3 gap-6 md:gap-12">
            <AIButton href={ctaPrimary.href} label={ctaPrimary.label} />
            <AIButton href={ctaSecondary.href} label={ctaSecondary.label} className="secondary-ai-btn" />
          </div>
          <div className="scroll-arrow-container">
            <svg
              className="scroll-arrow"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
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
