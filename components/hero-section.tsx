"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  }

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 dark:from-black/80 dark:to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white max-w-5xl mx-auto px-6"
      >
        <motion.h1 variants={itemVariants} className="font-heading mb-8 leading-tight text-white">
          RoboMechatronics
          <motion.span variants={itemVariants} className="block text-accent">
            Association
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-12 text-white/90 font-body max-w-3xl mx-auto"
        >
          Innovating Tomorrow Through Robotics and Technology
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg font-medium"
            >
              Join Our Community
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-medium dark:text-white dark:hover:text-white light:text-black light:hover:text-black"
            >
              <Link href="#about" className="text-black dark:text-white">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
