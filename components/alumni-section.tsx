"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const allAlumni = [
  {
    id: 1,
    name: "Dr. Rashid Ahmed",
    designation: "Senior Robotics Engineer",
    company: "Tesla Inc.",
    graduationYear: "2018",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Fatima Rahman",
    designation: "AI Research Scientist",
    company: "Google DeepMind",
    graduationYear: "2019",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Mohammad Hassan",
    designation: "Mechatronics Lead",
    company: "Boston Dynamics",
    graduationYear: "2017",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Nadia Khan",
    designation: "Automation Engineer",
    company: "Siemens",
    graduationYear: "2020",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Tariq Islam",
    designation: "Robotics Consultant",
    company: "McKinsey & Company",
    graduationYear: "2018",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Rima Begum",
    designation: "Product Manager",
    company: "Amazon Robotics",
    graduationYear: "2019",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Fahim Ahmed",
    designation: "Startup Founder",
    company: "RoboTech Solutions",
    graduationYear: "2016",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Zara Hassan",
    designation: "Research Engineer",
    company: "MIT CSAIL",
    graduationYear: "2021",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 9,
    name: "Omar Faruk",
    designation: "Technical Lead",
    company: "SpaceX",
    graduationYear: "2017",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 10,
    name: "Sadia Ahmed",
    designation: "Machine Learning Engineer",
    company: "Meta AI",
    graduationYear: "2020",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export function AlumniSection() {
  const [isHovered, setIsHovered] = useState(false);

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnLastSnap: false,
    })
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    plugin.current.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    plugin.current.play();
  };

  const getGraduationBadge = (year: string) => {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          bounce: 0.4,
          delay: 0.2,
        }}
        className="relative group"
      >
        {/* Animated background glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 rounded-xl blur-sm"
        />

        {/* Main badge container */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 2,
            y: -2,
          }}
          className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 dark:from-slate-100 dark:via-gray-100 dark:to-slate-200 rounded-xl shadow-lg border border-slate-700/50 dark:border-slate-300/50 backdrop-blur-sm overflow-hidden"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600" />

          {/* Content */}
          <div className="px-4 py-2.5 flex items-center space-x-2.5">
            {/* Graduation cap icon */}
            <motion.div
              animate={{
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex-shrink-0"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                <GraduationCap className="h-3.5 w-3.5 text-white" />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex flex-col leading-none">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-600 uppercase tracking-wider">
                Class of
              </span>
              <span className="text-sm font-bold text-white dark:text-slate-900 tracking-wide">
                {year}
              </span>
            </div>
          </div>

          {/* Shine effect */}
          <motion.div
            animate={{
              x: [-100, 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />

          {/* Decorative corner elements */}
          <div className="absolute top-1 right-1 w-1 h-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60" />
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-60" />
        </motion.div>

        {/* Floating particles effect */}
        <motion.div
          animate={{
            y: [-2, -8, -2],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-sm"
        />
      </motion.div>
    );
  };

  const AlumniCard = ({ alumni }: { alumni: (typeof allAlumni)[0] }) => (
    <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full relative overflow-hidden mx-auto max-w-sm">
      {/* Graduation Year Badge - Positioned with better spacing */}
      <div className="absolute top-4 right-4 z-10">
        {getGraduationBadge(alumni.graduationYear)}
      </div>

      <CardContent className="p-8 text-center">
        <div className="mb-8 pt-4">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-36 h-36 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center relative"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2"
              >
                <span className="text-xl">🎓</span>
              </motion.div>
              <span className="text-xs text-muted-foreground">Alumni</span>
            </div>

            {/* Success indicator */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white text-xs">✓</span>
            </motion.div>
          </motion.div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          {alumni.name}
        </h3>
        <p className="text-primary font-medium mb-1">{alumni.designation}</p>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-1 text-muted-foreground"
          >
            <ExternalLink className="h-3 w-3" />
            <span className="text-sm font-medium">{alumni.company}</span>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-4">
          {[Mail, Linkedin, Facebook].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground hover-transition bg-transparent"
              >
                <Icon className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Our <span className="text-primary">Alumni</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proud graduates making their mark in the world of technology and
            innovation
          </p>
        </AnimatedSection>

        {/* Carousel for All Screen Sizes */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allAlumni.map((alumni) => (
                <CarouselItem
                  key={alumni.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlumniCard alumni={alumni} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-lg w-12 h-12 rounded-full z-10">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-lg w-12 h-12 rounded-full z-10">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>

          {/* Auto-play Status Indicator */}
          {/* <div className="flex justify-center mt-6 space-x-2 items-center">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(allAlumni.length / 3) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-colors duration-300"
                />
              ))}
            </div>
            <div className="ml-4 flex items-center space-x-2">
              <div
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isHovered ? "bg-red-400" : "bg-green-400"
                }`}
              />
              <span className="text-xs text-muted-foreground">{isHovered ? "Paused" : "Auto-play"}</span>
            </div>
          </div>*/}
        </div>

        {/* Alumni Stats */}
        <AnimatedSection delay={0.7} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 bg-card rounded-lg card-shadow border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-4xl font-bold text-primary mb-3"
              >
                500+
              </motion.div>
              <div className="text-muted-foreground">Total Alumni</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 bg-card rounded-lg card-shadow border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-4xl font-bold text-primary mb-3"
              >
                50+
              </motion.div>
              <div className="text-muted-foreground">Companies Worldwide</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 bg-card rounded-lg card-shadow border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-4xl font-bold text-primary mb-3"
              >
                25+
              </motion.div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
