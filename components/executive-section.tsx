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

const allExecutiveMembers = [
  {
    id: 1,
    name: "Obidullah Mahmud Jamy",
    designation: "Executive, Public Relations",
    image: "/executive/jamy.jpeg",
  },
  {
    id: 2,
    name: "Md Ashraful Alam Tamim ",
    designation: "Executive, Video & Motion Graphics",
    image: "/executive/tamim.jpg",
  },
  {
    id: 3,
    name: "Matiur Rahman",
    designation: "Executive, Logistics Management",
    image: "/executive/matiur.jpg",
  },
  {
    id: 4,
    name: "Israth Jahan",
    designation: "Executive, Logistics Management",
    image: "/executive/israth.jpg",
  },
  {
    id: 5,
    name: "Anindya Barua",
    designation: "Executive, Sponsor Management",
    image: "/executive/anindya.jpg",
  },
  {
    id: 6,
    name: "Rizuanul Alam",
    designation: "Executive, Logistics Management",
    image: "/executive/rizuanul.jpg",
  },
  {
    id: 7,
    name: "Nazya Mustafiz",
    designation: "Executive, Graphics Design",
    image: "/executive/nazya.jpg",
  },
  {
    id: 8,
    name: "G M Faysal Taysir",
    designation: "Executive, IT & Technical Management",
    image: "/executive/faysal.jpg",
  },
  {
    id: 9,
    name: "Md. Rayhanul Nayeem",
    designation: "Executive, IT & Technical Management",
    image: "/executive/rayhanul.jpg",
  },
  {
    id: 10,
    name: "Minhajul Islam Mahadi",
    designation: "Executive, IT & Technical Management",
    image: "/executive/minhajul.JPG",
  },
  {
    id: 11,
    name: "Zaber Ahsan Bhuiyan",
    designation: "Executive, Sponsor Management",
    image: "/executive/zaber.JPG",
  },
];

export function ExecutiveSection() {
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

  const ExecutiveCard = ({
    member,
  }: {
    member: (typeof allExecutiveMembers)[0];
  }) => (
    <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full mx-auto max-w-sm">
      <CardContent className="p-8 text-center">
        <div className="mb-8">
          <motion.div
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:w-64 sm:h-64 w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center"
          >
            {/* <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2"
              >
                
              </motion.div>
            </div> */}
            <img
              src={member.image || "/placeholder.svg?height=300&width=300"}
              alt={member.name}
              className="w-full h-full object-cover rounded-full"
            />
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
            Executive <span className="text-primary">Members</span>
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
              {allExecutiveMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExecutiveCard member={member} />
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
