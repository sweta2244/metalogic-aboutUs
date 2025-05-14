import type React from "react"
import styles from "./AboutHero.module.css"

const AboutHero: React.FC = () => {
  return (
    <section className={styles.heroSection} aria-labelledby="about-heading">
      <div className={styles.container}>
        <h1 id="about-heading" className={styles.title}>
          About Us
        </h1>
        <p className={styles.subtitle}>
          We are a team of passionate developers and designers dedicated to creating innovative digital solutions.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
