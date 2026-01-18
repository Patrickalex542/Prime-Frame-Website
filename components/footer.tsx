import { Instagram, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="prime-frame-logo flex items-center gap-0 mb-2">
              <img 
                src="/images/logo-icon.jpg" 
                alt="Prime Icon" 
                className="h-8 w-8 object-contain brightness-110"
              />
              <div className="flex items-center gap-2">
                <span className="prime-silver tracking-[0.5em]">PRIME</span> 
                <span className="frame-gold">FRAME</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground tracking-wider">© 2026 PRIME FRAME. Toate drepturile rezervate.</p>
          </div>

          <div className="flex gap-6">
            {/* iOS Style Dark Icons with Uiverse Red/Gold Theme */}
            <a href="mailto:contact@primeframe.ro" className="uiverse-button w-10 h-10 rounded-xl text-white hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-lg shadow-black/20 group" aria-label="Email">
               <div className="wrapper">
                <div className="circle circle-12"></div>
                <div className="circle circle-11"></div>
                <div className="circle circle-10"></div>
                <div className="circle circle-9"></div>
                <div className="circle circle-8"></div>
                <div className="circle circle-7"></div>
                <div className="circle circle-6"></div>
                <div className="circle circle-5"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-1"></div>
              </div>
              <Mail className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
            </a>
            <a href="https://www.instagram.com/primeframe.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="uiverse-button w-10 h-10 rounded-xl text-white hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-lg shadow-black/20 group" aria-label="Instagram">
              <div className="wrapper">
                <div className="circle circle-12"></div>
                <div className="circle circle-11"></div>
                <div className="circle circle-10"></div>
                <div className="circle circle-9"></div>
                <div className="circle circle-8"></div>
                <div className="circle circle-7"></div>
                <div className="circle circle-6"></div>
                <div className="circle circle-5"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-1"></div>
              </div>
              <Instagram className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
            </a>
            <a href="https://wa.me/40763481568" className="uiverse-button w-10 h-10 rounded-xl text-white hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-lg shadow-black/20 group" aria-label="WhatsApp">
              <div className="wrapper">
                <div className="circle circle-12"></div>
                <div className="circle circle-11"></div>
                <div className="circle circle-10"></div>
                <div className="circle circle-9"></div>
                <div className="circle circle-8"></div>
                <div className="circle circle-7"></div>
                <div className="circle circle-6"></div>
                <div className="circle circle-5"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-1"></div>
              </div>
              <MessageCircle className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
            </a>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-primary transition-colors">Proiecte</a>
            <a href="#services" className="hover:text-primary transition-colors">Servicii</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
