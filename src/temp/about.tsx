"use client"

import { useState, useEffect } from "react"
import styles from "./about.module.css"
import ThemeProvider from "./ThemeProvider"
import { useTheme } from "./hooks/useTheme"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import MissionSection from "./components/MissionSection"
import TeamSection from "./components/TeamSection"
import TimelineSection from "./components/TimelineSection"
import ValuesSection from "./components/ValuesSection"
import ContactCTA from "./components/ContactCTA"
export default function About() {
  return (
    <ThemeProvider>
      <AboutPage />
    </ThemeProvider>
  )
}

function AboutPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`${styles.container} ${isDark ? styles.dark : ""}`}>
      <Header />

      <main>
        <HeroSection />
        <AboutSection scrollY={scrollY} />
        <MissionSection scrollY={scrollY} />
        <TeamSection scrollY={scrollY} />
        <TimelineSection scrollY={scrollY} />
        <ValuesSection scrollY={scrollY} />
        <ContactCTA scrollY={scrollY} />
      </main>

      <Footer />
    </div>
  )
}
