"use client"

import { Calendar, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export function DateLocation() {
  return (
    <section className="py-16 bg-cream dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Date */}
          <AnimatedSection direction="left" delay={0.1}>
            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }} className="text-center">
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <Calendar className="h-10 w-10 text-primary" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Event Date</h3>
              <p className="text-lg text-muted-foreground">March 15-16, 2024</p>
            </motion.div>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }} className="text-center">
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <MapPin className="h-10 w-10 text-primary" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Location</h3>
              <p className="text-lg text-muted-foreground">CUET</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
