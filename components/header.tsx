"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
      <div className="cloud-navbar px-8 py-2 w-auto max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-primary hover:text-primary-accent transition-colors">
            OMKAR
          </Link>

          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
