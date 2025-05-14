"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import styles from "../about.module.css"
import TimelineItem from "./TimelineItem"

interface TimelineSectionProps {
  scrollY: number
}

export default function TimelineSection({ scrollY }: TimelineSectionProps) {
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineItems = [
    {
      year: "2015",
      title: "Founded",
      description: "Metalogic was founded with a vision to transform digital experiences.",
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Expanded our team and opened a new office to accommodate growth.",
    },
    {
      year: "2019",
      title: "Innovation",
      description: "Launched our innovative product suite and expanded service offerings.",
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Expanded operations to serve clients globally with innovative solutions.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className={styles.timeline}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: scrollY > 900 ? 1 : 0,
          y: scrollY > 900 ? 0 : 30,
        }}
        transition={{ duration: 0.5 }}
      >
        Our Journey
      </motion.h2>

      <motion.div
        ref={timelineRef}
        className={styles.timelineContainer}
        initial="hidden"
        animate={scrollY > 950 ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.year} item={item} index={index} timelineRef={timelineRef} />
        ))}
      </motion.div>
    </section>
  )
}
