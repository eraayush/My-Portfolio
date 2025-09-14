"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypingAnimation } from "./typing-animation"
import { AnimatedSection } from "./animated-section"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { fetchPersonalRequest } from "@/lib/store/slices/personalSlice"

export function HeroSection() {
  const dispatch = useAppDispatch()
  const { data: personalData, loading, error } = useAppSelector((state) => state.personal)

  useEffect(() => {
    if (!personalData) {
      dispatch(fetchPersonalRequest())
    }
  }, [dispatch, personalData])

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </section>
    )
  }

  if (error || !personalData) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Failed to load data: {error}</p>
      </section>
    )
  }

  const roles = ["Front-End Developer", "React.js Developer", "Next.js Expert", "UI/UX Enthusiast"]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Hi, I'm a{" "}
            <span className="text-primary">
              <TypingAnimation texts={roles} />
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={200}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">{personalData.summary}</p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 transition-all duration-200 bg-transparent"
              >
                <a href={personalData.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 transition-all duration-200 bg-transparent"
              >
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
