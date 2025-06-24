import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    name: "RoboWars 2024",
    date: "March 15, 2024",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Annual robotics competition featuring combat robots",
  },
  {
    id: 2,
    name: "Tech Innovation Summit",
    date: "April 22, 2024",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Showcase of latest technological innovations",
  },
  {
    id: 3,
    name: "Mechatronics Workshop",
    date: "May 10, 2024",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Hands-on workshop on mechatronics systems",
  },
]

export function EventsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events, competitions, and learning opportunities
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group hover-transition hover:shadow-lg hover:border-primary/50 bg-card border-border"
            >
              <CardContent className="p-6">
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  <div className="text-center space-y-4">
                    {/* Event Logo */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-2xl">🤖</span>
                    </div>

                    {/* Event Details */}
                    <div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-body">{event.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">{event.name}</h3>
                      <p className="text-muted-foreground font-body text-sm">{event.description}</p>
                    </div>

                    {/* Action Button */}
                    <Button asChild className="group-hover:bg-accent w-full">
                      <Link href="/events" className="flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex lg:items-center lg:justify-between">
                  <div className="flex items-center space-x-8">
                    {/* Event Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🤖</span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="font-body">{event.date}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2 font-heading">{event.name}</h3>
                      <p className="text-muted-foreground font-body">{event.description}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <Button asChild className="group-hover:bg-accent px-6 py-3 font-medium">
                      <Link href="/events" className="flex items-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
