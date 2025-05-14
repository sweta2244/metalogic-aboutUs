// "use client"

// import { motion } from "framer-motion"
// import styles from "../about.module.css"

// export default function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.heroContent}>
//         <motion.div
//           className={styles.heroText}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <h1>Driving Innovations And Empowering Business</h1>
//           <p>Metalogic envisions a future where technology serves as a catalyst for limitless human potential, fostering innovation and empowering organizations to thrive in a transformative digital era.</p>
//         </motion.div>

//       </div>
//     </section>
//   )
// }

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import styles from "../about.module.css"
import HeroBackground from "./HeroBackground"
import { useTheme } from "../hooks/useTheme"

export default function HeroSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const heroRef = useRef<HTMLDivElement>(null!)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={heroRef} className={styles.hero}>
      <HeroBackground isDark={isDark} />

      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ opacity, y }}
        >
          <h1>Driving Innovations And Empowering Business</h1>
          <p>Metalogic envisions a future where technology serves as a catalyst for limitless human potential, fostering innovation and empowering organizations to thrive in a transformative digital era.</p>

          {/* <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button className={styles.primaryButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Our Services
            </motion.button>
            <motion.button className={styles.secondaryButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Us
            </motion.button>
          </motion.div> */}
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ scale }}
        >
          <div className={styles.imageContainer}>
            {/* <img src="/placeholder.svg?height=400&width=600" alt="Metalogic Team" /> */}
            <motion.div
              className={styles.imageBg}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>

            <motion.div
              className={`${styles.decorCircle} ${styles.decorCircle1}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.div
              className={`${styles.decorCircle} ${styles.decorCircle2}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <motion.div
              className={`${styles.decorSquare}`}
              initial={{ opacity: 0, rotate: -20, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.5 },
          y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
        }}
      >
        <span>Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}
