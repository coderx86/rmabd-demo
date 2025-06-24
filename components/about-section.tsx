export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg card-shadow bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">RMA Activities</h3>
                <p className="text-muted-foreground font-body">Innovation in Action</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-heading text-foreground">
              About <span className="text-primary">RMA</span>
            </h2>
            <div className="space-y-6">
              <p className="font-body text-muted-foreground leading-relaxed">
                The RoboMechatronics Association (RMA) at CUET is a dynamic student organization dedicated to fostering
                innovation in robotics, mechatronics, and emerging technologies. We provide a platform for students to
                explore, learn, and create cutting-edge solutions that bridge the gap between theoretical knowledge and
                practical application.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our mission is to cultivate a community of passionate engineers and innovators who are ready to tackle
                tomorrow's challenges through collaborative learning, hands-on projects, and industry partnerships.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="text-center p-6 bg-card rounded-lg card-shadow">
                <div className="text-4xl font-bold text-primary mb-3 font-heading">500+</div>
                <div className="text-muted-foreground font-body">Active Members</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg card-shadow">
                <div className="text-4xl font-bold text-primary mb-3 font-heading">50+</div>
                <div className="text-muted-foreground font-body">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
