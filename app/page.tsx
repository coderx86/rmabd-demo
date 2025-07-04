"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AdvisorSection } from "@/components/advisor-section"
import { ModeratorSection } from "@/components/moderator-section"
import { CommitteeSection } from "@/components/committee-section"
import { AlumniSection } from "@/components/alumni-section"
import { EventsSection } from "@/components/events-section"
import { Gallery } from "@/components/gallery"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <AdvisorSection />
      <ModeratorSection />
      <CommitteeSection />
      <AlumniSection />
      <Gallery />
      <ContactInfo />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
