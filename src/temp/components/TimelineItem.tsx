"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import styles from "../about.module.css"

interface TimelineItemProps {
  item: {
    year: string
    title: string
    description: string
  }
  index: number
  timelineRef: React.RefObject<HTMLDivElement>
}

export default function TimelineItem({ item, index, timelineRef }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  // Determine if this is a left or right item
  const isLeft = index % 2 === 0

  // Define variants for the sliding animation
  const slideVariants = {
    hidden: {
      x: isLeft ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      rotate: isLeft ? -5 : 5,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        duration: 0.8,
        delay: index * 0.1,
      },
    },
  }

  // Content animation variants (staggered children)
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Individual content item variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  // Dot animation variants
  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: [0, 1.5, 1],
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.3,
        times: [0, 0.6, 1],
      },
    },
  }

  const lineVariants = {
    hidden: {
      height: "0%",
      opacity: 0,
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1,
      },
    },
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      controls.start("hidden")
      setHasAnimated(false)
    }
  }, [isInView, controls, hasAnimated])

  return (
    <motion.div
      ref={itemRef}
      className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
      variants={slideVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className={styles.timelineContent} variants={contentVariants} initial="hidden" animate={controls}>
        <motion.div className={styles.timelineYear} variants={itemVariants}>
          {item.year}
        </motion.div>
        <motion.h3 variants={itemVariants}>{item.title}</motion.h3>
        <motion.p variants={itemVariants}>{item.description}</motion.p>
      </motion.div>

      <motion.div
        className={`${styles.timelineDot} ${isLeft ? styles.dotRight : styles.dotLeft}`}
        variants={dotVariants}
        initial="hidden"
        animate={controls}
      />

      {index < 3 && (
        <motion.div
          className={`${styles.timelineConnector} ${isLeft ? styles.connectorRight : styles.connectorLeft}`}
          variants={lineVariants}
          initial="hidden"
          animate={controls}
        />
      )}
    </motion.div>
  )
}

