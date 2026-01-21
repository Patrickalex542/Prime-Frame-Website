"use client"

import { useRef, useEffect } from "react"
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

    // Stabilize mobile dimensions to prevent jumpy address bar resizes
    const initialHeight = window.innerHeight
    const initialWidth = window.innerWidth

    const getViewportParams = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      const isMobile = width < 768
      const isLandscapeMobile = width > height && height < 500
      
      // Use initial height in portrait mobile to keep sphere radius constant
      const stableHeight = (isMobile && !isLandscapeMobile) ? initialHeight : height
      const minDim = Math.min(width, stableHeight)
      
      let radiusBase = minDim * 0.0025 
      
      if (isMobile) {
        radiusBase = Math.max(1.5, Math.min(2.1, width * 0.005))
      } else {
        radiusBase = Math.max(2.5, Math.min(3.5, width * 0.002))
      }
      
      if (isLandscapeMobile) radiusBase = 1.8

      return {
        isMobile,
        isLandscapeMobile,
        particleCount: isMobile ? 8000 : 20000,
        sphereRadius: radiusBase,
        cameraZ: isLandscapeMobile ? 12 : isMobile ? 12 : 9 
      }
    }

    let params = getViewportParams()

    const scene = new THREE.Scene()
    // scene.background = new THREE.Color(0x000000) // Ensure black background if needed, or keep transparent
    scene.fog = new THREE.FogExp2(0x000000, 0.04)

    const renderer = new THREE.WebGLRenderer({
      antialias: !params.isMobile,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    // renderer.setClearColor(0x000000, 1) // Force opaque black for Hero if that was the original state, or 0 for transparent

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

    let geometry: THREE.BufferGeometry
    let material: THREE.PointsMaterial
    let particles: THREE.Points
    let ring: THREE.Mesh

    function createObjects() {
      if (particles) {
        group.remove(particles)
        geometry.dispose()
        material.dispose()
      }
      if (ring) {
        group.remove(ring)
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
      // Track on window
      const w = window.innerWidth
      const h = window.innerHeight
      mouse.x = (e.clientX / w) * 2 - 1
      mouse.y = -(e.clientY / h) * 2 + 1

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
      // Disable interaction on mobile to prevent interference with connection/scrolling
      if (window.innerWidth < 768) return
      
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
      if (document.body) document.body.style.cursor = "grabbing"
    }

    function onPointerUp() {
      isDragging = false
      if (document.body) document.body.style.cursor = "default"
    }

    // Global listeners
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointerup", onPointerUp)

    let lastWidth = window.innerWidth
    let resizeTimeout: NodeJS.Timeout

    function onResize() {
      if (!mount || !rendererRef.current) return
      
      const w = window.innerWidth
      const h = window.innerHeight
      
      // On mobile, ignore resize if only height changes (address bar jitter)
      const isMobile = w < 768
      if (isMobile && w === lastWidth) {
        // We still update camera aspect but avoid heavy re-render logic
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        // No renderer.setSize(w, h) here to prevent the "lag/jump" 
        // because the section container is 100dvh and fluctuates
        return
      }

      lastWidth = w
      
      clearTimeout(resizeTimeout)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
      
      resizeTimeout = setTimeout(() => {
         if (cleanedUpRef.current) return
         params = getViewportParams() // Re-calculate params on orientation/desktop resize
         createObjects()
         camera.position.z = params.cameraZ
      }, 250)
    }

    window.addEventListener("resize", onResize)

    // Scroll sync logic
    function computeScrollTarget() {
      // Subtle vertical movement based on scroll
      const progress = window.scrollY / window.innerHeight
      const clamped = Math.max(0, Math.min(1, progress))
      ;(group as any).scrollOffset = clamped * 2.0
    }

    const clock = new THREE.Clock()

    function animate() {
      if (cleanedUpRef.current || !rendererRef.current) return

      const t = clock.getElapsedTime()

      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      group.rotation.y = t * 0.2 + manualRotation.y
      group.rotation.x = manualRotation.x
      
      if (!isDragging) {
        dragRotationVelocity.x *= 0.95
        dragRotationVelocity.y *= 0.95
        manualRotation.x += dragRotationVelocity.x
        manualRotation.y += dragRotationVelocity.y
      }

      // Restore subtle parallax movement
      const baseY = params.isLandscapeMobile ? 0.5 : 0 
      const scrollYOffset = -((group as any).scrollOffset || 0)
      const targetY = baseY + scrollYOffset
      group.position.y += (targetY - group.position.y) * 0.1

      if (ring) ring.rotation.z = t * 0.2

      rendererRef.current.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("scroll", computeScrollTarget, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cleanedUpRef.current = true
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("scroll", computeScrollTarget)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointerup", onPointerUp)
      
      if (geometry) geometry.dispose()
      if (material) material.dispose()
      
      renderer.dispose()
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section className="hero-nebula relative w-full h-[100dvh] overflow-hidden bg-transparent">
      {/* 3D Canvas Background - Absolute for static hero effect, with parallax movement inside */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-black" 
        ref={mountRef} 
        aria-hidden="true"
      />
      
      <div 
        className="hero-overlay relative z-20 h-full flex flex-col justify-between items-center w-full px-5 pt-[110px] pb-[20px] md:pt-[120px] md:pb-[40px] max-w-7xl mx-auto"
      >
        {/* TOP: H1 & Subtitle */}
        <div className="hero-content-top flex flex-col items-center w-full mt-0 mb-4 md:mt-[20px] md:mb-[50px]">
          <div className="badge self-start -mt-[8px] text-[10px] sm:text-[11px] px-[10px] py-[5px] sm:px-[12px] sm:py-[6px] opacity-70">NEXT GEN MARKETING</div>
          <h1 className="hero-title animate-shimmer text-center uppercase tracking-[-0.02em] font-bold mt-[10px] text-[clamp(1.2rem,4.5vw,5rem)] md:text-[clamp(2.5rem,5.5vw,6rem)] lg:text-[clamp(3rem,3.5vw,5.5rem)] leading-[1.1] w-full max-w-full overflow-hidden whitespace-nowrap">
            CINEMATIC AI-ENHANCED<br />CONTENT
          </h1>
          <p className="hero-subtitle flex justify-center text-center mt-[10px] max-w-[62ch] opacity-70 text-[clamp(0.875rem,2vw,1.125rem)] md:text-lg">
            {subtitle}
          </p>
        </div>

        {/* MIDDLE: Flexible Sphere Spacer (Ensures space for the 3D element) */}
        <div className="flex-1 w-full flex items-center justify-center min-h-[15vh]" aria-hidden="true" />

        {/* BOTTOM: Action Buttons & Scroll Indicator */}
        <div className="hero-content-bottom w-full relative z-30">
          <div className="hero-actions flex flex-row flex-wrap justify-center lg:justify-between items-center w-full lg:px-20 gap-2 sm:gap-4 pb-[10px] md:pb-0">
            <AIButton href={ctaPrimary.href} label={ctaPrimary.label} className="flex-1 lg:flex-none min-w-[140px] sm:min-w-[180px] py-4 sm:py-5 text-sm sm:text-lg" />
            <AIButton href={ctaSecondary.href} label={ctaSecondary.label} className="secondary-ai-btn flex-1 lg:flex-none min-w-[140px] sm:min-w-[180px] py-4 sm:py-5 text-sm sm:text-lg" />
          </div>
          <div className="scroll-arrow-container flex justify-center items-center mt-6 mb-4 md:mt-10">
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
