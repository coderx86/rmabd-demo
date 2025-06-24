import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const advisors = [
  {
    id: 1,
    name: "Dr. Mohammad Rahman",
    designation: "Professor, Mechanical Engineering",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "rahman@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Dr. Fatima Ahmed",
    designation: "Associate Professor, EEE",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      email: "fatima@cuet.ac.bd",
      linkedin: "#",
      facebook: "#",
    },
  },
]

export function AdvisorSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Our <span className="text-primary">Advisors</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Distinguished faculty members who guide and mentor our association
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advisors.map((advisor) => (
            <Card key={advisor.id} className="group hover-transition hover:shadow-lg bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <img
                    src={advisor.image || "/placeholder.svg"}
                    alt={advisor.name}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">{advisor.name}</h3>
                <p className="text-muted-foreground mb-8 font-body">{advisor.designation}</p>
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
