"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <img src="/images/profile.png" alt="Naveed Jameel" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full"></div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
            <p className="text-muted-foreground mb-6">
              Seasoned, forward-looking Software Engineer with 5 years of background in creating and executing
              innovative software solutions to enhance business productivity. Highly experienced in all aspects of the
              software development lifecycle and end-to-end project development, from concept through to development and
              delivery.
            </p>
            <p className="text-muted-foreground mb-6">
              Consistently recognized as a hands-on and competent developer, skilled at developing cross-functional
              software in a fast-paced, deadline-driven environment to steer timely project completion within budgetary
              constraints.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Naveed Jameel</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">naveedjameelcomsian@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">Lahore, Pakistan</p>
              </div>
              <div>
                <p className="font-medium">Experience:</p>
                <p className="text-muted-foreground">5 Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
