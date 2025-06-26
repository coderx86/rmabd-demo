"use client"

import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

export function AboutEvent() {
  return (
    <section id="about" className="py-24 bg-cream dark:bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="section-heading text-foreground">
                About <span className="text-primary">RoboWars 2024</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer staggerDelay={0.15}>
              <p className="text-muted-foreground leading-relaxed">
                RoboWars 2024 is the most anticipated robotics competition of the year, bringing together brilliant
                minds from universities across the country. This event showcases the pinnacle of engineering excellence,
                creativity, and competitive spirit in the field of robotics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Participants will compete in multiple categories including combat robots, line following, maze solving,
                and innovative project showcases. With substantial prize money and recognition at stake, this
                competition promises to be an unforgettable experience for all participants and spectators.
              </p>
            </StaggerContainer>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 bg-card rounded-lg card-shadow"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-4xl font-bold text-primary mb-3"
                  >
                    ৳50,000
                  </motion.div>
                  <div className="text-muted-foreground">Total Prize Money</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 bg-card rounded-lg card-shadow"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-4xl font-bold text-primary mb-3"
                  >
                    100+
                  </motion.div>
                  <div className="text-muted-foreground">Expected Teams</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Event Poster Placeholder */}
          <AnimatedSection direction="left" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg card-shadow bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-3xl">🤖</span>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">RoboWars 2024</h3>
                <p className="text-muted-foreground">Official Event Poster</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
