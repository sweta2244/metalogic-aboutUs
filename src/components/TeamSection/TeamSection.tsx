import type React from "react"
import TeamMember from "./TeamMember"
import styles from "./TeamSection.module.css"

interface TeamMemberData {
  id: number
  name: string
  position: string
  bio: string
}

const teamMembers: TeamMemberData[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in the tech industry, John leads our team with vision and expertise.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO",
    bio: "Jane brings technical excellence and innovation to every project, ensuring we stay ahead of the curve.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Lead Designer",
    bio: "Michael's creative approach to design has helped shape our unique aesthetic and user experience.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Project Manager",
    bio: "Sarah ensures our projects run smoothly, on time, and exceed client expectations.",
  },
]

const TeamSection: React.FC = () => {
  return (
    <section className={styles.teamSection} aria-labelledby="team-heading">
      <div className={styles.container}>
        <h2 id="team-heading" className={styles.sectionTitle}>
          Our Team
        </h2>
        <p className={styles.sectionDescription}>
          Meet the talented individuals who make our company thrive. Our diverse team brings together expertise from
          various fields to deliver exceptional results.
        </p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <TeamMember key={member.id} name={member.name} position={member.position} bio={member.bio} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
