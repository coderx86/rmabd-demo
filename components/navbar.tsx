"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isEventsPage = pathname.startsWith("/events")

  const homeNavItems = [
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const eventsNavItems = [
    { href: "/", label: "Home" },
    { href: "/events/#event-about", label: "About" },
    { href: "/events/#event-segments", label: "Segments" },
    { href: "/events/#event-sponsors", label: "Sponsors" },
    { href: "/events/#event-contact", label: "Contact" },
  ]

  const navItems = isEventsPage ? eventsNavItems : homeNavItems

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border card-shadow w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-xl">RMA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-colors font-medium group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {!isEventsPage && (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium group relative whitespace-nowrap">
                  <span>Events</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border shadow-lg rounded-lg p-2 min-w-[200px]">
                  <DropdownMenuItem asChild className="rounded-md">
                    <Link
                      href="/events"
                      className="flex items-center justify-between group px-3 py-2 hover:bg-primary/10 transition-colors"
                    >
                      <span>Techday 2025</span>
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3 flex-shrink-0">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {!isEventsPage && (
                <Link
                  href="/events"
                  className="block px-4 py-3 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
