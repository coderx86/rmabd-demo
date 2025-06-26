"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Network, Gift } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Users,
    title: "Leadership Experience",
    description: "Develop leadership skills by representing RMA at your campus",
  },
  {
    icon: Award,
    title: "Recognition & Certificates",
    description: "Receive official recognition and certificates for your contribution",
  },
  {
    icon: Network,
    title: "Networking Opportunities",
    description: "Connect with like-minded students and industry professionals",
  },
  {
    icon: Gift,
    title: "Exclusive Perks",
    description: "Access to exclusive events, workshops, and RMA merchandise",
  },
]

export function CampusAmbassador() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Campus <span className="text-primary">Ambassador</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Become a bridge between RMA and your university community
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16" staggerDelay={0.15}>
          {benefits.map((benefit, index) => (
            <motion.div key={index} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="text-center hover-transition hover:shadow-lg bg-card border-border h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.5} className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-primary hover:bg-accent px-8 py-3 font-medium">
              Become a Campus Ambassador
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
