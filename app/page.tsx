import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhyPercepvisionSection } from "@/components/home/why-percepvision-section"
import { FeaturesSection } from "@/components/home/features-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="bg-white text-[#333333]">
      <Navbar />
      <main>
        <HeroSection />
        <WhyPercepvisionSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
