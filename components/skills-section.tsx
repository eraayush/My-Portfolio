"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { fetchSkillsRequest } from "@/lib/store/slices/skillsSlice"

export function SkillsSection() {
  const dispatch = useAppDispatch()
  const { data: skillsData, loading, error } = useAppSelector((state) => state.skills)

  useEffect(() => {
    if (!skillsData) {
      dispatch(fetchSkillsRequest())
    }
  }, [dispatch, skillsData])

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-6 bg-muted rounded w-32"></div>
                  <div className="space-y-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-8 bg-muted rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !skillsData) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">Failed to load skills data: {error}</p>
        </div>
      </section>
    )
  }

  const skillCategories = [
    { title: "Languages", skills: skillsData.languages, color: "bg-primary" },
    { title: "Frameworks", skills: skillsData.frameworks, color: "bg-secondary" },
    { title: "Styling", skills: skillsData.styling, color: "bg-chart-1" },
    { title: "Testing", skills: skillsData.testing, color: "bg-chart-2" },
    { title: "Tools", skills: skillsData.tools, color: "bg-chart-3" },
    { title: "Concepts", skills: skillsData.concepts, color: "bg-chart-4" },
    { title: "Forms", skills: skillsData.forms, color: "bg-chart-5" },
    { title: "Routing", skills: skillsData.routing, color: "bg-primary" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform duration-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
