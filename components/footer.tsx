import { Instagram, Linkedin, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="prime-frame-logo">
              <span className="prime-silver tracking-[0.5em]">PRIME</span> <span className="frame-gold">FRAME</span>
            </div>
            <p className="text-sm text-muted-foreground tracking-wider">© 2026 PRIME FRAME. Toate drepturile rezervate.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300" aria-label="Telegram">
              <Send className="w-6 h-6" />
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
