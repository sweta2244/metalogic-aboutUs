import type React from "react"
import styles from "./TeamMember.module.css"

interface TeamMemberProps {
  name: string
  position: string
  bio: string
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, bio }) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.memberImage} aria-hidden="true">
        <div className={styles.imagePlaceholder}></div>
      </div>
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberPosition}>{position}</p>
        <p className={styles.memberBio}>{bio}</p>
      </div>
    </div>
  )
}

export default TeamMember
