"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Instagram, Linkedin } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container md:px-6 md:py-6 my-0 mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Prime Frame logo styling */}
          <div className="prime-frame-logo flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="prime-silver tracking-[0.5em]">PRIME</span> 
              <span className="frame-gold">FRAME</span>
            </div>
            <img 
              src="/images/logo-icon.jpg" 
              alt="Prime Icon" 
              className="h-8 w-8 object-contain brightness-110"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Proiecte
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Servicii
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Proces
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Prețuri
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-in slide-in-from-top-2 duration-200 bg-[#2a2a2a] rounded-lg px-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("work")}
                className="mobile-menu-item text-left text-foreground hover:text-primary transition-colors"
              >
                Proiecte
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="mobile-menu-item text-left text-foreground hover:text-primary transition-colors"
              >
                Servicii
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="mobile-menu-item text-left text-foreground hover:text-primary transition-colors"
              >
                Proces
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="mobile-menu-item text-left text-foreground hover:text-primary transition-colors"
              >
                Prețuri
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="mobile-menu-item text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
