import Link from "next/link";
import { SiGithub,SiLinkedin, SiInstagram } from "react-icons/si"; // Import Simple Icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-xl font-bold">
              OMKAR
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
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} OMKAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
