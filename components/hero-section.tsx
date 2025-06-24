import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with CSS gradient instead of image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 dark:from-black/80 dark:to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <h1 className="font-heading mb-8 leading-tight">
          RoboMechatronics
          <span className="block text-accent">Association</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 font-body max-w-3xl mx-auto">
          Innovating Tomorrow Through Robotics and Technology
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg font-medium"
          >
            Join Our Community
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
