export function EventHeroSection() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background with CSS gradient instead of image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 dark:from-black/80 dark:to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-heading mb-4">
          RoboWars <span className="text-accent">2024</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-body">The Ultimate Robotics Competition</p>
      </div>
    </section>
  )
}
