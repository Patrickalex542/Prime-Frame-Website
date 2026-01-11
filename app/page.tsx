import { Navigation } from "@/components/navigation"
import HeroNebula from "@/components/hero-nebula"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroNebula />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
