import { Camera, Trophy, Users, Zap, Target, Cpu, Award, Wrench } from "lucide-react"

const galleryItems = [
  { icon: Camera, title: "Workshop Sessions", color: "from-primary/20 to-accent/20" },
  { icon: Trophy, title: "Competition Winners", color: "from-accent/20 to-primary/20" },
  { icon: Users, title: "Team Building", color: "from-primary/15 to-accent/15" },
  { icon: Zap, title: "Innovation Lab", color: "from-accent/15 to-primary/15" },
  { icon: Target, title: "Project Showcase", color: "from-primary/25 to-accent/25" },
  { icon: Cpu, title: "Tech Talks", color: "from-accent/25 to-primary/25" },
  { icon: Award, title: "Award Ceremony", color: "from-primary/30 to-accent/30" },
  { icon: Wrench, title: "Hands-on Learning", color: "from-accent/30 to-primary/30" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from our events, workshops, and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg card-shadow hover-transition bg-gradient-to-br ${item.color} h-64 flex items-center justify-center`}
            >
              <div className="text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-sm font-semibold text-foreground font-heading">{item.title}</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
