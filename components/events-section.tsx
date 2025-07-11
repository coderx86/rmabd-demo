"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { StaggerContainer } from "@/components/stagger-container";
import { motion } from "framer-motion";

const allEvents = [
  {
    id: 1,
    name: "Techday 2025",
    date: "July 15, 2025",
    status: "upcoming",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Annual robotics competition featuring combat robots",
    hasDetailsPage: true,
  },
  {
    id: 2,
    name: "RoboWars 2024",
    date: "March 15, 2024",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Epic robotics battle competition with 50+ teams",
    hasDetailsPage: false,
    details: {
      location: "CUET Main Auditorium",
      participants: "52 teams from 15 universities",
      winner: "Team Phoenix - BUET",
      prizePool: "৳75,000",
      description:
        "RoboWars 2024 was our most ambitious robotics competition yet, featuring intense combat robot battles that pushed the boundaries of engineering creativity. Teams from across the country brought their most innovative designs to compete in multiple weight categories, showcasing cutting-edge technology and strategic combat techniques.",
      sponsors: [
        { name: "TechCorp Bangladesh", type: "Title Sponsor", logo: "🏢" },
        { name: "Innovation Labs", type: "Gold Sponsor", logo: "🥇" },
        { name: "RoboTech Solutions", type: "Silver Sponsor", logo: "🥈" },
        { name: "Engineering Hub", type: "Bronze Sponsor", logo: "🥉" },
        {
          name: "CUET Alumni Association",
          type: "Supporting Partner",
          logo: "🎓",
        },
      ],
      highlights: [
        "Record-breaking 52 teams participated",
        "First-ever international team from India",
        "Live streaming reached 10,000+ viewers",
        "3 different competition categories",
      ],
      gallery: [
        "Opening ceremony with 500+ attendees",
        "Intense robot battles in the arena",
        "Award ceremony and prize distribution",
        "Networking session with industry experts",
      ],
    },
  },
  {
    id: 3,
    name: "Tech Innovation Summit 2023",
    date: "November 20, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Showcase of latest technological innovations and startups",
    hasDetailsPage: false,
    details: {
      location: "CUET Conference Hall",
      participants: "200+ students and professionals",
      winner: "Best Innovation: Smart Agriculture System",
      prizePool: "৳30,000",
      description:
        "The Tech Innovation Summit brought together brilliant minds to showcase groundbreaking technological solutions addressing real-world challenges. From AI-powered healthcare systems to sustainable energy solutions, participants demonstrated the future of technology innovation in Bangladesh.",
      sponsors: [
        { name: "Future Tech BD", type: "Title Sponsor", logo: "🚀" },
        { name: "StartupBD", type: "Gold Sponsor", logo: "💼" },
        { name: "Innovation Fund", type: "Silver Sponsor", logo: "💰" },
        { name: "Tech Incubator", type: "Supporting Partner", logo: "🏭" },
      ],
      highlights: [
        "15 innovative projects showcased",
        "Industry experts as judges",
        "Startup pitch competition",
        "Technology exhibition",
      ],
      gallery: [
        "Project demonstrations and presentations",
        "Industry expert panel discussions",
        "Startup pitch sessions",
        "Technology exhibition booths",
      ],
    },
  },
  {
    id: 4,
    name: "Mechatronics Workshop 2023",
    date: "September 10, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Hands-on workshop on mechatronics systems and applications",
    hasDetailsPage: false,
    details: {
      location: "RMA Lab, CUET",
      participants: "80 students",
      winner: "Best Project: Automated Sorting System",
      prizePool: "৳15,000",
      description:
        "An intensive hands-on workshop designed to bridge the gap between theoretical knowledge and practical application in mechatronics. Participants learned to integrate mechanical, electrical, and software systems to create intelligent automated solutions.",
      sponsors: [
        { name: "AutoTech Industries", type: "Title Sponsor", logo: "⚙️" },
        { name: "Mechatronics BD", type: "Gold Sponsor", logo: "🔧" },
        { name: "Arduino Bangladesh", type: "Technology Partner", logo: "🔌" },
      ],
      highlights: [
        "3-day intensive workshop",
        "Hands-on Arduino and sensor projects",
        "Industry expert instructors",
        "Certificate distribution",
      ],
      gallery: [
        "Students working on Arduino projects",
        "Sensor integration demonstrations",
        "Final project presentations",
        "Certificate award ceremony",
      ],
    },
  },
  {
    id: 5,
    name: "Drone Racing Championship 2023",
    date: "August 5, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "High-speed drone racing competition with obstacle courses",
    hasDetailsPage: false,
    details: {
      location: "CUET Sports Complex",
      participants: "35 teams from 12 universities",
      winner: "Team SkyHawks - CUET",
      prizePool: "৳40,000",
      description:
        "The first-ever drone racing championship in the region brought together skilled pilots and custom-built racing drones for an adrenaline-pumping competition. Teams navigated complex obstacle courses at breakneck speeds, showcasing precision flying and engineering excellence.",
      sponsors: [
        { name: "AeroTech BD", type: "Title Sponsor", logo: "🚁" },
        { name: "Drone Hub", type: "Gold Sponsor", logo: "🎯" },
        { name: "Flight Systems", type: "Silver Sponsor", logo: "✈️" },
        { name: "Racing League BD", type: "Event Partner", logo: "🏁" },
      ],
      highlights: [
        "First drone racing event in the region",
        "Custom-built obstacle courses",
        "Live commentary and streaming",
        "Drone building workshop included",
      ],
      gallery: [
        "High-speed drone races through obstacles",
        "Drone building and customization sessions",
        "Pilot training and safety briefings",
        "Victory celebration and awards ceremony",
      ],
    },
  },
  {
    id: 6,
    name: "IoT Solutions Hackathon 2023",
    date: "June 18, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "48-hour hackathon focused on Internet of Things solutions",
    hasDetailsPage: false,
    details: {
      location: "CUET Computer Lab",
      participants: "120 participants in 30 teams",
      winner: "Smart City Solutions - Mixed Team",
      prizePool: "৳25,000",
      description:
        "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
      sponsors: [
        { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
        { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
        { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
        { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
      ],
      highlights: [
        "48-hour non-stop coding marathon",
        "Industry mentors and guidance",
        "Real-world problem statements",
        "Prototype development and testing",
      ],
      gallery: [
        "Teams working on IoT prototypes",
        "Mentor guidance and code reviews",
        "Final presentation and demos",
        "Networking session with industry experts",
      ],
    },
  },
];

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof allEvents)[0] | null
  >(null);
  const [showAllEvents, setShowAllEvents] = useState(false);
  const lastVisibleEventRef = useRef<HTMLDivElement>(null);

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
      // Open modal for completed events
      setSelectedEvent(event);
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
          {/* Main badge */}
          {/* <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative bg-gradient-to-r from-slate-600 via-gray-600 to-slate-700 text-white px-4 py-2 rounded-full shadow-lg border border-slate-400/30 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Clock className="h-4 w-4" />
              </motion.div>
              <span className="font-semibold text-sm tracking-wide">COMPLETED</span>
            </div>

            {/* Subtle pattern overlay 
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-50" />
          </motion.div> */}

          {/* Decorative corner accent */}
          {/* <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-sm"
          /> */}
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
        lastVisibleEventRef.current?.scrollIntoView({
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
              ref={index === 2 ? lastVisibleEventRef : null} // Reference to the 3rd event (last visible when collapsed)
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
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center mx-auto border border-emerald-300/30"
                            >
                              <span className="text-2xl">🤖</span>
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
                                  whileHover={{ rotate: 360, scale: 1.1 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center border border-emerald-300/30"
                                >
                                  <span className="text-2xl">🤖</span>
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
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto"
                        >
                          <span className="text-2xl">🤖</span>
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
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center"
                            >
                              <span className="text-2xl">🤖</span>
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

      {/* Event Details Modal for Completed Events */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[95vh] overflow-y-auto p-0">
          {selectedEvent && selectedEvent.details && (
            <>
              <DialogHeader className="p-3 sm:p-4 md:p-6 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 pr-8 sm:pr-12">
                  <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight flex-1 min-w-0">
                    {selectedEvent.name}
                  </DialogTitle>
                  <div className="flex-shrink-0 sm:mt-1">
                    <Badge
                      variant="secondary"
                      className="bg-gray-500 text-white text-xs sm:text-sm whitespace-nowrap"
                    >
                      Completed
                    </Badge>
                  </div>
                </div>
              </DialogHeader>

              <div className="p-4 sm:p-6 space-y-6">
                {/* Event Hero */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 sm:h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground px-4">
                      {selectedEvent.name}
                    </h3>
                  </div>
                </div>

                {/* Event Description */}
                <div className="bg-muted/50 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    About This Event
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedEvent.details.description}
                  </p>
                </div>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Date</p>
                        <p className="text-muted-foreground">
                          {selectedEvent.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">
                          Location
                        </p>
                        <p className="text-muted-foreground">
                          {selectedEvent.details.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">
                          Participants
                        </p>
                        <p className="text-muted-foreground">
                          {selectedEvent.details.participants}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Trophy className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Winner</p>
                        <p className="text-muted-foreground">
                          {selectedEvent.details.winner}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prize Pool */}
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Total Prize Pool
                  </h3>
                  <p className="text-2xl font-bold text-foreground">
                    {selectedEvent.details.prizePool}
                  </p>
                </div>

                {/* Sponsors Section */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    Event Sponsors & Partners
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedEvent.details.sponsors.map((sponsor, index) => (
                      <div
                        key={index}
                        className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                      >
                        <div className="text-2xl mb-2">{sponsor.logo}</div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {sponsor.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {sponsor.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Highlights */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Event Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedEvent.details.highlights.map(
                      (highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-muted rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-foreground">{highlight}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Gallery Section */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Event Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedEvent.details.gallery.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-primary/10 to-accent/10 h-32 rounded-lg flex items-center justify-center"
                      >
                        <div className="text-center p-4">
                          <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg">📸</span>
                          </div>
                          <p className="text-xs text-foreground text-center">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
