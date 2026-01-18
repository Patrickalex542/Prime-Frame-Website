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
              <a href="mailto:contact@primeframe.ro" className="socialContainer containerZero" aria-label="Email">
                <Mail className="socialSvg !fill-transparent text-white" />
              </a>
              <a href="https://www.instagram.com/primeframe.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="socialContainer containerOne" aria-label="Instagram">
                <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </a>
              <a href="https://wa.me/40763481568" className="socialContainer containerFour" aria-label="WhatsApp">
                <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  ></path>
                </svg>
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
                className="socialContainer containerZero"
                aria-label="Email"
              >
                <Mail className="socialSvg !fill-transparent text-white" />
              </a>
              <a 
                href="https://www.instagram.com/primeframe.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="socialContainer containerOne"
                aria-label="Instagram"
              >
                <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </a>
              <a 
                href="https://wa.me/40763481568" 
                className="socialContainer containerFour"
                aria-label="WhatsApp"
              >
                <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
