"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Mail } from "lucide-react"

const allCommitteeMembers = [
  {
    id: 1,
    name: "Sarah Ahmed",
    designation: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Karim Rahman",
    designation: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Nadia Islam",
    designation: "Public Relations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Tariq Hassan",
    designation: "Finance Secretary",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Rima Khan",
    designation: "Workshop Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Fahim Ahmed",
    designation: "Media Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Zara Begum",
    designation: "Research Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Omar Faruk",
    designation: "Competition Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function CommitteeSection() {
  const [showAll, setShowAll] = useState(false)
  const initialCount = 6
  const displayedMembers = showAll ? allCommitteeMembers : allCommitteeMembers.slice(0, initialCount)

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Committee <span className="text-primary">Members</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals working together to make RMA a success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedMembers.map((member) => (
            <Card key={member.id} className="group hover-transition hover:shadow-lg bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">{member.name}</h3>
                <p className="text-muted-foreground mb-8 font-body">{member.designation}</p>
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

        {!showAll && allCommitteeMembers.length > initialCount && (
          <div className="text-center mt-16">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium"
            >
              See More...
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
