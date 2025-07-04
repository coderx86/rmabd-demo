"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

const moderators = [
  {
    id: 1,
    name: "Ahmed Hassan",
    designation: "President",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "ahmed@rma.cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Fatima Khan",
    designation: "Vice President",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "fatima@rma.cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Rafiq Islam",
    designation: "General Secretary",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "rafiq@rma.cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
]

export function ModeratorSection() {
  return (
    <section id="moderator" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Our <span className="text-primary">Moderators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Dedicated leaders who drive our association forward</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" staggerDelay={0.2}>
          {moderators.map((moderator) => (
            <motion.div key={moderator.id} whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ rotate: -5 }}
                      transition={{ duration: 0.3 }}
                      className="w-36 h-36 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                          className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <span className="text-xl">👨‍💼</span>
                        </motion.div>
                        <span className="text-xs text-muted-foreground">Leader</span>
                      </div>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{moderator.name}</h3>
                  <p className="text-muted-foreground mb-8">{moderator.designation}</p>
                  <div className="flex justify-center space-x-4">
                    {[Mail, Linkedin, Facebook].map((Icon, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="icon"
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground hover-transition"
                        >
                          <Icon className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
