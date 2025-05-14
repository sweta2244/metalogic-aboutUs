"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import styles from "../about.module.css"
import ValueCard from "./ValueCard"
import ParticleBackground from "./ParticleBackground"

interface ValuesSectionProps {
  scrollY: number
}

export default function ValuesSection({ scrollY }: ValuesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions.",
      icon: "Lightbulb",
      color: "#3498db",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service.",
      icon: "Award",
      color: "#f39c12",
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices.",
      icon: "Shield",
      color: "#27ae60",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative problem-solving.",
      icon: "Users",
      color: "#9b59b6",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  }

  return (
    <section ref={sectionRef} className={styles.values}>
      <ParticleBackground />

      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: scrollY > 1200 ? 1 : 0,
          y: scrollY > 1200 ? 0 : 30,
        }}
        transition={{ duration: 0.5 }}
      >
        Our Core Values
      </motion.h2>

      <motion.div
        className={styles.valuesGrid}
        initial="hidden"
        animate={scrollY > 1250 ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {values.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} sectionRef={sectionRef} />
        ))}
      </motion.div>
    </section>
  )
}