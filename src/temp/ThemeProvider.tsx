"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
})

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)

    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme")
    } else {
      document.documentElement.classList.remove("dark-theme")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
