"use client"

import { motion } from "framer-motion"

export function EventHeroSection() {
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

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with CSS gradient instead of image */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 dark:from-black/80 dark:to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-heading mb-4 text-white"
        >
          RoboWars <span className="text-accent">2024</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl md:text-2xl text-white/90 font-body"
        >
          The Ultimate Robotics Competition
        </motion.p>
      </motion.div>
    </section>
  )
}
