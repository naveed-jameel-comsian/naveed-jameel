"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Layout, Globe, Cloud, GitGraphIcon as Git } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      "HTML 5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux thunk",
      "Redux toolkit",
      "Ionic React",
      "Ant Design",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "Fasitfy", "Nest.js", "Stripe", 
              "Twillio", "socket.io", "Microservices", "RabbitMQ", "Kafka",
              "BullMq", "RESTful APIs", "WebSockets",
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Git", "Github", "Bitbucket", "Gitlab"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            My technical toolkit includes a wide range of technologies and frameworks that I've mastered over my 5 years
            of experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 rounded-md bg-primary/10 text-primary">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <span className="text-center font-medium">Full Stack Development</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <span className="text-center font-medium">Web Applications</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <span className="text-center font-medium">Cloud Services</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Git className="h-8 w-8 text-primary" />
              </div>
              <span className="text-center font-medium">Version Control</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
