
"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Palette, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const themes = [
    { name: "light", label: "Light", icon: Sun },
    { name: "dark", label: "Dark", icon: Moon },
    { name: "blue", label: "Ocean Blue", icon: Palette },
    { name: "purple", label: "Royal Purple", icon: Zap },
  ]

  const getCurrentIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />
      case "blue":
        return <Palette className="h-[1.2rem] w-[1.2rem]" />
      case "purple":
        return <Zap className="h-[1.2rem] w-[1.2rem]" />
      default:
        return <Sun className="h-[1.2rem] w-[1.2rem]" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="inline-flex items-center justify-center w-9 px-0 h-8 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
          {mounted ? getCurrentIcon() : null}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          return (
            <DropdownMenuItem
              key={themeOption.name}
              onClick={() => {
                console.log("[v0] Setting theme to:", themeOption.name)
                setTheme(themeOption.name)
              }}
              className={theme === themeOption.name ? "bg-accent" : ""}
            >
              <Icon className="mr-2 h-4 w-4" />
              {themeOption.label}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
