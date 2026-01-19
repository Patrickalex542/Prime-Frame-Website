import { Mail, Facebook, Instagram } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        
        {/* Social Icons Section */}



        {/* Separator Wave (Simulated with border or SVG if users wants, Anida has a wave) */}
        {/* Using simple border for now to keep it clean */}
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Despre noi */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Despre noi</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La Prime Frame, transformăm viziunea ta în realitate vizuală. Suntem specializați în producție video, creare de conținut social media și strategii digitale care aduc rezultate. Ne angajăm să oferim calitate cinematică și impact maxim pentru brandul tău.
            </p>
            <div className="prime-frame-logo flex flex-col justify-between items-center gap-0 mt-4">
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
          </div>

          {/* Column 2: Link-uri utile */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Link-uri utile</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">HOME</a></li>
              <li><a href="#work" className="hover:text-primary transition-colors">PROIECTE</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">SERVICII</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">PROCES</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">TESTIMONIALE</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">CONTACT</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
               <div className="flex items-start gap-3">
                  <span className="mt-1">📍</span>
                  <p>București, Sectorul 4, Strada ANGHEL MOLDOVEANU, Nr. 59</p>
               </div>
               <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <a href="mailto:contact@primeframe.ro" className="hover:text-primary transition-colors">contact@primeframe.ro</a>
               </div>
               <div className="flex items-center gap-3">
                  <span>📞</span>
                  <a href="tel:+40763481568" className="hover:text-primary transition-colors">+40 763 481 568</a>
               </div>
            </div>
            
             <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <a 
                  href="https://reclamatiisal.anpc.ro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-[200px]"
                >
                  <img 
                    src="https://anidabeautycare.ro/wp-content/uploads/2023/02/SAL-site.png" 
                    alt="ANPC - Soluționarea Alternativă a Litigiilor" 
                    className="w-full h-auto object-contain dark:invert"
                  />
                </a>
                <a 
                  href="https://consumer-redress.ec.europa.eu/site-relocation_en?event=main.home.chooseLanguage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-[200px]"
                >
                  <img 
                    src="https://anidabeautycare.ro/wp-content/uploads/2023/02/SOL-site.png" 
                    alt="Soluționarea Online a Litigiilor" 
                    className="w-full h-auto object-contain dark:invert"
                  />
                </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 PRIME FRAME. Toate drepturile rezervate.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors hover:cursor-pointer">Politica de utilizare Cookie-uri</button>
              </DialogTrigger>
              <DialogContent className="max-w-xl bg-background border-border">
                <DialogHeader>
                  <DialogTitle>Politica de Folosire a Cookie-urilor</DialogTitle>
                  <DialogDescription>
                    Site-ul nostru utilizeaza cookie-uri pentru a imbunatati experienta utilizatorilor.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-4 text-sm text-muted-foreground text-left">
                    <p>
                      Site-ul nostru utilizeaza cookie-uri pentru a imbunatati experienta utilizatorilor si a personaliza continutul si reclamele.
                    </p>
                    <h3 className="font-bold text-foreground">Ce sunt cookie-urile?</h3>
                    <p>
                      Cookie-urile sunt fisiere mici de text plasate pe computerul, telefonul sau dispozitivul tau atunci cand accesezi un site web. Acestea stocheaza informatii precum preferintele tale de navigare, informatii de autentificare sau date despre produsele tale favorite.
                    </p>
                    <h3 className="font-bold text-foreground">Cum folosim cookie-urile?</h3>
                    <p>
                      Folosim cookie-uri pentru a personaliza continutul si reclamele, pentru a oferi functionalitati pentru retelele sociale si pentru a analiza traficul pe site. De asemenea, partenerii nostri de publicitate si de analiza ar putea folosi cookie-uri pentru a furniza informatii relevante pentru tine.
                    </p>
                    <h3 className="font-bold text-foreground">Controlul cookie-urilor tale</h3>
                    <p>
                      Poti controla sau limita utilizarea cookie-urilor prin setarile browser-ului tau sau prin optiunile disponibile prin intermediul politicilor de confidentialitate ale partenerilor nostri de publicitate.
                    </p>
                    <p className="pt-2 border-t border-border">
                      Acest site web respecta drepturile utilizatorilor si se conformeaza cu reglementarile privind protectia datelor si utilizarea cookie-urilor.
                    </p>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <span className="hidden md:inline">|</span>

            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors hover:cursor-pointer">Termeni și Condiții</button>
              </DialogTrigger>
              <DialogContent className="max-w-xl bg-background border-border">
                <DialogHeader>
                  <DialogTitle>Termeni și Condiții</DialogTitle>
                  <DialogDescription>
                    Vă rugăm să citiți cu atenție termenii și condițiile de utilizare a site-ului.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-4 text-sm text-muted-foreground text-left">
                     <h3 className="font-bold text-foreground">1. INTRODUCERE</h3>
                    <p>
                      Acești Termeni și Condiții reglementează utilizarea site-ului <strong>www.primeframe.ro</strong>. Prin accesarea acestui site, sunteți de acord cu acești termeni.
                    </p>

                    <h3 className="font-bold text-foreground">GENERALITĂȚI</h3>
                    <p>
                      <strong>TUFAN CRISTIAN-COSTIN PERSOANĂ FIZICĂ AUTORIZATĂ</strong>, CUI <strong>53184966</strong>, Reg. Com. <strong>F40/2505/2025</strong>, sediu: <strong>București, Sectorul 4, Strada ANGHEL MOLDOVEANU, Nr. 59</strong>.
                    </p>

                    <h3 className="font-bold text-foreground">2. SERVICII</h3>
                    <p>Prime Frame oferă servicii de producție video și marketing digital.</p>

                    <h3 className="font-bold text-foreground">3. DREPTURI DE AUTOR</h3>
                    <p>Tot conținutul (text, imagini, logo-uri) este proprietatea Prime Frame.</p>
                    
                    <p className="pt-2 border-t border-border">
                      Pentru detalii complete, contactați-ne la contact@primeframe.ro.
                    </p>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* ANPC Banners */}


      </div>
    </footer>
  )
}
