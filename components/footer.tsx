import Link from "next/link";
import { SiGithub,SiLinkedin, SiInstagram } from "react-icons/si"; // Import Simple Icons

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 sm:py-12 border-t bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              href="/"
              className="text-xl font-bold text-primary dark:text-primary hover:text-primary-accent dark:hover:text-primary-accent transition-colors"
            >
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">Creating elegant digital experiences</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/om-sonawane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </Link>
           
            <Link
              href="https://www.linkedin.com/in/om-sonawane-23bab11b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
