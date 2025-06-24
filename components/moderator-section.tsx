import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const moderators = [
  {
    id: 1,
    name: "Ahmed Hassan",
    designation: "President",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "ahmed@rma.cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Fatima Khan",
    designation: "Vice President",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "fatima@rma.cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Rafiq Islam",
    designation: "General Secretary",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "rafiq@rma.cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
]

export function ModeratorSection() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Our <span className="text-primary">Moderators</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders who drive our association forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {moderators.map((moderator) => (
            <Card key={moderator.id} className="group hover-transition hover:shadow-lg bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <img
                    src={moderator.image || "/placeholder.svg"}
                    alt={moderator.name}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">{moderator.name}</h3>
                <p className="text-muted-foreground mb-8 font-body">{moderator.designation}</p>
                <div className="flex justify-center space-x-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground hover-transition"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground hover-transition"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground hover-transition"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
