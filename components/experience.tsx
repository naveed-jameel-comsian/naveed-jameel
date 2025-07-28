"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "FullStack Developer",
    company: "Thingtrax",
    location: "Lahore, Pakistan",
    period: "Apr 2025 - Present",
    description: [
      "Currently working as a Full Stack Developer, contributing to the development and maintenance of web applications.",
      "Utilizing expertise in React.js, Node.js, and related technologies to deliver high-quality software solutions.",
      "Collaborating with cross-functional teams to implement new features and improve existing functionality.",
      "Participating in the full software development lifecycle from planning to deployment.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Foxtek Systems Pvt. Ltd.",
    location: "Lahore, Pakistan",
    period: "Dec 2023 - Mar 2025",
    description: [
      "Provided prompt solutions and proactive troubleshooting support to swiftly resolve subtle and complex issues.",
      "Documented all supported systems and applications to effectively train new and existing team members.",
      "Determined areas for improvements by periodically monitoring current company systems to consistently boost business efficiency.",
      "Established and utilized strategic methodologies to efficiently analyze client's database and develop mapping specifications.",
      "Led onshore and offshore application development teams to verify adherence to quality standards while ensuring requirements are met.",
      "Proficiently troubleshot simple and complex technological issues for different assigned projects, achieving over 95% customer satisfaction rate.",
      "Enhanced application features to effectively fix bugs and optimize overall performance, reliability, and efficiency.",
      "Utilized software engineering expertise to develop products throughout the software lifecycle, from ideation through to deployment.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Simplex Technology Solution",
    location: "Lahore, Pakistan",
    period: "Feb 2022 - Nov 2023",
    description: [
      "Built highly scalable Nodejs Monorepo projects to run on AWS ECS (Elastic Container Service).",
      "Managed AWS ECS for code deployments under different environments.",
      "Implemented TDD (Test Driven Development) using E2E for many projects.",
      "Created reusable node packages to be used in different projects and managed them via Lerna.js.",
      "Implemented code pipelines using bitbucket pipelines for CI/CD.",
      "Managed different code pipelines for auto deployments on AWS.",
      "Implemented ElasticSearch by connecting it with AWS RDS.",
    ],
  },
  {
    title: "Associate MERN Stack Developer",
    company: "Techinoid",
    location: "Lahore, Pakistan",
    period: "Feb 2021 - Jan 2022",
    description: [
      "Played a pivotal role in developing and implementing robust web applications using the MERN stack.",
      "Collaborated with cross-functional teams to create seamless user experiences and deliver high-quality products.",
      "Modified HTML, JavaScript, and CSS web pages to optimize page performance for faster loading and browsing.",
      "Utilized strategic engineering procedures to maintain and improve company's point of sales system features.",
      "Designed and executed a brand-new customer resolution management tool through ReactJS and NextJS to efficiently monitor, encode, and resolve customer questions/concerns.",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            Over the past 5 years, I've worked with various companies to deliver exceptional software solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2" : "md:pl-12 md:ml-1/2"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-6 h-6 rounded-full bg-primary transform translate-x-[-50%] md:translate-x-[50%]"></div>

              <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {index === 0 ? "Current" : "Past"}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.description.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
