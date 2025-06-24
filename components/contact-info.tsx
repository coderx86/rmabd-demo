import { Mail, MessageCircle, Phone, Facebook, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to join us? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Location Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg card-shadow bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">CUET Campus</h3>
                <p className="text-muted-foreground font-body">Our Location</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-heading text-lg">Location</h3>
                <p className="text-muted-foreground font-body">
                  Chittagong University of Engineering & Technology
                  <br />
                  Chittagong-4349, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-heading text-lg">Email</h3>
                <p className="text-muted-foreground font-body">rma@cuet.ac.bd</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-heading text-lg">Phone</h3>
                <p className="text-muted-foreground font-body">+880 31 714865</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-semibold text-foreground mb-6 font-heading text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground hover-transition w-12 h-12"
                >
                  <Facebook className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground hover-transition w-12 h-12"
                >
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground hover-transition w-12 h-12"
                >
                  <Mail className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
