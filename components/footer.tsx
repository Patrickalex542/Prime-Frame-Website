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
            {/* iOS Style Dark Icons */}
            <a href="mailto:contact@primeframe.ro" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1c1c1e] text-white hover:scale-110 hover:bg-[#2c2c2e] transition-all duration-300 shadow-lg shadow-black/20 group" aria-label="Email">
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.instagram.com/primeframe.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1c1c1e] text-white hover:scale-110 hover:bg-[#2c2c2e] transition-all duration-300 shadow-lg shadow-black/20 group" aria-label="Instagram">
              <Instagram className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a href="https://wa.me/40763481568" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1c1c1e] text-white hover:scale-110 hover:bg-[#2c2c2e] transition-all duration-300 shadow-lg shadow-black/20 group" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5 group-hover:text-primary transition-colors" />
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
