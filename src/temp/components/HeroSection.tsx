"use client"

import { motion } from "framer-motion"
import styles from "../about.module.css"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Driving Innovations And Empowering Business</h1>
          <p>Metalogic envisions a future where technology serves as a catalyst for limitless human potential, fostering innovation and empowering organizations to thrive in a transformative digital era.</p>
        </motion.div>

      </div>
    </section>
  )
}
