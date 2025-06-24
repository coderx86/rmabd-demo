import { Card, CardContent } from "@/components/ui/card"
import { Building, Cpu, Zap, Code, Wrench, Globe } from "lucide-react"

const sponsors = {
  platinum: [
    { name: "TechCorp", icon: Building },
    { name: "RoboTech Industries", icon: Cpu },
  ],
  gold: [
    { name: "Innovation Labs", icon: Zap },
    { name: "Future Systems", icon: Code },
    { name: "Digital Solutions", icon: Globe },
  ],
  silver: [
    { name: "StartupHub", icon: Building },
    { name: "CodeCraft", icon: Code },
    { name: "TechVenture", icon: Wrench },
    { name: "InnovateCo", icon: Cpu },
  ],
}

export function SponsorsPartners() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Sponsors & <span className="text-primary">Partners</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We're grateful for the support of our amazing sponsors and partners
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground font-heading">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {sponsors.platinum.map((sponsor, index) => (
              <Card key={index} className="hover-transition hover:shadow-lg bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <sponsor.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground font-heading">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground font-heading">Gold Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <Card key={index} className="hover-transition hover:shadow-lg bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="h-12 flex items-center justify-center mb-3">
                    <sponsor.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground font-heading">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground font-heading">Silver Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <Card key={index} className="hover-transition hover:shadow-lg bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <sponsor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground font-heading">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
