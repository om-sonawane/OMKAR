"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import CloudDoodles from "./CloudDoodles"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Theme based - Full coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/clouds.jpeg"
          alt="Day clouds background"
          fill
          priority
          className="object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: theme === "dark" ? 0 : 1 }}
        />
        <Image
          src="/darkk.jpeg"
          alt="Night clouds background"
          fill
          priority
          className="object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: theme === "dark" ? 1 : 0 }}
        />
      </div>

      {/* Cloud Doodles - Only in light mode */}
      {/* <CloudDoodles /> */}

      {/* Cloud decorations
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div> */}

      {/* Stars (visible in dark mode) */}
      <div className="star star-1"></div>
      <div className="star star-2"></div>
      <div className="star star-3"></div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center mt-16 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 sm:space-y-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            <span className="block text-primary-accent mb-2">Hello, I'm</span>
            <span className="text-foreground">OM SONAWANE</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-[700px] mx-auto">
            I create elegant digital experiences with a focus on user-centered design and clean code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-accent text-white shadow-lg shadow-primary/20 group w-full sm:w-auto"
              asChild
            >
              <Link href="#projects">
                <span className="group-hover:translate-x-1 transition-transform duration-300">View My Work</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 group w-full sm:w-auto"
              asChild
            >
              <Link href="#contact">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Get In Touch</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-foreground" />
        </Link>
      </div>
    </section>
  )
}
