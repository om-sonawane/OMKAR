import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or CMS
const getProjectData = (slug: string) => {
  const projects = {
    "project-one": {
      title: "Project One",
      description:
        "This is a detailed description of Project One. It would include information about the project goals, technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    "project-two": {
      title: "Project Two",
      description:
        "This is a detailed description of Project Two. It would include information about the project goals, technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["TypeScript", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    "project-three": {
      title: "Project Three",
      description:
        "This is a detailed description of Project Three. It would include information about the project goals, technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["JavaScript", "D3.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    "project-four": {
      title: "Project Four",
      description:
        "This is a detailed description of Project Four. It would include information about the project goals, technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["React", "Firebase", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
    },
    "project-five": {
      title: "Project Five",
      description:
        "This is a detailed description of Project Five. It would include information about the project goals, technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["Vue.js", "Vuex", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    "project-six": {
      title: "Project Six",
      description:
        "This is a detailed description of Project Six. It would include information about the project goals, technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["Angular", "RxJS", "SCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  }

  return projects[slug as keyof typeof projects] || null
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist.</p>
        <Link href="/#projects" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Link href="/#projects" className="inline-flex items-center text-primary hover:underline mb-8 block">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

      <div className="relative w-full h-[300px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 mb-6">
              {project.technologies.map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  {tech}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4">Project Links</h3>
            <div className="space-y-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 bg-muted border border-input rounded-md hover:bg-accent transition-colors"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

