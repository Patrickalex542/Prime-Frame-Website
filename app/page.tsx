import { Navigation } from "@/components/layout/navigation";
import HeroNebula from "@/components/sections/hero-nebula";
import { WorkSection } from "@/components/sections/work-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ContactSection } from "@/components/sections/contact-section";

import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <HeroNebula />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />

      <ContactSection />
      <Footer />
    </main>
  );
}
