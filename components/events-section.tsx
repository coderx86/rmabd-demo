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

// const allEvents = [
//   {
//     id: 1,
//     name: "Techday 2025",
//     date: "July 15, 2025",
//     status: "upcoming",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "Annual robotics competition featuring combat robots",
//     hasDetailsPage: true,
//   },
//   {
//     id: 2,
//     name: "CSE Feni",
//     date: "March 15, 2024",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "Epic robotics battle competition with 50+ teams",
//     hasDetailsPage: false,
//     details: {
//       location: "CUET Main Auditorium",
//       participants: "52 teams from 15 universities",
//       winner: "Team Phoenix - BUET",
//       prizePool: "৳75,000",
//       description:
//         "RoboWars 2024 was our most ambitious robotics competition yet, featuring intense combat robot battles that pushed the boundaries of engineering creativity. Teams from across the country brought their most innovative designs to compete in multiple weight categories, showcasing cutting-edge technology and strategic combat techniques.",
//       sponsors: [
//         { name: "TechCorp Bangladesh", type: "Title Sponsor", logo: "🏢" },
//         { name: "Innovation Labs", type: "Gold Sponsor", logo: "🥇" },
//         { name: "RoboTech Solutions", type: "Silver Sponsor", logo: "🥈" },
//         { name: "Engineering Hub", type: "Bronze Sponsor", logo: "🥉" },
//         {
//           name: "CUET Alumni Association",
//           type: "Supporting Partner",
//           logo: "🎓",
//         },
//       ],
//       highlights: [
//         "Record-breaking 52 teams participated",
//         "First-ever international team from India",
//         "Live streaming reached 10,000+ viewers",
//         "3 different competition categories",
//       ],
//       gallery: [
//         "events/CSE Feni/cover.jpg",
//         "events/CSE Feni/1.jpg",
//         "events/CSE Feni/2.jpg",
//       ],
//     },
//   },
//   {
//     id: 3,
//     name: "Exp 24",
//     date: "November 20, 2023",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "Showcase of latest technological innovations and startups",
//     hasDetailsPage: false,
//     details: {
//       location: "CUET Conference Hall",
//       participants: "200+ students and professionals",
//       winner: "Best Innovation: Smart Agriculture System",
//       prizePool: "৳30,000",
//       description:
//         "The Tech Innovation Summit brought together brilliant minds to showcase groundbreaking technological solutions addressing real-world challenges. From AI-powered healthcare systems to sustainable energy solutions, participants demonstrated the future of technology innovation in Bangladesh.",
//       sponsors: [
//         { name: "Future Tech BD", type: "Title Sponsor", logo: "🚀" },
//         { name: "StartupBD", type: "Gold Sponsor", logo: "💼" },
//         { name: "Innovation Fund", type: "Silver Sponsor", logo: "💰" },
//         { name: "Tech Incubator", type: "Supporting Partner", logo: "🏭" },
//       ],
//       highlights: [
//         "15 innovative projects showcased",
//         "Industry experts as judges",
//         "Startup pitch competition",
//         "Technology exhibition",
//       ],
//       gallery: [
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",
//         "events/EXP 24/",

//       ],

