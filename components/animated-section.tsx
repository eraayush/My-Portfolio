"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-in-up" | "slide-in-left" | "slide-in-right" | "fade-in"
  delay?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isIntersecting ? `animate-${animation} opacity-100` : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        animationDelay: isIntersecting ? `${delay}ms` : "0ms",
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  )
}
