import type React from "react"
import styles from "./AboutContent.module.css"

const AboutContent: React.FC = () => {
  return (
    <section className={styles.aboutContent} aria-labelledby="our-story">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 id="our-story" className={styles.sectionTitle}>
              Our Story
            </h2>
            <p className={styles.paragraph}>
              Founded in 2015, Metalogic has been at the forefront of digital innovation, helping businesses transform
              their ideas into reality. Our journey began with a simple mission: to create technology solutions that
              make a difference.
            </p>
            <p className={styles.paragraph}>
              Over the years, we've grown from a small team of enthusiasts to a full-service digital agency with
              expertise in web development, mobile applications, UI/UX design, and digital marketing. We take pride in
              our work and the relationships we've built with our clients.
            </p>
            <h3 className={styles.subheading}>Our Mission</h3>
            <p className={styles.paragraph}>
              To empower businesses with innovative technology solutions that drive growth and create meaningful user
              experiences.
            </p>
            <h3 className={styles.subheading}>Our Vision</h3>
            <p className={styles.paragraph}>
              To be the leading digital partner for businesses seeking to thrive in the digital era, known for our
              creativity, technical excellence, and client satisfaction.
            </p>
          </div>
          <div className={styles.imageContent} aria-hidden="true">
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
