"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import FogEffect from "./FogEffect"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--foreground-rgb),0.05),transparent_50%)]" />
      <FogEffect />
      <div
        className={`container px-4 md:px-6 flex flex-col items-center text-center space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          <span className="text-primary">Hello, I'm</span> OM SONAWANE
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
          I create elegant digital experiences with a focus on user-centered design and clean code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>
    </section>
  )
}

