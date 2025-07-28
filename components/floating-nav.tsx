"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, User, Code, Briefcase, GraduationCap, Mail, Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", icon: <Home className="h-5 w-5" />, href: "#home" },
  { name: "About", icon: <User className="h-5 w-5" />, href: "#about" },
  { name: "Skills", icon: <Code className="h-5 w-5" />, href: "#skills" },
  { name: "Experience", icon: <Briefcase className="h-5 w-5" />, href: "#experience" },
  { name: "Projects", icon: <Code className="h-5 w-5" />, href: "#projects" },
  { name: "Education", icon: <GraduationCap className="h-5 w-5" />, href: "#education" },
  { name: "Contact", icon: <Mail className="h-5 w-5" />, href: "#contact" },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-1 py-1 rounded-full backdrop-blur-md ${
            isScrolled ? "bg-background/80 shadow-lg" : "bg-background/50"
          } transition-all duration-300`}
        >
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className={`rounded-full px-4 ${
                  activeSection === item.href.substring(1)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => handleNavClick(item.href)}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </span>
              </Button>
            ))}
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </motion.div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`fixed top-4 right-4 z-50 flex items-center space-x-2 ${
              isScrolled ? "bg-background/80 shadow-lg" : "bg-background/50"
            } backdrop-blur-md rounded-full px-3 py-2`}
          >
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-20 px-6"
              >
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className={`justify-start rounded-lg py-6 ${
                        activeSection === item.href.substring(1) ? "bg-primary/10 text-primary" : ""
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      <span className="flex items-center">
                        {item.icon}
                        <span className="ml-3 text-lg">{item.name}</span>
                      </span>
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}
