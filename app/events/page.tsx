"use client"

import { useEffect } from "react"
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
import { ScrollToTop } from "@/components/scroll-to-top"

export default function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navbar />
      <EventHeroSection />
      <div id="event-about">
        <AboutEvent />
      </div>
      <DateLocation />
      <div id="event-segments">
        <EventSegments />
      </div>
      <EventGallery />
      <div id="event-sponsors">
        <SponsorsPartners />
      </div>
      <CampusAmbassador />
      <div id="event-contact">
        <ContactInfo />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
