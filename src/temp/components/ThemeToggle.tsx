"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import styles from "../about.module.css"
import { useTheme } from "../hooks/useTheme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className={styles.icon} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className={styles.icon} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
