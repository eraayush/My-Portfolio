"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Front-End Developer</h3>
            <p className="text-muted-foreground">Building amazing web experiences with modern technologies</p>
          </div>
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