//     },
//   },
//   {
//     id: 4,
//     name: "Hands on Arduino",
//     date: "September 10, 2023",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "Hands-on workshop on mechatronics systems and applications",
//     hasDetailsPage: false,
//     details: {
//       location: "RMA Lab, CUET",
//       participants: "80 students",
//       winner: "Best Project: Automated Sorting System",
//       prizePool: "৳15,000",
//       description:
//         "An intensive hands-on workshop designed to bridge the gap between theoretical knowledge and practical application in mechatronics. Participants learned to integrate mechanical, electrical, and software systems to create intelligent automated solutions.",
//       sponsors: [
//         { name: "AutoTech Industries", type: "Title Sponsor", logo: "⚙️" },
//         { name: "Mechatronics BD", type: "Gold Sponsor", logo: "🔧" },
//         { name: "Arduino Bangladesh", type: "Technology Partner", logo: "🔌" },
//       ],
//       highlights: [
//         "3-day intensive workshop",
//         "Hands-on Arduino and sensor projects",
//         "Industry expert instructors",
//         "Certificate distribution",
//       ],
//       gallery: [
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//       ],
//     },
//   },
//   {
//     id: 5,
//     name: "PCIU LFR",
//     date: "August 5, 2023",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "High-speed drone racing competition with obstacle courses",
//     hasDetailsPage: false,
//     details: {
//       location: "CUET Sports Complex",
//       participants: "35 teams from 12 universities",
//       winner: "Team SkyHawks - CUET",
//       prizePool: "৳40,000",
//       description:
//         "The first-ever drone racing championship in the region brought together skilled pilots and custom-built racing drones for an adrenaline-pumping competition. Teams navigated complex obstacle courses at breakneck speeds, showcasing precision flying and engineering excellence.",
//       sponsors: [
//         { name: "AeroTech BD", type: "Title Sponsor", logo: "🚁" },
//         { name: "Drone Hub", type: "Gold Sponsor", logo: "🎯" },
//         { name: "Flight Systems", type: "Silver Sponsor", logo: "✈️" },
//         { name: "Racing League BD", type: "Event Partner", logo: "🏁" },
//       ],
//       highlights: [
//         "First drone racing event in the region",
//         "Custom-built obstacle courses",
//         "Live commentary and streaming",
//         "Drone building workshop included",
//       ],
//       gallery: [
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//       ],
//     },
//   },
//   {
//     id: 6,
//     name: "Tech Day 22",
//     date: "June 18, 2023",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "48-hour hackathon focused on Internet of Things solutions",
//     hasDetailsPage: false,
//     details: {
//       location: "CUET Computer Lab",
//       participants: "120 participants in 30 teams",
//       winner: "Smart City Solutions - Mixed Team",
//       prizePool: "৳25,000",
//       description:
//         "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
//       sponsors: [
//         { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
//         { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
//         { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
//         { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
//       ],
//       highlights: [
//         "48-hour non-stop coding marathon",
//         "Industry mentors and guidance",
//         "Real-world problem statements",
//         "Prototype development and testing",
//       ],
//       gallery: [
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//       ],
//     },
//   },
//   {
//     id: 7,
//     name: "Tech Day 21",
//     date: "June 18, 2023",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "48-hour hackathon focused on Internet of Things solutions",
//     hasDetailsPage: false,
//     details: {
//       location: "CUET Computer Lab",
//       participants: "120 participants in 30 teams",
//       winner: "Smart City Solutions - Mixed Team",
//       prizePool: "৳25,000",
//       description:
//         "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
//       sponsors: [
//         { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
//         { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
//         { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
//         { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
//       ],
//       highlights: [
//         "48-hour non-stop coding marathon",
//         "Industry mentors and guidance",
//         "Real-world problem statements",
//         "Prototype development and testing",
//       ],
//       gallery: [
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//       ],
//     },
//   },
//   {
//     id: 8,
//     name: "Tech Day 24",
//     date: "June 18, 2023",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "48-hour hackathon focused on Internet of Things solutions",
//     hasDetailsPage: false,
//     details: {
//       location: "CUET Computer Lab",
//       participants: "120 participants in 30 teams",
//       winner: "Smart City Solutions - Mixed Team",
//       prizePool: "৳25,000",
//       description:
//         "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
//       sponsors: [
//         { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
//         { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
//         { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
//         { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
//       ],
//       highlights: [
//         "48-hour non-stop coding marathon",
//         "Industry mentors and guidance",
//         "Real-world problem statements",
//         "Prototype development and testing",
//       ],
//       gallery: [
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//       ],
//     },
//   },
//   {
//     id: 9,
//     name: "Workshop CEUSC",
//     date: "June 18, 2023",
//     status: "completed",
//     logo: "/placeholder.svg?height=80&width=80",
//     description: "48-hour hackathon focused on Internet of Things solutions",
//     hasDetailsPage: false,
//     details: {
//       location: "CUET Computer Lab",
//       participants: "120 participants in 30 teams",
//       winner: "Smart City Solutions - Mixed Team",
//       prizePool: "৳25,000",
//       description:
//         "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
//       sponsors: [
//         { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
//         { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
//         { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
//         { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
//       ],
//       highlights: [
//         "48-hour non-stop coding marathon",
//         "Industry mentors and guidance",
//         "Real-world problem statements",
//         "Prototype development and testing",
//       ],
//       gallery: [
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//         "/logo/RMA logo.jpg",
//       ],
//     },
//   },
// ];

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
          {/* <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold tracking-wide">
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
              className="mr-2"
            >
              <Clock className="h-4 w-4" />
            </motion.div>
            COMPLETED
          </Badge> */}
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
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <Calendar className="h-5 w-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">Date</p>
                                <p className="text-muted-foreground">{event.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <MapPin className="h-5 w-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">Location</p>
                                <p className="text-muted-foreground">{event.details.location}</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <Users className="h-5 w-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">Participants</p>
                                <p className="text-muted-foreground">{event.details.participants}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Trophy className="h-5 w-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">Winner</p>
                                <p className="text-muted-foreground">{event.details.winner}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-primary/10 p-4 rounded-lg text-center mb-6">
                          <h3 className="text-lg font-semibold text-primary mb-2">Total Prize Pool</h3>
                          <p className="text-2xl font-bold text-foreground">{event.details.prizePool}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                            <Building2 className="h-5 w-5 text-primary mr-2" />
                            Event Sponsors & Partners
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {event.details.sponsors.map((sponsor, idx) => (
                              <div
                                key={idx}
                                className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                              >
                                <div className="text-2xl mb-2">{sponsor.logo}</div>
                                <h4 className="font-semibold text-foreground text-sm mb-1">{sponsor.name}</h4>
                                <p className="text-xs text-muted-foreground">{sponsor.type}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold text-foreground mb-4">Event Highlights</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {event.details.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-foreground">{highlight}</p>
                              </div>
                            ))}
                          </div>
                        </div> */}
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
