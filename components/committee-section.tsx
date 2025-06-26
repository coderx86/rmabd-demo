"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

const allCommitteeMembers = [
  {
    id: 1,
    name: "Sarah Ahmed",
    designation: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Karim Rahman",
    designation: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Nadia Islam",
    designation: "Public Relations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Tariq Hassan",
    designation: "Finance Secretary",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Rima Khan",
    designation: "Workshop Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Fahim Ahmed",
    designation: "Media Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Zara Begum",
    designation: "Research Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Omar Faruk",
    designation: "Competition Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function CommitteeSection() {
  const [showAll, setShowAll] = useState(false)
  const initialCount = 6
  const displayedMembers = showAll ? allCommitteeMembers : allCommitteeMembers.slice(0, initialCount)

  return (
    <section className="py-24 bg-cream dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Committee <span className="text-primary">Members</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals working together to make RMA a success
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" staggerDelay={0.15}>
          {displayedMembers.map((member) => (
            <motion.div key={member.id} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="w-36 h-36 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <span className="text-xl">👨‍💻</span>
                        </motion.div>
                        <span className="text-xs text-muted-foreground">Member</span>
                      </div>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{member.name}</h3>
                  <p className="text-muted-foreground mb-8">{member.designation}</p>
                  <div className="flex justify-center space-x-4">
                    {[Mail, Linkedin, Facebook].map((Icon, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95 }}>
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

        {!showAll && allCommitteeMembers.length > initialCount && (
          <AnimatedSection delay={0.5} className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setShowAll(true)}
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium"
              >
                See More...
              </Button>
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
