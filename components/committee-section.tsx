"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Linkedin,
  Mail,
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

const allCommitteeMembers = [
  {
    id: 1,
    name: "Sarah Ahmed",
    designation: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Karim Rahman",
    designation: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Nadia Islam",
    designation: "Public Relations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Tariq Hassan",
    designation: "Finance Secretary",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Rima Khan",
    designation: "Workshop Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Fahim Ahmed",
    designation: "Media Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Zara Begum",
    designation: "Research Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Omar Faruk",
    designation: "Competition Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export function CommitteeSection() {
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

  const CommitteeCard = ({
    member,
  }: {
    member: (typeof allCommitteeMembers)[0];
  }) => (
    <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full mx-auto max-w-sm">
      <CardContent className="p-8 text-center">
        <div className="mb-8">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
            className="w-36 h-36 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2"
              >
                <span className="text-xl">👨‍💻</span>
              </motion.div>
              <span className="text-xs text-muted-foreground">Member</span>
            </div>
          </motion.div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {member.name}
        </h3>
        <p className="text-muted-foreground mb-8">{member.designation}</p>
        <div className="flex justify-center space-x-4">
          {[Mail, Linkedin, Facebook].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 10 }}
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
    <section id="team" className="py-24 bg-cream dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Committee <span className="text-primary">Members</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals working together to make RMA a success
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
              {allCommitteeMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CommitteeCard member={member} />
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
              {Array.from({ length: Math.ceil(allCommitteeMembers.length / 3) }).map((_, index) => (
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
