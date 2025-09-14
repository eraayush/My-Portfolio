"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { fetchExperienceRequest } from "@/lib/store/slices/experienceSlice"

export function ExperienceSection() {
  const dispatch = useAppDispatch()
  const { data: experience, loading, error } = useAppSelector((state) => state.experience)

  useEffect(() => {
    if (experience.length === 0) {
      dispatch(fetchExperienceRequest())
    }
  }, [dispatch, experience.length])

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mx-auto mb-12"></div>
            <div className="space-y-8">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">Failed to load experience: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">Work Experience</h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={exp.id} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">{exp.position}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="border-l-2 border-primary pl-6">
                      <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                      <p className="text-muted-foreground mb-4">{project.description}</p>

                      <div className="space-y-2">
                        <h5 className="font-medium">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm">
                              <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
