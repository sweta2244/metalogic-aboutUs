"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import styles from "../about.module.css"
import MobileMenu from "./MobileMenu"
import ThemeToggle from "./ThemeToggle"
import Logo from "/metalogo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={Logo} alt="logo" width="50px"/>
          <h1>METALOGIC</h1>
        </motion.div>

        <div className={styles.navContainer}>
          <nav className={styles.desktopNav}>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="#" className={item === "About" ? styles.active : ""}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          <ThemeToggle />

          <button className={styles.mobileMenuButton} onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} />
    </header>
  )
}
