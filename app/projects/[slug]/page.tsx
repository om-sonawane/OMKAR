import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or CMS
const getProjectData = (slug: string) => {
  const projects = {
    "project-one": {
      title: "Perfume Store",
      description:
        "A luxury perfume store website featuring high-quality fragrance collections. Developed using Next.js, Tailwind CSS, and Leonardo AI for stunning image generation.",
      image: "/omkarr.jpg?",
      technologies: ["React", "Next.js", "Tailwind CSS", "Leonardo AI"],
      liveUrl: "https://perfume-website-omkar.vercel.app/",
      githubUrl: "https://github.com/om-sonawane/luxury-perfume-website",
      
      // Unique Sections for Each Project
      details: "The project aims to provide a seamless experience for users looking for premium perfumes.It features a visually appealing UI with a responsive design.",
      challenges: "The biggest challenge was handling image generation dynamically and optimizing performance. Implementing AI-generated product images required additional processing.",
      solutions: "Used Leonardo AI to generate images, optimized loading with Next.js image components, and implemented lazy loading for better performance.",
    },
    "project-two": {
      title: "Task Manager",
      description:
        "A simple task management application with CRUD operations. Designed to improve productivity using React and Firebase for real-time data storage.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["TypeScript", "React", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",

      details: "This task manager allows users to create, edit, delete, and mark tasks as completed in real time using Firebase Firestore.",
      challenges: "Managing real-time updates and ensuring smooth state management across different components.",
      solutions: "Used Firebase's real-time database for instant updates and React Context API for state management.",
    },
    "project-three": {
      title: "Data Visualization Dashboard",
      description:
        "An interactive data visualization tool that uses D3.js for dynamic chart rendering. Built with Express.js for backend data handling.",
      image: "/placeholder.svg?height=800&width=1200",
      technologies: ["JavaScript", "D3.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",

      details: "A dashboard that visualizes large datasets using interactive charts, providing insights into key metrics.",
      challenges: "Rendering large datasets efficiently while keeping UI interactions smooth.",
      solutions: "Used D3.js for optimized rendering and React hooks to manage component updates efficiently.",
    },
  };

  return projects[slug as keyof typeof projects] || null;
};

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData((await params).slug)

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
      <Link href="/#projects" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

      <div className="relative w-full h-[300px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
  {/* Left side: Project Overview, Details, Challenges & Solutions */}
  <div className="md:col-span-2">
    <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
    <p className="text-muted-foreground mb-6">{project.description}</p>

    <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
    <p className="text-muted-foreground mb-6">{project.details}</p>

    <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
    <p className="text-muted-foreground mb-6"><strong>Challenges:</strong> {project.challenges}</p>
    <p className="text-muted-foreground"><strong>Solutions:</strong> {project.solutions}</p>
  </div>

  {/* Right side: Technologies & Project Links */}
  <div className="bg-muted p-6 rounded-lg self-start">
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
  )

}

