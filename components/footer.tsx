"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

interface PersonalData {
  name: string
  email: string
  linkedin: string
  github: string
}

export function Footer() {
  const [personalData, setPersonalData] = useState<PersonalData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/portfolio/personal")
        const result = await response.json()
        if (result.success) {
          setPersonalData(result.data)
        }
      } catch (error) {
        console.error("Error fetching personal data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Front-End Developer</h3>
            <p className="text-muted-foreground">Building amazing web experiences with modern technologies</p>
          </div>

          {personalData && (
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          )}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Front-End Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
