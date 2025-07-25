"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { StaggerContainer } from "@/components/stagger-container";
import { motion } from "framer-motion";

const advisorsAndModerators = [
  {
    id: 1,
    name: "Prof. Dr. Sajal Chandra Banik",
    designation: "Professor, ME",
    club_designation: "Chairman",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "baniksajal@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Prof. Dr. Quazi Delwar Hossain",
    designation: "Professor, EEE",
    club_designation: "Chief Moderator",
    image: "/advisors&moderators/Dr. Quazi Delwar Hossain sir.jpg",
    social: {
      email: "quazi@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Md. Aminul Islam",
    designation: "Associate Professor, ME",
    club_designation: "Moderator",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "aislam@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 4,
    name: "Prof. Dr. Md. Mamunur Roshid",
    designation: "Professor, ME",
    club_designation: "Moderator",
    image: "/advisors&moderators/Dr. Md. Mamunur Rashid sir(not sure).jpg",
    social: {
      email: "mamuncuet2003@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 5,
    name: "Monowar Wadud Hridoy",
    designation: "Assistant Professor, MIE",
    club_designation: "Moderator",
    image: "/advisors&moderators/Monowar Wadud Hridoy sir.jpg",
    social: {
      email: "hridoy@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 6,
    name: "Sanjeeb Roy",
    designation: "Lecturer, ME",
    club_designation: "Moderator",
    image: "/advisors&moderators/Sanjeeb Roy sir.jpg",
    social: {
      email: "sanjeeb@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 7,
    name: "Radheshyam Nath Jisu",
    designation: "Lecturer, ME",
    club_designation: "Moderator",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "radheshyam@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 8,
    name: "Wasif Abu Dujana",
    designation: "Lecturer, MSE",
    club_designation: "Moderator",
    image: "/advisors&moderators/Wasif Abu Dujana sir.jpg",
    social: {
      email: "wasif@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 9,
    name: "Eftekhar Hossain",
    designation: "Assistant Professor, ETE",
    club_designation: "Moderator",
    image: "/advisors&moderators/Eftekhar Hossain sir.jpg",
    social: {
      email: "eftekhar.hossain@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 10,
    name: "S. M. Fahim Faisal",
    designation: "Lecturer, MIE",
    club_designation: "Moderator",
    image: "/advisors&moderators/S. M. Fahim Faisal sir.jpg",
    social: {
      email: "fahimfaisal@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 11,
    name: "Prof. Dr. Jamal Uddin Ahamed",
    designation: "Professor, ME",
    club_designation: "Advisor",
    image: "/advisors&moderators/Dr. Jamal Uddin Ahmed sir.jpg",
    social: {
      email: "jamal@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 12,
    name: "Prof. Dr. Md. Sanaul Rabbi",
    designation: "Professor, ME",
    club_designation: "Advisor",
    image: "/advisors&moderators/Dr. Md. Sanaul Rabbi sir.jpg",
    social: {
      email: "rabbi@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 13,
    name: "Prof. Dr. Sampad Ghosh",
    designation: "Professor, EEE",
    club_designation: "Advisor",
    image: "/advisors&moderators/Dr. Sampad Ghosh sir.jpg",
    social: {
      email: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 14,
    name: "Prof. Dr. Mizanur Rahman",
    designation: "Professor, ME",
    club_designation: "Advisor",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 15,
    name: "Nursadul Mamun",
    designation: "Professor, ETE",
    club_designation: "Advisor",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
];

export function AdvisorAndModeratorSection() {
  return (
    <section className="py-24 bg-cream dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Our <span className="text-primary">Advisors & Moderators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Distinguished faculty members who guide and mentor our association
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          staggerDelay={0.2}
        >
          {advisorsAndModerators.map((advisorOrModerator) => (
            <motion.div
              key={advisorOrModerator.id}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ rotate: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center"
                    >
                      {/* <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <span className="text-xl">👨‍🏫</span>
                        </motion.div>
                        <span className="text-xs text-muted-foreground">
                          Faculty
                        </span>
                      </div> */}
                      <img
                        src={
                          advisorOrModerator.image ||
                          "/placeholder.svg?height=300&width=300"
                        }
                        alt={advisorOrModerator.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {advisorOrModerator.name}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {advisorOrModerator.designation}
                  </p>
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
                          className="hover:bg-primary hover:text-primary-foreground hover-transition"
                        >
                          <Icon className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
