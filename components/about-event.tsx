export function AboutEvent() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="font-heading text-foreground">
              About <span className="text-primary">RoboWars 2024</span>
            </h2>
            <div className="space-y-6">
              <p className="font-body text-muted-foreground leading-relaxed">
                RoboWars 2024 is the most anticipated robotics competition of the year, bringing together brilliant
                minds from universities across the country. This event showcases the pinnacle of engineering excellence,
                creativity, and competitive spirit in the field of robotics.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Participants will compete in multiple categories including combat robots, line following, maze solving,
                and innovative project showcases. With substantial prize money and recognition at stake, this
                competition promises to be an unforgettable experience for all participants and spectators.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="text-center p-6 bg-card rounded-lg card-shadow">
                <div className="text-4xl font-bold text-primary mb-3 font-heading">৳50,000</div>
                <div className="text-muted-foreground font-body">Total Prize Money</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg card-shadow">
                <div className="text-4xl font-bold text-primary mb-3 font-heading">100+</div>
                <div className="text-muted-foreground font-body">Expected Teams</div>
              </div>
            </div>
          </div>

          {/* Event Poster Placeholder */}
          <div>
            <div className="rounded-lg card-shadow bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">RoboWars 2024</h3>
                <p className="text-muted-foreground font-body">Official Event Poster</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
