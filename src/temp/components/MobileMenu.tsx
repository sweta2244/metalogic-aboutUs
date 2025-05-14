"use client"

import { motion, AnimatePresence } from "framer-motion"
import styles from "../about.module.css"

interface MobileMenuProps {
  isOpen: boolean
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#" className={item === "About" ? styles.active : ""}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
