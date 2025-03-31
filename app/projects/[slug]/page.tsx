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
      title: "Anime Slider",
      description:
        "An interactive anime slider application that allows users to browse and filter their favorite anime stickers. Built with TypeScript, React. ",
      image: "/naru.jfif",
      technologies: ["Javascript", "React", "css"],
      liveUrl: "https://anime-slider-omii.vercel.app/",
      githubUrl: "https://github.com/om-sonawane/anime-slider",

      details: "A web application that provides a user-friendly interface for browsing and filtering anime stickers. Users can easily find their favorite stickers and save them.",
      challenges: "Ensuring an intuitive and visually appealing UI that is easy to navigate..",
      solutions: "Use frameworks like Tailwind CSS or Material UI for a clean and user-friendly interface,Add animations and hover effects for a more interactive experience.",
    },
    "project-three": {
      title: "ai chat bot",
      description:
        "An AI chatbot application that provides users with instant responses to their queries. Built with Python.",
      image: "/aic.jpg",
      technologies: ["Python", "Tkinter", "Sql"],
      liveUrl: "https://github.com/om-sonawane/Ai-chatbot",
      githubUrl: "https://github.com/om-sonawane/Ai-chatbot",

      details: "A dashboard that visualizes large datasets using interactive charts, providing insights into key metrics.",
      challenges: "Limited Built-in UI Frameworks Unlike web development, Python’s UI frameworks (Tkinter, PyQt, Kivy) require additional learning and often lack modern design elements.",
      solutions: "Choosing the Right UI Framework Use Tkinter is good for lightweight applications with basic UI needs",
    },
    "project-four": {
      title: "Vr travelling Website",
      description:
        "A VR travel website that offers immersive virtual tours of popular destinations. Built with javascript, html, and css.",
      image: "/vrt.jpeg",
      technologies: ["Javascript", "Html", "css"],
      liveUrl: "https://vr-travelling-website.vercel.app/",
      githubUrl: "https://github.com/om-sonawane/vr-travelling-website",

      details: "VR Traveling Website aims to provide an immersive travel experience through virtual reality. Users can explore various locations as if they were physically there, using 360-degree images or videos.",
      challenges: "Ensuring users feel engaged rather than just watching static 360° images.",
      solutions: "Add interactive elements like user-controlled camera movement.",
    },
    "project-five": {
      title: "Weather App",
      description:
        "A simple Weather App that allows users to fetch and display the current temperature for a specified location. .",
      image: "/weath.jpeg",
      technologies: ["html", "css", "Javascript"],
      liveUrl: "https://weather-app-omi.netlify.app/",
      githubUrl: "https://github.com/om-sonawane/Weather-App",

      details: "A weather app that fetches real-time weather data, displays temperature, humidity, wind speed, and weather conditions based on user location or manual search.",
      challenges: "API rate limits, occasional downtime, or slow response times from weather APIs",
      solutions: "Implement caching for repeated requests, use multiple API providers as a fallback, and handle errors gracefully with loading indicators and retry mechanisms.",
    },
    "project-six": {
      title: "Portfolio Website",
      description:
        ".",
      image: "/porto.png",
      technologies: ["React", "Typescript", "Nextjs","Tailwind css"],
      liveUrl: "https://omsonawane.vercel.app/",
      githubUrl: "https://github.com/om-sonawane/OMKAR",

      details: "A React-based portfolio website that showcases personal projects, skills, and contact information.",
      challenges: "Achieving a modern, premium-looking design with smooth animations.",
      solutions: "Use Tailwind CSS and Framer Motion for animations. Maintain a clean, minimalistic design with proper spacing, fonts, and color palettes.",
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

