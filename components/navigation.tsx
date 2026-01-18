"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Instagram, MessageCircle, Mail } from "lucide-react"

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
      <div className="container mx-auto pt-2 pb-0 pl-[3px] pr-[10px]">
        <div className="flex items-center justify-between">
          {/* Prime Frame logo styling */}
          <div className="prime-frame-logo flex items-center gap-0">
            <img 
              src="/images/logo-icon.jpg" 
              alt="Prime Icon" 
              className="h-12 md:h-16 w-auto object-contain brightness-110"
            />
            <div className="flex items-center gap-2 -mt-[6px]">
              <span className="prime-silver tracking-[0.5em]">PRIME</span> 
              <span className="frame-gold">FRAME</span>
            </div>
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
            <div className="flex items-center gap-3 ml-4 border-l border-border pl-4">
              <a href="mailto:contact@primeframe.ro" className="social-btn mail w-9 h-9 group" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/primeframe.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-btn insta w-9 h-9 group" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/40763481568" className="social-btn wa w-9 h-9 group" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:hidden -mt-[6px]">
            <input 
              className="toggle-checkbox" 
              id="toggle" 
              type="checkbox" 
              checked={isMobileMenuOpen}
              onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
            />
            <label className="hamburger" htmlFor="toggle">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </label>
          </div>
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
            
            <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-center gap-6">
              <a 
                href="mailto:contact@primeframe.ro" 
                className="social-btn mail w-11 h-11 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/primeframe.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="social-btn insta w-11 h-11 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/40763481568" 
                className="social-btn wa w-11 h-11 group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
