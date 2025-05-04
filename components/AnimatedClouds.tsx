"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface AnimatedCloudsProps {
  className?: string
}

export default function AnimatedClouds({ className = "" }: AnimatedCloudsProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className={`absolute pointer-events-none z-0 ${className}`}>
      {/* Cloud 1 */}
      <motion.div
        className={`absolute w-24 sm:w-32 h-12 sm:h-16 rounded-full ${isDark ? "bg-white/5" : "bg-white/80"} blur-md`}
        initial={{ x: -20, y: 0 }}
        animate={{
          x: [-20, 20, -20],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Cloud 2 */}
      <motion.div
        className={`absolute w-20 sm:w-24 h-10 sm:h-12 rounded-full ${isDark ? "bg-white/5" : "bg-white/80"} blur-md`}
        style={{ top: "30px", left: "40px" }}
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 15, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Cloud 3 */}
      <motion.div
        className={`absolute w-16 sm:w-20 h-8 sm:h-10 rounded-full ${isDark ? "bg-white/5" : "bg-white/80"} blur-md`}
        style={{ top: "-20px", left: "60px" }}
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -10, 0],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
