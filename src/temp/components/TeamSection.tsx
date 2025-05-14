"use client"

import { motion } from "framer-motion"
import styles from "../about.module.css"
import TeamMember from "./TeamMember"

interface TeamSectionProps {
  scrollY: number
}

export default function TeamSection({ scrollY }: TeamSectionProps) {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", img: "/img1.jpg" },
    { name: "Jane Smith", role: "CTO", img: "/img2.jpg" },
    { name: "Mike Johnson", role: "Lead Developer", img: "/img3.jpg" },
    { name: "Sarah Williams", role: "UX Designer", img: "/img4.jpg" },
  ]

  return (
    <section className={styles.team}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: scrollY > 600 ? 1 : 0,
          y: scrollY > 600 ? 0 : 30,
        }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h2>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <TeamMember key={member.name} member={member} index={index} scrollY={scrollY} />
        ))}
      </div>
    </section>
  )
}
