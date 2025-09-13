import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { VisionSection } from "@/components/vision-section"
import { FeaturesSection } from "@/components/features-section"
import { StoriesSection } from "@/components/stories-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <VisionSection />
        <FeaturesSection />
        <StoriesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
