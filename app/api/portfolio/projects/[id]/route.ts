import { NextResponse } from "next/server"
import portfolioData from "@/data/portfolio.json"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const projectId = Number.parseInt(params.id)
    const project = portfolioData.projects.find((p) => p.id === projectId)

    if (!project) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: project,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch project data" }, { status: 500 })
  }
}
