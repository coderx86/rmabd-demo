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
    name: "Obidullah Mahmud Jamy",
    designation: "Public Relations Secretary",
    image: "/committee/jamy.jpeg",
  },
  {
    id: 2,
    name: "Md Ashraful Alam Tamim ",
    designation: "Organizing Secretary",
    image: "/committee/tamim.jpg",
  },
  {
    id: 3,
    name: "Matiur Rahman",
    designation: "Vice President(Management)",
    image: "/committee/matiur.jpg",
  },
  {
    id: 4,
    name: "Israth Jahan",
    designation: "Joint General Secretary(Management)",
    image: "/committee/israth.jpg",
  },
  {
    id: 5,
    name: "Anindya Barua",
    designation: "General Secretary",
    image: "/committee/anindya.jpg",
  },
  {
    id: 6,
    name: "Rizuanul Alam",
    designation: "Finance Secretary",
    image: "/committee/rizuanul.jpg",
  },
  {
    id: 7,
    name: "Nazya Mustafiz",
    designation: "Visual & Graphics Secretary",
    image: "/committee/nazya.jpg",
  },
  {
    id: 8,
    name: "G M Faysal Taysir",
    designation: "President",
    image: "/committee/faysal.jpg",
  },
  {
    id: 9,
    name: "Md. Rayhanul Nayeem",
    designation: "Project Secretary",
    image: "/committee/rayhanul.jpg",
  },
  {
    id: 12,
    name: "Abul Hasan",
    designation: "Logistics Secretary",
    image: "/committee/abul.jpg",
  },
  {
    id: 13,
    name: "Mohammad Sami",
    designation: "Joint General Secretary",
    image: "/committee/sami.jpg",
  },
  {
    id: 14,
    name: "Israth Jahan",
    designation: "Joint General Secretary(Management)",
    image: "/committee/israth.jpg",
  },
  {
    id: 15,
    name: "Somaya Shikder",
    designation: "Lab Administrator",
    image: "/committee/somaya.jpg",
  },
  {
    id: 16,
    name: "Israt Jahan Habiba",
    designation: "Joint Organizing Secretary",
    image: "/committee/israt.jpg",
  },
  {
    id: 17,
    name: "Sompa Rani Biswas",
    designation: "Publication Secretary",
    image: "/committee/sompa.jpg",
  },
  {
    id: 18,
    name: "MD Nafis Shahriar Niloy",
    designation: "Archive Secretary",
    image: "/committee/nafis.jpg",
  },
  {
    id: 19,
    name: "Istahak Ahammed Emon",
    designation: "Advertising Secretary",
    image: "/committee/istahak.jpg",
  },
  {
    id: 20,
    name: "Ahasan Habib",
    designation: "Office Secretary",
    image: "/committee/ahasan.jpg",
  },
  {
    id: 21,
    name: "Nafiz Imtiaz Rafi",
    designation: "Industry Relations Secretary",
    image: "/committee/rafi.jpg",
  },
  {
    id: 22,
    name: "Kazi Ahsan Ahmed Akaid",
    designation: "Advertising Secretary",
    image: "/committee/abul.jpg",
  },
  {
    id: 23,
    name: "Jahirul Alam",
    designation: "Operations Secretary",
    image: "/committee/jahirul.jpg",
  },
  {
    id: 24,
    name: "Istiak Uddin Tusher",
    designation: "Strategy & Sponsorship Secretary",
    image: "/committee/istiak.jpg",
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
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:w-64 sm:h-64 w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center"
          >
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
        </div>
      </div>
    </section>
  );
}
