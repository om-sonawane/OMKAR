"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import AnimatedClouds from "./AnimatedClouds"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Git",
    "Figma",
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10 relative overflow-hidden"
    >
      {/* Background clouds */}
      <div className="absolute top-1/4 left-1/4 opacity-30 dark:opacity-10">
        <AnimatedClouds />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-30 dark:opacity-10">
        <AnimatedClouds />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Portrait Image with Animation and Standard Frame */}
          <motion.div
            className="relative mx-auto md:mx-0 max-w-[280px] sm:max-w-[350px] md:max-w-full"
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="portrait-container">
              {/* Cloud decorations around the portrait */}
              <AnimatedClouds className="top-[-30px] left-[-40px] scale-75" />
              <AnimatedClouds className="bottom-[-20px] right-[-30px] scale-50" />

              {/* Standard portrait frame */}
              <div className="portrait-frame standard-frame">
                <div className="portrait-image">
                  <Image
                    src="profile.jpeg"
                    alt="Profile"
                    width={500}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content with Animation */}
          <motion.div
            className="space-y-4 sm:space-y-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-3 sm:mb-4 text-foreground">
                About Me
              </h2>
              <div className="h-1 w-20 bg-primary-accent mb-4 sm:mb-6" />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I'm a passionate developer and designer with a keen eye for detail and a love for creating beautiful,
              functional websites. With years of experience in the industry, I've developed a workflow that prioritizes
              clean code, user experience, and modern design principles.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying the outdoors.
            </p>
            <div className="pt-3 sm:pt-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-2 sm:px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
