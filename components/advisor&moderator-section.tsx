"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { StaggerContainer } from "@/components/stagger-container";
import { motion } from "framer-motion";
import advisorsAndModerators from "../data/advisorsAndModerators.json";

export function AdvisorAndModeratorSection() {
  return (
    <section className="py-24 bg-cream dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-6">
            Our <span className="text-primary">Advisors & Moderators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Distinguished faculty members who guide and mentor our association
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          staggerDelay={0.2}
        >
          {advisorsAndModerators.map((advisorOrModerator) => (
            <motion.div
              key={advisorOrModerator.id}
              className="h-full"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full flex flex-col">
                <CardContent className="p-5 text-center flex flex-col flex-1 justify-between">
                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <motion.div
                        whileHover={{ rotate: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-3 border-primary/20 flex items-center justify-center"
                      >
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
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {advisorOrModerator.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {advisorOrModerator.designation}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3 mt-5">
                    {[Mail, Linkedin, Facebook].map((Icon, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground hover-transition"
                        >
                          <Icon className="h-3.5 w-3.5" />
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