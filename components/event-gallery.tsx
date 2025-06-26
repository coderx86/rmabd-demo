"use client"

import { Camera, Trophy, Users, Zap, Target, Cpu } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

const galleryItems = [
  { icon: Camera, title: "Opening Ceremony", color: "from-primary/20 to-accent/20" },
  { icon: Trophy, title: "Award Winners", color: "from-accent/20 to-primary/20" },
  { icon: Users, title: "Team Collaboration", color: "from-primary/15 to-accent/15" },
  { icon: Zap, title: "Combat Arena", color: "from-accent/15 to-primary/15" },
  { icon: Target, title: "Line Following", color: "from-primary/25 to-accent/25" },
  { icon: Cpu, title: "Maze Challenge", color: "from-accent/25 to-primary/25" },
]

export function EventGallery() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Highlights from previous RoboWars competitions</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateX: 5,
              }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden rounded-lg card-shadow hover-transition bg-gradient-to-br ${item.color} h-64 flex items-center justify-center cursor-pointer`}
            >
              <div className="text-center">
                <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
