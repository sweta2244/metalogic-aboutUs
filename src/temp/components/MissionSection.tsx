"use client"

import { motion } from "framer-motion"
import styles from "../about.module.css"

interface MissionSectionProps {
  scrollY: number
}

export default function MissionSection({ scrollY }: MissionSectionProps) {
  return (
    <section className={styles.mission}>
      <div className={styles.missionContent}>
        <motion.div
          className={styles.missionVision}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: scrollY > 400 ? 1 : 0,
            x: scrollY > 400 ? 0 : -50,
          }}
          transition={{ duration: 0.7 }}
        >
          <h2>Our Mission</h2>
          <p>
            To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive
            advantage in the digital age.
          </p>
        </motion.div>

        <motion.div
          className={styles.missionVision}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: scrollY > 400 ? 1 : 0,
            x: scrollY > 400 ? 0 : 50,
          }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2>Our Vision</h2>
          <p>
            To be the leading technology partner for businesses seeking digital transformation, recognized for our
            innovation, expertise, and commitment to client success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
