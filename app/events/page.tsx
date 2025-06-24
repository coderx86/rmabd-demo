import { Navbar } from "@/components/navbar"
import { EventHeroSection } from "@/components/event-hero-section"
import { AboutEvent } from "@/components/about-event"
import { DateLocation } from "@/components/date-location"
import { EventSegments } from "@/components/event-segments"
import { EventGallery } from "@/components/event-gallery"
import { SponsorsPartners } from "@/components/sponsors-partners"
import { CampusAmbassador } from "@/components/campus-ambassador"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EventHeroSection />
      <AboutEvent />
      <DateLocation />
      <EventSegments />
      <EventGallery />
      <SponsorsPartners />
      <CampusAmbassador />
      <ContactInfo />
      <Footer />
    </div>
  )
}
