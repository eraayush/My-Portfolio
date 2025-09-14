export interface PersonalData {
  name: string
  title: string
  experience: string
  summary: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

export interface SkillsData {
  languages: string[]
  frameworks: string[]
  styling: string[]
  testing: string[]
  tools: string[]
  concepts: string[]
  forms: string[]
  routing: string[]
}

export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  features: string[]
  image: string
  github: string
  live: string
  category: string
}

export interface ExperienceProject {
  name: string
  description: string
  achievements: string[]
}

export interface Experience {
  id: number
  position: string
  company: string
  duration: string
  location: string
  projects: ExperienceProject[]
}

export interface Education {
  degree: string
  field: string
  institution: string
  location: string
  duration: string
}

export interface Language {
  language: string
  proficiency: string
}

export interface PortfolioData {
  personal: PersonalData
  skills: SkillsData
  experience: Experience[]
  projects: Project[]
  education: Education[]
  languages: Language[]
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// Redux State Types
export interface PersonalState {
  data: PersonalData | null
  loading: boolean
  error: string | null
}

export interface SkillsState {
  data: SkillsData | null
  loading: boolean
  error: string | null
}

export interface ProjectsState {
  data: Project[]
  loading: boolean
  error: string | null
  selectedProject: Project | null
}

export interface ExperienceState {
  data: Experience[]
  loading: boolean
  error: string | null
}

export interface RootState {
  personal: PersonalState
  skills: SkillsState
  projects: ProjectsState
  experience: ExperienceState
}
