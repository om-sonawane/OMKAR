"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function CloudDoodles() {
  const { theme } = useTheme()

  // Only show doodles in light mode
  if (theme === "dark") return null

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Sun doodle */}
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[15%] left-[10%]"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <path
          d="M40 20C40 31.0457 31.0457 40 20 40C31.0457 40 40 48.9543 40 60C40 48.9543 48.9543 40 60 40C48.9543 40 40 31.0457 40 20Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="40" r="10" stroke="white" strokeWidth="2" />
        <line x1="40" y1="5" x2="40" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="65" x2="40" y2="75" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="40" x2="15" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="65" y1="40" x2="75" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      {/* Rainbow doodle */}
      <motion.svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[30%] right-[20%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <path
          d="M10 50C10 27.9086 27.9086 10 50 10H70C92.0914 10 110 27.9086 110 50"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 50C30 39.0589 38.9589 30 50 30H70C81.0411 30 90 39.0589 90 50"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Cloud doodle */}
      <motion.svg
        width="100"
        height="60"
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[30%] left-[15%]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <path
          d="M25 40C25 29.5066 33.5066 21 44 21C54.4934 21 63 29.5066 63 40H75C83.2843 40 90 33.2843 90 25C90 16.7157 83.2843 10 75 10H25C16.7157 10 10 16.7157 10 25C10 33.2843 16.7157 40 25 40Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Star doodle */}
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[20%] right-[25%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <path
          d="M30 5L35.8779 20.7639H52.8042L39.4631 30.4721L45.3409 46.2361L30 36.5279L14.6591 46.2361L20.5369 30.4721L7.19577 20.7639H24.1221L30 5Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  )
}
