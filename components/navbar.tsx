"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border card-shadow">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-heading">RMA</span>
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              About
            </Link>
            <Link href="#team" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              Team
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-body font-medium">
                <span>Activities</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem asChild>
                  <Link href="/events" className="font-body">
                    Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#gallery" className="font-body">
                    Gallery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-body">Workshops</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-body font-medium"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                href="#about"
                className="block px-4 py-3 text-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#team"
                className="block px-4 py-3 text-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/events"
                className="block px-4 py-3 text-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                href="#gallery"
                className="block px-4 py-3 text-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-3 text-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
