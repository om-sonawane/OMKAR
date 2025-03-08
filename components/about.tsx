"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useInView } from "framer-motion"

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
    <section id="about" ref={ref} className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4" />
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted">
              <Image src="/placeholder.svg?height=600&width=600" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">About Me</h2>
              <div className="h-1 w-20 bg-primary mb-6" />
            </div>
            <p className="text-lg text-muted-foreground">
              I'm a passionate developer and designer with a keen eye for detail and a love for creating beautiful,
              functional websites. With years of experience in the industry, I've developed a workflow that prioritizes
              clean code, user experience, and modern design principles.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying the outdoors.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

