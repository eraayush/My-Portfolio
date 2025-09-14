const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://your-domain.com/api" : "http://localhost:3000/api"

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export async function fetchPortfolioData() {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio`)
    const result: ApiResponse<any> = await response.json()

    if (!result.success) {
      throw new Error(result.error || "Failed to fetch portfolio data")
    }

    return result.data
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
    throw error
  }
}

export async function fetchPersonalData() {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/personal`)
    const result: ApiResponse<any> = await response.json()

    if (!result.success) {
      throw new Error(result.error || "Failed to fetch personal data")
    }

    return result.data
  } catch (error) {
    console.error("Error fetching personal data:", error)
    throw error
  }
}

export async function fetchSkillsData() {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/skills`)
    const result: ApiResponse<any> = await response.json()

    if (!result.success) {
      throw new Error(result.error || "Failed to fetch skills data")
    }

    return result.data
  } catch (error) {
    console.error("Error fetching skills data:", error)
    throw error
  }
}

export async function fetchExperienceData() {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/experience`)
    const result: ApiResponse<any> = await response.json()

    if (!result.success) {
      throw new Error(result.error || "Failed to fetch experience data")
    }

    return result.data
  } catch (error) {
    console.error("Error fetching experience data:", error)
    throw error
  }
}

export async function fetchProjectsData() {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/projects`)
    const result: ApiResponse<any> = await response.json()

    if (!result.success) {
      throw new Error(result.error || "Failed to fetch projects data")
    }

    return result.data
  } catch (error) {
    console.error("Error fetching projects data:", error)
    throw error
  }
}

export async function fetchProjectById(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/projects/${id}`)
    const result: ApiResponse<any> = await response.json()

    if (!result.success) {
      throw new Error(result.error || "Failed to fetch project data")
    }

    return result.data
  } catch (error) {
    console.error("Error fetching project data:", error)
    throw error
  }
}
