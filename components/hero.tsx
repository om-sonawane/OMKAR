"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ParticleBackground from "./ParticleBackground"
import AnimatedText from "./AnimatedText"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/lightone.jpg" alt="Background" fill priority className="object-cover" />
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Glass Effect Container - Starting below header */}
      <div className="absolute top-24 left-8 right-8 bottom-8 z-10 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-md bg-white/15 dark:bg-black/20 shadow-2xl border border-white/30 dark:border-white/10"></div>

        {/* Content inside glass container */}
        <div
          className={`relative h-full flex items-center justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white dark:text-white drop-shadow-md">
                <span className="text-primary-accent block mb-2">Hello, I'm</span>
                <AnimatedText text="OM SONAWANE" className="inline-block" />
              </h1>
              <p className="text-xl md:text-2xl text-white/90 dark:text-white/90 max-w-[700px] mx-auto drop-shadow">
                <AnimatedText text="I create elegant digital experiences with a focus on user-centered design and clean code." />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button
                  size="lg"
                  className="bg-primary-accent hover:bg-primary-accent/90 text-white shadow-lg shadow-primary-accent/20 group"
                  asChild
                >
                  <Link href="#projects">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">View My Work</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/20 backdrop-blur-sm group"
                  asChild
                >
                  <Link href="#contact">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Get In Touch</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-white drop-shadow-lg" />
        </Link>
      </div>
    </section>
  )
}

