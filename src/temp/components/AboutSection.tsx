"use client"

import { motion } from "framer-motion"
import styles from "../about.module.css"
import StatItem from "./StatItem"

interface AboutSectionProps {
  scrollY: number
}

export default function AboutSection({ scrollY }: AboutSectionProps) {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <motion.div
          className={styles.aboutText}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollY > 100 ? 1 : 0,
            y: scrollY > 100 ? 0 : 50,
          }}
          transition={{ duration: 0.7 }}
        >
          <h2>Who We Are</h2>
          <p>
            Metalogic is a leading technology company specializing in innovative digital solutions. Founded in 2015,
            we've been at the forefront of digital transformation, helping businesses leverage technology to achieve
            their goals.
          </p>
          <p>
            Our team of experts combines technical expertise with creative thinking to deliver solutions that not only
            meet but exceed client expectations. We believe in the power of technology to transform businesses and
            improve lives.
          </p>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{
            opacity: scrollY > 200 ? 1 : 0,
          }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <StatItem number="7+" label="Years of Experience" scrollY={scrollY} delay={0.3} />
          <StatItem number="100+" label="Projects Completed" scrollY={scrollY} delay={0.4} />
          <StatItem number="50+" label="Happy Clients" scrollY={scrollY} delay={0.5} />
        </motion.div>
      </div>
    </section>
  )
}
