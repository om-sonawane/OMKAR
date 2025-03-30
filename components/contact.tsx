"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as
            possible.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <div className="bg-primary-accent/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">Email</h3>
                <p className="text-muted-foreground">omsonawane03@gmail.com</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <div className="bg-secondary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">Phone</h3>
                <p className="text-muted-foreground">+91 7709096561</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <div className="bg-accent/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">Location</h3>
                <p className="text-muted-foreground">Pune ,Maharashtra</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg"
            variants={containerVariants}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div className="space-y-2" variants={itemVariants}>
                <Input
                  id="name"
                  placeholder="Your Name"
                  required
                  className="bg-white/70 dark:bg-black/30 border-white/30 dark:border-white/10 focus:border-primary-accent"
                />
              </motion.div>
              <motion.div className="space-y-2" variants={itemVariants}>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-white/70 dark:bg-black/30 border-white/30 dark:border-white/10 focus:border-primary-accent"
                />
              </motion.div>
            </div>
            <motion.div className="space-y-2" variants={itemVariants}>
              <Input
                id="subject"
                placeholder="Subject"
                required
                className="bg-white/70 dark:bg-black/30 border-white/30 dark:border-white/10 focus:border-primary-accent"
              />
            </motion.div>
            <motion.div className="space-y-2" variants={itemVariants}>
              <Textarea
                id="message"
                placeholder="Your Message"
                required
                className="min-h-[150px] bg-white/70 dark:bg-black/30 border-white/30 dark:border-white/10 focus:border-primary-accent"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-accent hover:from-primary-accent hover:to-primary text-white shadow-lg shadow-primary/20 group btn-shine"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

