"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building, Cpu, Zap, Code, Wrench, Globe } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

const sponsors = {
  platinum: [
    { name: "TechCorp", icon: Building },
    { name: "RoboTech Industries", icon: Cpu },
  ],
  gold: [
    { name: "Innovation Labs", icon: Zap },
    { name: "Future Systems", icon: Code },
    { name: "Digital Solutions", icon: Globe },
  ],
  silver: [
    { name: "StartupHub", icon: Building },
    { name: "CodeCraft", icon: Code },
    { name: "TechVenture", icon: Wrench },
    { name: "InnovateCo", icon: Cpu },
  ],
}

export function SponsorsPartners() {
  return (
    <section id="sponsors" className="py-24 bg-cream dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Sponsors & <span className="text-primary">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're grateful for the support of our amazing sponsors and partners
          </p>
        </AnimatedSection>

        {/* Platinum Sponsors */}
        <AnimatedSection delay={0.2} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Platinum Sponsors</h3>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto" staggerDelay={0.2}>
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div key={index} whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="hover-transition hover:shadow-lg bg-card border-border">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="h-16 flex items-center justify-center mb-4"
                    >
                      <sponsor.icon className="h-12 w-12 text-primary" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-foreground">{sponsor.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Gold Sponsors */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Gold Sponsors</h3>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {sponsors.gold.map((sponsor, index) => (
              <motion.div key={index} whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="hover-transition hover:shadow-lg bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.5 }}
                      className="h-12 flex items-center justify-center mb-3"
                    >
                      <sponsor.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h4 className="text-base font-semibold text-foreground">{sponsor.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Silver Sponsors */}
        <AnimatedSection delay={0.6}>
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Silver Sponsors</h3>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {sponsors.silver.map((sponsor, index) => (
              <motion.div key={index} whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="hover-transition hover:shadow-lg bg-card border-border">
                  <CardContent className="p-4 text-center">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="h-8 flex items-center justify-center mb-2"
                    >
                      <sponsor.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h4 className="text-sm font-semibold text-foreground">{sponsor.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  )
}
