"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Lightbulb, Award, Shield, Users } from "lucide-react"
import styles from "../about.module.css"

interface ValueCardProps {
  value: {
    title: string
    description: string
    icon: string
    color: string
  }
  index: number
  sectionRef: React.RefObject<HTMLElement>
}

export default function ValueCard({ value, index}: ValueCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const rotateX = useTransform(springY, [-50, 50], [10, -10])
  const rotateY = useTransform(springX, [-50, 50], [-10, 10])

  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    x.set(distanceX / 5)
    y.set(distanceY / 5)
  }

  const handleMagneticLeave = () => {
    x.set(0)
    y.set(0)
  }

  const IconComponent = () => {
    switch (value.icon) {
      case "Lightbulb":
        return <Lightbulb className={styles.valueIcon} />
      case "Award":
        return <Award className={styles.valueIcon} />
      case "Shield":
        return <Shield className={styles.valueIcon} />
      case "Users":
        return <Users className={styles.valueIcon} />
      default:
        return <Lightbulb className={styles.valueIcon} />
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      x: index % 2 === 0 ? -50 : 50,
      rotateY: index % 2 === 0 ? -30 : 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.7,
      },
    },
  }

  const iconVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.5,
      },
    },
  }

  const frontVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      rotateY: isFlipped ? 180 : 0,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67], 
      },
    },
  }

  const backVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      rotateY: isFlipped ? 0 : -180,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      className={styles.valueCardContainer}
      variants={itemVariants}
      style={{
        x: springX,
        y: springY,
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMagneticMove}
      onMouseLeave={handleMagneticLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={styles.valueCard}
        style={{
          backgroundColor: `color-mix(in srgb, ${value.color} 10%, var(--bg-light))`,
          borderColor: `color-mix(in srgb, ${value.color} 30%, transparent)`,
        }}
        variants={frontVariants}
        animate="visible"
        initial="hidden"
      >
        <motion.div
          className={styles.valueIconContainer}
          style={{ backgroundColor: `color-mix(in srgb, ${value.color} 20%, transparent)` }}
          variants={iconVariants}
          animate="animate"
        >
          <IconComponent />
        </motion.div>
        <h3 style={{ color: value.color }}>{value.title}</h3>
        <p>{value.description}</p>
        <div className={styles.flipPrompt}>Click to flip</div>
        <motion.div
          className={styles.valueCardGlow}
          style={{ background: `radial-gradient(circle at center, ${value.color}30 0%, ${value.color}00 70%)` }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
        />
      </motion.div>

      <motion.div
        className={`${styles.valueCard} ${styles.valueCardBack}`}
        style={{
          backgroundColor: `color-mix(in srgb, ${value.color} 15%, var(--bg-light))`,
          borderColor: `color-mix(in srgb, ${value.color} 30%, transparent)`,
        }}
        variants={backVariants}
        animate="visible"
        initial="hidden"
      >
        <h3 style={{ color: value.color }}>How We Apply It</h3>
        <ul className={styles.valueBackList}>
          <li>Through continuous learning and research</li>
          <li>By embracing new technologies</li>
          <li>With creative problem-solving approaches</li>
        </ul>
        <div className={styles.flipPrompt}>Click to flip back</div>
      </motion.div>
    </motion.div>
  )
}