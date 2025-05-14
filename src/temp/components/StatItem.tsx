"use client"

import { motion } from "framer-motion"
import styles from "../about.module.css"

interface StatItemProps {
  number: string
  label: string
  scrollY: number
  delay: number
}

export default function StatItem({ number, label, scrollY, delay }: StatItemProps) {
  return (
    <div className={styles.statItem}>
      <motion.span
        className={styles.statNumber}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: scrollY > 200 ? 1 : 0,
          scale: scrollY > 200 ? 1 : 0.5,
        }}
        transition={{ duration: 0.5, delay }}
      >
        {number}
      </motion.span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}
