import { Calendar, MapPin } from "lucide-react"

export function DateLocation() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Date */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Event Date</h3>
            <p className="text-lg text-muted-foreground font-body">March 15-16, 2024</p>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Location</h3>
            <p className="text-lg text-muted-foreground font-body">CUET</p>
          </div>
        </div>
      </div>
    </section>
  )
}
