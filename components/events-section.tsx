"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

const events = [
  {
    id: 1,
    name: "Techday 2025",
    date: "July 15, 2025",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Annual robotics competition featuring combat robots",
  },
]

export function EventsSection() {
  return (
    <section className="py-24 bg-background w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events, competitions, and learning opportunities
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {events.map((event) => (
            <motion.div key={event.id} whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="group hover-transition hover:shadow-lg hover:border-primary/50 bg-card border-border w-full">
                <CardContent className="p-6">
                  {/* Mobile Layout */}
                  <div className="block lg:hidden">
                    <div className="text-center space-y-4">
                      {/* Event Logo */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto"
                      >
                        <span className="text-2xl">🤖</span>
                      </motion.div>

                      {/* Event Details */}
                      <div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{event.name}</h3>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>

                      {/* Action Button */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild className="group-hover:bg-accent w-full">
                          <Link href="/events" className="flex items-center justify-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center space-x-8 flex-1 min-w-0">
                      {/* Event Logo */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center"
                        >
                          <span className="text-2xl">🤖</span>
                        </motion.div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2 truncate">{event.name}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0 ml-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild className="group-hover:bg-accent px-6 py-3 font-medium">
                          <Link href="/events" className="flex items-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.5} className="text-center mt-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
