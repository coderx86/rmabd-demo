"use client"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-heading">RMA</span>
            </div>
            <span className="font-bold text-lg text-foreground font-heading">RoboMechatronics Association</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-light-black dark:text-light-white font-body text-sm">
              © 2024 RoboMechatronics Association, CUET. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
