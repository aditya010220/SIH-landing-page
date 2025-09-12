"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-emerald-100/50" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-200/50 animate-pulse" />
            <span className="text-xl font-serif text-emerald-800 font-medium">Drona</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors">
              Home
            </a>
            <a href="#problem" className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors">
              Problem
            </a>
            <a href="#vision" className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors">
              Vision
            </a>
            <a href="#stories" className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors">
              Stories
            </a>
            <a href="#flow" className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors">
              Flow
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              Begin Journey <span className="ml-1 group-hover:animate-bounce"></span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
