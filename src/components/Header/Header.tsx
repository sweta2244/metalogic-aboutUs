"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"
import { useTheme } from "../../context/ThemeContext"
import styles from "./Header.module.css"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <motion.div className={styles.logo} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-14%20104018-empMC0uILieqJWhVAuoGrYa0DzKBUQ.png"
              alt="Metalogic Logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>MetaLogic</span>
          </motion.div>
        </Link>

        <motion.button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </motion.button>

        <motion.nav
          id="navigation-menu"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Main navigation"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className={styles.navList}>
            <motion.li className={styles.navItem} variants={itemVariants}>
              <Link to="/" className={styles.navLink} onClick={closeMenu}>
                Home
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={itemVariants}>
              <Link to="/services" className={styles.navLink} onClick={closeMenu}>
                Services
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={itemVariants}>
              <Link to="/career" className={styles.navLink} onClick={closeMenu}>
                Career
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={itemVariants}>
              <Link to="/blogs" className={styles.navLink} onClick={closeMenu}>
                Blogs
              </Link>
            </motion.li>
            <motion.li className={styles.navItem} variants={itemVariants}>
              <Link to="/about" className={`${styles.navLink} ${styles.active}`} onClick={closeMenu}>
                About Us
              </Link>
            </motion.li>
          </motion.ul>

          <motion.button
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Get in Touch
          </motion.button>

          <motion.button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            variants={itemVariants}
          >
            {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          </motion.button>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
