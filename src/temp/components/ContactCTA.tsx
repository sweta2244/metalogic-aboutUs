"use client"

import { motion } from "framer-motion"
import styles from "../about.module.css"

interface ContactCTAProps {
  scrollY: number
}

export default function ContactCTA({ scrollY }: ContactCTAProps) {
  return (
    <section className={styles.contactCta}>
      <motion.div
        className={styles.ctaContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: scrollY > 1500 ? 1 : 0,
          y: scrollY > 1500 ? 0 : 50,
        }}
        transition={{ duration: 0.7 }}
      >
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss how Metalogic can help you achieve your digital goals.</p>
        <motion.button className={styles.ctaButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  )
}

