"use client"

import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream dark:bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg card-shadow bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-3xl">⚙️</span>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">RMA Activities</h3>
                <p className="text-muted-foreground">Innovation in Action</p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="section-heading text-foreground">
                About <span className="text-primary">RMA</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer staggerDelay={0.15}>
              <p className="text-muted-foreground leading-relaxed">
                The RoboMechatronics Association (RMA) at CUET is a dynamic student organization dedicated to fostering
                innovation in robotics, mechatronics, and emerging technologies. We provide a platform for students to
                explore, learn, and create cutting-edge solutions that bridge the gap between theoretical knowledge and
                practical application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to cultivate a community of passionate engineers and innovators who are ready to tackle
                tomorrow's challenges through collaborative learning, hands-on projects, and industry partnerships.
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
                    500+
                  </motion.div>
                  <div className="text-muted-foreground">Active Members</div>
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
                    50+
                  </motion.div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
