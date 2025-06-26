"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, Download, Zap, Target, Cpu } from "lucide-react"

const segments = [
  {
    id: 1,
    name: "Combat Robots",
    icon: Zap,
    description: "Build and battle with your combat robots in an arena showdown",
    prize: "৳20,000",
    details: {
      date: "March 15, 2024",
      duration: "2 hours",
      location: "Main Arena",
      instructions:
        "Teams must build autonomous or remote-controlled combat robots weighing no more than 3kg. Robots will compete in elimination rounds until a champion is crowned. Safety protocols must be strictly followed.",
      deadline: "March 10, 2024",
    },
  },
  {
    id: 2,
    name: "Line Following",
    icon: Target,
    description: "Program your robot to follow a complex line course with precision",
    prize: "৳15,000",
    details: {
      date: "March 15, 2024",
      duration: "1.5 hours",
      location: "Tech Lab",
      instructions:
        "Robots must autonomously follow a black line on white surface through various challenges including curves, intersections, and obstacles. Fastest completion time wins.",
      deadline: "March 12, 2024",
    },
  },
  {
    id: 3,
    name: "Maze Solver",
    icon: Cpu,
    description: "Navigate through complex mazes using advanced algorithms",
    prize: "৳10,000",
    details: {
      date: "March 16, 2024",
      duration: "2.5 hours",
      location: "Competition Hall",
      instructions:
        "Robots must solve increasingly complex mazes using various algorithms. Points awarded for speed and efficiency. Multiple maze configurations will be tested.",
      deadline: "March 13, 2024",
    },
  },
]

export function EventSegments() {
  const [selectedSegment, setSelectedSegment] = useState<(typeof segments)[0] | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Event <span className="text-primary">Segments</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Choose your competition category and showcase your robotics skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {segments.map((segment) => (
            <Card
              key={segment.id}
              className="group hover-transition hover:shadow-lg bg-card border-border overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center">
                  <segment.icon className="h-16 w-16 text-primary" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Total Prize Money: {segment.prize}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">{segment.name}</h3>
                  <p className="text-muted-foreground mb-6 font-body">{segment.description}</p>
                  <div className="flex space-x-3">
                    <Button className="flex-1">Register</Button>
                    <Button variant="outline" className="flex-1" onClick={() => setSelectedSegment(segment)}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Modal */}
      {/* Modal */}
      <Dialog open={!!selectedSegment} onOpenChange={() => setSelectedSegment(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[95vh] overflow-y-auto p-0">
          {selectedSegment && (
            <>
              <DialogHeader className="p-4 sm:p-6 border-b border-border">
                <DialogTitle className="text-xl sm:text-2xl font-bold font-heading pr-8">
                  {selectedSegment.name}
                </DialogTitle>
              </DialogHeader>

              <div className="p-4 sm:p-6 space-y-6">
                {/* Hero Section with Icon */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 sm:h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <selectedSegment.icon className="h-16 w-16 sm:h-20 sm:w-20 text-primary mx-auto mb-4" />
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground font-heading px-4">
                      {selectedSegment.name}
                    </h3>
                  </div>
                </div>

                {/* Details Line */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-body">{selectedSegment.details.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-body">{selectedSegment.details.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-body">{selectedSegment.details.location}</span>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 font-heading">Instructions</h3>
                  <div className="bg-muted p-3 sm:p-4 rounded-lg">
                    <p className="text-light-black dark:text-light-white leading-relaxed font-body text-sm sm:text-base">
                      {selectedSegment.details.instructions}
                    </p>
                  </div>
                </div>

                {/* Registration Deadline */}
                <div className="bg-primary/10 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 font-heading">
                    Registration Deadline
                  </h3>
                  <p className="text-foreground font-body text-sm sm:text-base">{selectedSegment.details.deadline}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <Button size="lg" className="w-full sm:flex-1 text-sm sm:text-base">
                    Register Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:flex-1 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Rulebook</span>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>{" "}
    </section>
  )
}
