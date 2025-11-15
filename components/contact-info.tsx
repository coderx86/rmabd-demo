"use client"

import { Mail, MessageCircle, Phone, Facebook, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"
// import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export function ContactInfo() {
  // CUET Location Coordinates
  // const position = { lat: 22.461964358581874, lng: 91.9710152533906 }

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
          {/* Google Map */}
          <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden card-shadow h-96"
            >
              {/* <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                <Map
                  defaultCenter={position}
                  defaultZoom={15}
                  gestureHandling={'greedy'}
                  disableDefaultUI={false}
                  mapId="cuet-rma-map"
                >
                  <Marker position={position} />
                </Map>
              </APIProvider> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.5630008980525!2d91.97068417086109!3d22.461898853050094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2sChittagong%20University%20of%20Engineering%20and%20Technology%20(CUET)!5e0!3m2!1sen!2sbd!4v1763240341031!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
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
                  <a 
                    href="mailto:rma@cuet.ac.bd"
                    className="text-light-black dark:text-light-white hover:text-primary transition-colors"
                  >
                    rma@cuet.ac.bd
                  </a>
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
                  <a 
                    href="tel:+88031714865" 
                    className="text-light-black dark:text-light-white hover:text-primary transition-colors"
                  >
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
