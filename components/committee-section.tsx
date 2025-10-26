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
import allCommitteeMembers from "../data/committee.json";

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
    <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full">
      <CardContent className="p-5 text-center flex flex-col h-full">
        <div className="mb-4">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-3 border-primary/20 flex items-center justify-center"
          >
            <img
              src={member.image || "/placeholder.svg?height=300&width=300"}
              alt={member.name}
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{member.designation}</p>
        </div>
        
        <div className="flex justify-center space-x-3 mt-auto">
          {[Mail, Linkedin, Facebook].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                variant="outline"
                className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground hover-transition bg-transparent"
              >
                <Icon className="h-3.5 w-3.5" />
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
        <AnimatedSection className="text-center mb-16">
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
            <CarouselContent className="-ml-2 md:-ml-3">
              {allCommitteeMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-2 md:pl-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <CommitteeCard member={member} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-lg w-10 h-10 rounded-full z-10">
              <ChevronLeft className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-lg w-10 h-10 rounded-full z-10">
              <ChevronRight className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}