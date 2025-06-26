"use client"

import { Mail, MessageCircle, Phone, Facebook, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to join us? We'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Location Placeholder */}
          <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg card-shadow bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <MapPin className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">CUET Campus</h3>
                <p className="text-muted-foreground">Our Location</p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Contact Details */}
          <div className="order-1 lg:order-2">
            <StaggerContainer staggerDelay={0.2}>
              <div className="flex items-center space-x-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Location</h3>
                  <p className="text-light-black dark:text-light-white">
                    Chittagong University of Engineering & Technology
                    <br />
                    Chittagong-4349, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Email</h3>
                  <p className="text-light-black dark:text-light-white">rma@cuet.ac.bd</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Phone</h3>
                  <a href="tel:+88031714865" className="text-light-black dark:text-light-white">
  +880 31 714865
</a>
                </div>
              </div>
            </StaggerContainer>

            <AnimatedSection delay={0.6} className="pt-8">
              <h3 className="font-semibold text-foreground mb-6 text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                {[Facebook, MessageCircle, Mail].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground hover-transition w-12 h-12"
                    >
                      <Icon className="h-6 w-6" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
