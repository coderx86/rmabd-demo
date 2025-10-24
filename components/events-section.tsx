"use client";

import { useState, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  X,
  Bell,
  Star,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { StaggerContainer } from "@/components/stagger-container";
import { motion, AnimatePresence } from "framer-motion";
import { ImageCarousel } from "@/components/image-carousel";
import allEvents from "../data/events.json";

export function EventsSection() {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<(typeof allEvents)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showMoreButtonRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const setEventRef = useCallback((node: HTMLDivElement | null, id: number) => {
    if (node) {
      eventRefs.current.set(id, node);
    } else {
      eventRefs.current.delete(id);
    }
  }, []);

  // Sort events to prioritize upcoming events
  const sortedEvents = [...allEvents].sort((a, b) => {
    if (a.status === "upcoming" && b.status === "completed") return -1;
    if (a.status === "completed" && b.status === "upcoming") return 1;

    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (a.status === "upcoming") {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });

  const eventsToShow = showAllEvents ? sortedEvents : sortedEvents.slice(0, 3);

  const handleEventClick = (event: (typeof allEvents)[0]) => {
    if (event.hasDetailsPage) {
      window.location.href = "/events";
    } else {
      setSelectedEvent(event);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
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
    }
    return null;
  };

  const handleShowMoreToggle = () => {
    const newShowAllState = !showAllEvents;
    setShowAllEvents(newShowAllState);
    if (!newShowAllState) {
      setTimeout(() => {
        showMoreButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  const renderEventCard = (event: (typeof allEvents)[0], index: number) => {
    const isUpcoming = event.status === "upcoming";
    
    const cardContent = (
      <CardContent className="p-6 lg:py-8 lg:px-8 relative">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="text-center space-y-4 pt-8 pb-4">
            {isUpcoming && (
              <div className="flex justify-center mb-4">
                {getStatusBadge(event.status)}
              </div>
            )}
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className={`w-48 h-32 bg-gradient-to-br ${
                isUpcoming
                  ? "from-emerald-500/20 to-green-500/20 border border-emerald-300/30"
                  : "from-primary/20 to-accent/20"
              } rounded-lg flex items-center justify-center mx-auto`}
            >
              <img
                src={event.logo || "/placeholder.svg?height=300&width=300"}
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
                <Calendar className={`h-4 w-4 ${isUpcoming ? "text-emerald-500" : "text-primary"}`} />
                <span>{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {event.name}
              </h3>
              <p className="text-muted-foreground text-sm px-4">
                {event.description}
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleEventClick(event)}
                className={
                  isUpcoming
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl w-full max-w-xs"
                    : "group-hover:bg-accent w-full max-w-xs"
                }
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
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`w-64 h-32 bg-gradient-to-br ${
                    isUpcoming
                      ? "from-emerald-500/20 to-green-500/20 border border-emerald-300/30"
                      : "from-primary/20 to-accent/20"
                  } rounded-lg flex items-center justify-center`}
                >
                  <img
                    src={event.logo || "/placeholder.svg?height=300&width=300"}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                  <Calendar className={`h-5 w-5 ${isUpcoming ? "text-emerald-500" : "text-primary"}`} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2 truncate">
                  {event.name}
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-4 flex-shrink-0 min-w-[200px]">
              {isUpcoming && (
                <div className="self-end">{getStatusBadge(event.status)}</div>
              )}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => handleEventClick(event)}
                  className={
                    isUpcoming
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl px-6 py-3 font-medium whitespace-nowrap"
                      : "group-hover:bg-accent px-6 py-3 font-medium whitespace-nowrap"
                  }
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
    );

    if (isUpcoming) {
      return (
        <div className="relative">
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
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-emerald-500 to-green-600">
            <Card className="group hover-transition hover:shadow-xl bg-card border-0 rounded-xl relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 pointer-events-none" />
              {cardContent}
            </Card>
          </div>
        </div>
      );
    }

    return (
      <Card className="group hover-transition hover:shadow-lg hover:border-primary/50 bg-card border-border w-full relative overflow-hidden">
        {cardContent}
      </Card>
    );
  };

  return (
    <section className="py-24 bg-background w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events, competitions, and learning opportunities
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {eventsToShow.map((event, index) => (
            <motion.div
              key={event.id}
              ref={(node) => setEventRef(node, event.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {renderEventCard(event, index)}
            </motion.div>
          ))}
        </StaggerContainer>

        {allEvents.length > 3 && (
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleShowMoreToggle}
                variant="outline"
                size="lg"
                className="px-8 py-3 font-medium bg-transparent hover:bg-primary hover:text-primary-foreground border-2"
                ref={showMoreButtonRef}
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

      {/* Event Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEvent?.status === "upcoming" ? (
            // Upcoming Event Modal
            <>
              <DialogHeader className="text-center pb-0">
                <div className="flex justify-center mb-4">
                  {getStatusBadge("upcoming")}
                </div>
                <DialogTitle className="text-3xl font-bold text-center">
                  {selectedEvent?.name}
                </DialogTitle>
              </DialogHeader>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 mt-6"
              >
                {/* Event Logo */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-64 h-48 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center border-2 border-emerald-300/30 shadow-lg"
                  >
                    <img
                      src={selectedEvent.logo || "/placeholder.svg?height=300&width=300"}
                      alt={selectedEvent.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </motion.div>
                </div>

                {/* Event Date */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 bg-emerald-50 dark:bg-emerald-950/30 px-6 py-3 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold text-emerald-900 dark:text-emerald-100">
                      {selectedEvent.date}
                    </span>
                  </div>
                </div>

                {/* Stay Tuned Message */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 p-8 rounded-xl border-2 border-emerald-200 dark:border-emerald-800/50">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{
                        rotate: [0, 14, -8, 14, -4, 10, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                      }}
                      className="inline-block"
                    >
                      <Bell className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                      Stay Tuned!
                    </h3>
                    
                    <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                      This exciting event is coming soon! More details will be announced as we get closer to the date.
                    </p>

                    {/* Event Description */}
                    <div className="pt-4">
                      <p className="text-base text-foreground/80">
                        {selectedEvent.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Follow our social media channels for updates and announcements!
                  </p>
                </div>
              </motion.div>
            </>
          ) : (
            // Completed Event Modal
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  {selectedEvent?.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  {selectedEvent?.date}
                </DialogDescription>
              </DialogHeader>

              {selectedEvent?.details && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 mt-4"
                >
                  {/* About Event Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      About Event
                    </h3>
                    <div className="bg-muted/50 p-4 sm:p-6 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedEvent.details.description}
                      </p>
                    </div>
                  </div>

                  {/* Event Gallery Section */}
                  {selectedEvent.details.gallery && selectedEvent.details.gallery.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Event Gallery
                      </h3>
                      <ImageCarousel images={selectedEvent.details.gallery} />
                    </div>
                  )}
                </motion.div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}