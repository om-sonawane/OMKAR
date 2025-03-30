"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Video } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const projects = [
    {
      id: "project1",
      title: "Perfume Store",
      slug: "project-one",
      image: "/project_one.jpg?height=600&width=800",
      size: "large",
    },
    {
      id: "project2",
      title: "Anime Slider",
      slug: "project-two",
      image: "/sasu.jfif?height=400&width=600",
      size: "small",
    },
    {
      id: "project3",
      title: "Ai-ChatBot",
      slug: "project-three",
      image: "/chat2.jpeg?height=400&width=600",
      size: "small",
    },
    {
      id: "project4",
      title: "Vr Travelling Website",
      slug: "project-four",
      image: "/vr_image.jpg",
      size: "large",
    },
    {
      id: "project5",
      title: "Weather App",
      slug: "project-five",
      image: "/Weather.jfif",
      size: "small",
    },
    {
      id: "project6",
      title: "portfolio",
      slug: "project-six",
      image: "/port.jpg",
      size: "small",
    },
  ]
  

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  // Function to handle 3D card effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-tl from-accent/5 to-background dark:from-accent/10 dark:to-background"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground">My Projects</h2>
          <div className="h-1 w-20 bg-primary-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted with attention to detail, performance,
            and user experience.
          </p>
        </div>

        {/* First Row - Big left, two small right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {/* Large project on left */}
          <motion.div
            className="md:col-span-7 relative group h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.2s ease-out" }}
          >
            <Link href={`/projects/${projects[0].slug}`} className="block h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-60 z-10"></div>
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-accent/0 group-hover:bg-primary-accent/20 transition-colors duration-300 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">{projects[0].title}</h3>
                <div className="w-10 h-1 bg-primary-accent mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view project details
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Two small projects on right */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {[projects[1], projects[2]].map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group h-[240px] overflow-hidden rounded-2xl shadow-lg"
                custom={index + 1}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transition: "transform 0.2s ease-out" }}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-60 z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <div className="w-8 h-1 bg-secondary mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view project details
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row - Two small left, big right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Two small projects on left */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6 md:order-1 lg:order-1">
            {[projects[4], projects[5]].map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group h-[240px] overflow-hidden rounded-2xl shadow-lg"
                custom={index + 3}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transition: "transform 0.2s ease-out" }}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-60 z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <div className="w-8 h-1 bg-accent mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view project details
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Large project on right */}
          <motion.div
            className="md:col-span-7 relative group h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg md:order-2 lg:order-2"
            custom={5}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.2s ease-out" }}
          >
            <Link href={`/projects/${projects[3].slug}`} className="block h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-60 z-10"></div>
              <Image
                src={projects[3].image || "/placeholder.svg"}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">{projects[3].title}</h3>
                <div className="w-10 h-1 bg-secondary mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view project details
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

