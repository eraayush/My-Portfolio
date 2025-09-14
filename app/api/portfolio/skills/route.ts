import { NextResponse } from "next/server"
import portfolioData from "@/data/portfolio.json"

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: portfolioData.skills,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch skills data" }, { status: 500 })
  }
}
