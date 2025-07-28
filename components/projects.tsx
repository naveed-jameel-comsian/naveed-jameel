"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Get Equipmate (SAAS)",
    company: "Foxtek Systems Ltd.",
    url: "https://getequipmate.com",
    tools: ["Reactjs", "Nestjs", "PostgreSQL", "Bitbucket"],
    image: "/equipmate.png?height=400&width=600",
    description:
      "A SaaS platform for equipment management and tracking, featuring real-time updates and comprehensive analytics.",
  },
  {
    title: "Story Vault",
    company: "Techinoid",
    url: "https://mystoryvault.co",
    tools: ["Reactjs", "Nodejs", "Express", "MongoDB", "Gitlab"],
    image: "/storyvault.png?height=400&width=600",
    description:
      "A digital platform for storing and sharing personal stories, with rich media support and collaborative features.",
  },
  {
    title: "KFC Pakistan",
    company: "Simplex Technology Solution",
    url: "https://www.kfcpakistan.com",
    tools: ["MERN", "Reactjs", "Nodejs", "Nest", "Postgresql", "Bitbucket"],
    image: "/kfc.png?height=400&width=600",
    description:
      "The official website and online ordering system for KFC Pakistan, featuring a responsive design and seamless checkout process.",
  },
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            Here are some of the notable projects I've worked on throughout my career.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-2">{projects[currentProject].title}</h3>
              <p className="text-muted-foreground mb-4">{projects[currentProject].company}</p>

              <p className="mb-6">{projects[currentProject].description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[currentProject].tools.map((tool, index) => (
                  <Badge key={index} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button asChild>
                  <a href={projects[currentProject].url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
                {/* <Button variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button> */}
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-xl">
                <img
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-12 space-x-4">
            <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {projects.map((_, index) => (
              <Button
                key={index}
                variant={currentProject === index ? "default" : "outline"}
                size="icon"
                className="w-3 h-3 rounded-full p-0"
                onClick={() => setCurrentProject(index)}
              >
                <span className="sr-only">Go to project {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
