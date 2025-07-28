"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "BS Software Engineering",
    institution: "Comsats University Islamabad, Lahore Campus",
    period: "2016 - 2020",
    gpa: "3.2 GPA",
    details: "Focused on Web Development, Database, and Object-Oriented Programming",
  },
  {
    degree: "FSc (Pre-Engineering)",
    institution: "PGC Campus 8, Lahore",
    period: "2014 - 2016",
    gpa: "80%",
    details: "",
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            My educational background has provided me with a strong foundation in software engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8"
            >
              <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-lg mb-4">{edu.institution}</p>

                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{edu.period}</span>
                      </div>

                      <div className="flex items-center mb-2">
                        <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{edu.gpa}</span>
                      </div>

                      {edu.details && <p className="mt-4 text-muted-foreground">{edu.details}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <Card className="border-primary/10 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Urdu</p>
                  <p className="text-muted-foreground">Native</p>
                </div>
                <div>
                  <p className="font-medium">English</p>
                  <p className="text-muted-foreground">Medium</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground">Cricket</span>
                <span className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground">Movies</span>
                <span className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground">
                  Book Reading
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
