import { Navbar } from "@/components/navbar"
import { EventHeroSection } from "@/components/event-hero-section"
import { AboutEvent } from "@/components/about-event"
import { EventSegments } from "@/components/event-segments"
import { SponsorsPartners } from "@/components/sponsors-partners"
import { CampusAmbassador } from "@/components/campus-ambassador"
import { EventGallery } from "@/components/event-gallery"
import { DateLocation } from "@/components/date-location"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageWrapper } from "@/components/page-wrapper"

export default function EventsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background theme-transition overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden">
          <EventHeroSection />
          <AboutEvent />
          <DateLocation />
          <EventSegments />
          <SponsorsPartners />
          <CampusAmbassador />
          <EventGallery />
          <ContactInfo />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </PageWrapper>
  )
}
