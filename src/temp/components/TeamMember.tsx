"use client"

import { motion } from "framer-motion"
import styles from "../about.module.css"

interface TeamMemberProps {
  member: {
    name: string
    role: string
    img: string
  }
  index: number
  scrollY: number
}

export default function TeamMember({ member, index, scrollY }: TeamMemberProps) {
  return (
    <motion.div
      className={styles.teamMember}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: scrollY > 650 ? 1 : 0,
        y: scrollY > 650 ? 0 : 50,
      }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className={styles.memberImage}>
        <img src={member.img || "/placeholder.svg"} alt={member.name}/>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <motion.div
          className={styles.memberOverlay}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.memberSocial}>
            <a href="#" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
