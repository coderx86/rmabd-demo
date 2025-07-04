import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { AlumniSection } from "@/components/alumni-section"
import { CommitteeSection } from "@/components/committee-section"
import { ModeratorSection } from "@/components/moderator-section"
import { AdvisorSection } from "@/components/advisor-section"
import { Gallery } from "@/components/gallery"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageWrapper } from "@/components/page-wrapper"

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background theme-transition overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden">
          <HeroSection />
          <EventsSection />
          <AboutSection />
          <AdvisorSection />
          <ModeratorSection />
          <CommitteeSection />
          <AlumniSection />
          <Gallery />
          <ContactInfo />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </PageWrapper>
  )
}
