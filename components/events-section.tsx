"use client";

import { useState, useRef, useCallback } from "react"; // Import useCallback
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ArrowRight,
  MapPin,
  Users,
  Trophy,
  Sparkles,
  Clock,
  ChevronDown,
  ChevronUp,
  Building2,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { StaggerContainer } from "@/components/stagger-container";
import { motion } from "framer-motion";
import { ImageCarousel } from "@/components/image-carousel";

// app/events/page.js (App Router) or pages/events.js (Pages Router)
import allEvents from "../data/events.json";


export function EventsSection() {
  const [expandedEventDetails, setExpandedEventDetails] = useState<
    Record<number, boolean>
  >({}); // State to control visibility of details
  const [showAllEvents, setShowAllEvents] = useState(false);
  // Renamed this ref to be more descriptive of its primary use
  const showMoreButtonRef = useRef<HTMLDivElement>(null);

  // Ref map to store references to each event card
  const eventRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  // Callback to set refs for each event card
  const setEventRef = useCallback((node: HTMLDivElement | null, id: number) => {
    if (node) {
      eventRefs.current.set(id, node);
    } else {
      eventRefs.current.delete(id);
    }
  }, []);

  // Sort events to prioritize upcoming events
  const sortedEvents = [...allEvents].sort((a, b) => {
    // First, sort by status (upcoming first)
    if (a.status === "upcoming" && b.status === "completed") return -1;
    if (a.status === "completed" && b.status === "upcoming") return 1;

    // Then sort by date (newest first for upcoming, most recent first for completed)
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (a.status === "upcoming") {
      return dateA.getTime() - dateB.getTime(); // Earliest upcoming first
    } else {
      return dateB.getTime() - dateA.getTime(); // Most recent completed first
    }
  });

  // Show only first 3 events unless "Show More" is clicked
  const eventsToShow = showAllEvents ? sortedEvents : sortedEvents.slice(0, 3);

  const handleEventClick = (event: (typeof allEvents)[0]) => {
    if (event.hasDetailsPage) {
      // Navigate to events page for upcoming events
      window.location.href = "/events";
    } else {
      const isCurrentlyExpanded = expandedEventDetails[event.id];
      setExpandedEventDetails((prev) => ({
        ...prev,
        [event.id]: !isCurrentlyExpanded,
      }));

      // If the section is currently expanded and we are collapsing it, scroll to the event card
      if (isCurrentlyExpanded) {
        setTimeout(() => {
          eventRefs.current.get(event.id)?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Scroll to the top of the event card
          });
        }, 300); // Small delay to allow collapse animation to start
      }
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === "upcoming") {
      return (
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="relative"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-sm"
          />
          {/* Main badge */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg border border-emerald-300/50 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              <span className="font-bold text-sm tracking-wide">UPCOMING</span>
            </div>
            {/* Shine effect */}
            <motion.div
              animate={{
                x: [-100, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial={{ scale: 0, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
          className="relative"
        >
        </motion.div>
      );
    }
  };

  const handleShowMoreToggle = () => {
    const newShowAllState = !showAllEvents;
    setShowAllEvents(newShowAllState);
    // If we're hiding events (showing less), scroll to the last visible event
    if (!newShowAllState) {
      setTimeout(() => {
        // This ref is now specifically for the "Show More/Less" button
        // The original `lastVisibleEventRef` was used for scrolling to the 3rd event when collapsing the main list.
        // Since the user wants to scroll to the "Show More/Less" button, we'll use `showMoreButtonRef` here.
        showMoreButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  return (
    <section className="py-24 bg-background w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events, competitions, and learning
            opportunities
          </p>
        </AnimatedSection>
        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {eventsToShow.map((event, index) => (
            <motion.div
              key={event.id}
              ref={(node) => setEventRef(node, event.id)} // Assign ref to each event card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {event.status === "upcoming" ? (
                <div className="relative">
                  {/* Animated blinking border wrapper */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 p-[3px] rounded-xl bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 shadow-lg shadow-emerald-500/25"
                  />
                  {/* Static border base */}
                  <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-emerald-500 to-green-600">
                    <Card className="group hover-transition hover:shadow-xl bg-card border-0 rounded-xl relative z-10 overflow-hidden">
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 pointer-events-none" />
                      <CardContent className="p-6 lg:py-8 lg:px-8 relative">
                        {/* Mobile Layout */}
                        <div className="block lg:hidden">
                          <div className="text-center space-y-4 pt-8 pb-4">
                            {/* Status Badge - Centered on mobile */}
                            <div className="flex justify-center mb-4">
                              {getStatusBadge(event.status)}
                            </div>
                            {/* Event Logo */}
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                              className="w-48 h-32 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center mx-auto border border-emerald-300/30"
                            >
                              <img
                                src={
                                  event.logo ||
                                  "/placeholder.svg?height=300&width=300"
                                }
                                alt={event.name}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            {/* Event Details */}
                            <div>
                              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
                                <Calendar className="h-4 w-4 text-emerald-500" />
                                <span>{event.date}</span>
                              </div>
                              <h3 className="text-xl font-semibold text-foreground mb-2">
                                {event.name}
                              </h3>
                              <p className="text-muted-foreground text-sm px-4">
                                {event.description}
                              </p>
                            </div>
                            {/* Action Button */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                onClick={() => handleEventClick(event)}
                                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl w-full max-w-xs"
                              >
                                <span className="flex items-center justify-center space-x-2">
                                  <span>Learn More</span>
                                  <ArrowRight className="h-4 w-4" />
                                </span>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                        {/* Desktop Layout */}
                        <div className="hidden lg:block">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-8 flex-1 min-w-0 pr-8">
                              {/* Event Logo */}
                              <div className="flex-shrink-0">
                                <motion.div
                                  whileHover={{ scale: 1.2 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-64 h-32 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center border border-emerald-300/30"
                                >
                                  <img
                                    src={
                                      event.logo ||
                                      "/placeholder.svg?height=300&width=300"
                                    }
                                    alt={event.name}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              </div>
                              {/* Event Details */}
                              <div className="flex-grow min-w-0">
                                <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                                  <Calendar className="h-5 w-5 text-emerald-500" />
                                  <span>{event.date}</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground mb-2 truncate">
                                  {event.name}
                                </h3>
                                <p className="text-muted-foreground">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                            {/* Right side with Status Badge and Button */}
                            <div className="flex flex-col items-end space-y-4 flex-shrink-0 min-w-[200px]">
                              {/* Status Badge */}
                              <div className="self-end">
                                {getStatusBadge(event.status)}
                              </div>
                              {/* Action Button */}
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  onClick={() => handleEventClick(event)}
                                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl px-6 py-3 font-medium whitespace-nowrap"
                                >
                                  <span className="flex items-center space-x-2">
                                    <span>Learn More</span>
                                    <ArrowRight className="h-4 w-4" />
                                  </span>
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ) : (
                <Card className="group hover-transition hover:shadow-lg hover:border-primary/50 bg-card border-border w-full relative overflow-hidden">
                  <CardContent className="p-6 lg:py-8 lg:px-8">
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                      <div className="text-center space-y-4 pt-8 pb-4">
                        {/* Status Badge - Centered on mobile */}
                        <div className="flex justify-center mb-4">
                          {getStatusBadge(event.status)}
                        </div>
                        {/* Event Logo */}
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="w-48 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto"
                        >
                          <img
                            src={
                              event.logo ||
                              "/placeholder.svg?height=300&width=300"
                            }
                            alt={event.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        {/* Event Details */}
                        <div>
                          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {event.name}
                          </h3>
                          <p className="text-muted-foreground text-sm px-4">
                            {event.description}
                          </p>
                        </div>
                        {/* Action Button */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            onClick={() => handleEventClick(event)}
                            className="group-hover:bg-accent w-full max-w-xs"
                          >
                            <span className="flex items-center justify-center space-x-2">
                              <span>
                                {expandedEventDetails[event.id]
                                  ? "Show Less Details"
                                  : "Learn More"}
                              </span>
                              {expandedEventDetails[event.id] ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </span>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                    {/* Desktop Layout */}
                    <div className="hidden lg:block">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8 flex-1 min-w-0 pr-8">
                          {/* Event Logo */}
                          <div className="flex-shrink-0">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                              className="w-64 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center"
                            >
                              <img
                                src={
                                  event.logo ||
                                  "/placeholder.svg?height=300&width=300"
                                }
                                alt={event.name}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          </div>
                          {/* Event Details */}
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                              <Calendar className="h-5 w-5 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-2 truncate">
                              {event.name}
                            </h3>
                            <p className="text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                        </div>
                        {/* Right side with Status Badge and Button */}
                        <div className="flex flex-col items-end space-y-4 flex-shrink-0 min-w-[200px]">
                          {/* Status Badge */}
                          <div className="self-end">
                            {getStatusBadge(event.status)}
                          </div>
                          {/* Action Button */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              onClick={() => handleEventClick(event)}
                              className="group-hover:bg-accent px-6 py-3 font-medium whitespace-nowrap"
                            >
                              <span className="flex items-center space-x-2">
                                <span>
                                  {expandedEventDetails[event.id]
                                    ? "Show Less Details"
                                    : "Learn More"}
                                </span>
                                {expandedEventDetails[event.id] ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </span>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  {/* Event Details and Gallery, conditionally rendered directly */}
                  {event.details && expandedEventDetails[event.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 lg:px-8 pb-6 pt-4 overflow-hidden space-y-8" // Added space-y-8 for spacing
                    >
                      {/* About Event Section */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                          About Event
                        </h3>
                        <div className="bg-muted/50 p-4 sm:p-6 rounded-lg mb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {event.details.description}
                          </p>
                        </div>
                      </div>

                      {/* Event Gallery Section */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                          Event Gallery
                        </h3>
                        <ImageCarousel images={event.details.gallery} />
                      </div>

                      {/* Show Less Details Button */}
                      <div className="flex justify-center mt-8">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            onClick={() => handleEventClick(event)}
                            variant="outline"
                            size="lg"
                            className="px-8 py-3 font-medium bg-transparent hover:bg-primary hover:text-primary-foreground border-2"
                          >
                            <span className="flex items-center space-x-2">
                              <span>Show Less Details</span>
                              <ChevronUp className="h-4 w-4" />
                            </span>
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
        {/* Show More/Less Button */}
        {allEvents.length > 3 && (
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleShowMoreToggle}
                variant="outline"
                size="lg"
                className="px-8 py-3 font-medium bg-transparent hover:bg-primary hover:text-primary-foreground border-2"
                ref={showMoreButtonRef} // Assign the ref here
              >
                <span className="flex items-center space-x-2">
                  <span>
                    {showAllEvents
                      ? `Show Less Events`
                      : `Show More Events (${allEvents.length - 3} more)`}
                  </span>
                  {showAllEvents ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </span>
              </Button>
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
