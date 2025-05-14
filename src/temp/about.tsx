"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import styles from "./about.module.css"
import ThemeProvider from "./ThemeProvider"
import { useTheme } from "./hooks/useTheme"
import Logo from "../../public/metalogo.png";

export default function About() {
  return (
    <ThemeProvider>
      <AboutPage />
    </ThemeProvider>
  )
}

function AboutPage() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDark = theme === "dark"

  // Handle scroll animations
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={`${styles.container} ${isDark ? styles.dark : ""}`}>
      {/* Header */}
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

            <button className={styles.mobileMenuButton} onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
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
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1>Driving Innovations And Empowering Business</h1>
              <p>Metalogic envisions a future where technology serves as a catalyst for limitless human potential, fostering innovation and empowering organizations to thrive in a transformative digital era.</p>
            </motion.div>

            {/* <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className={styles.imageContainer}>
                <motion.div
                  className={styles.imageBg}
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
              </div>
            </motion.div> */}
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <motion.div
              className={styles.aboutText}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrollY > 100 ? 1 : 0,
                y: scrollY > 100 ? 0 : 50,
              }}
              transition={{ duration: 0.7 }}
            >
              <h2>Who We Are</h2>
              <p>
                Metalogic is a leading technology company specializing in innovative digital solutions. Founded in 2015,
                we've been at the forefront of digital transformation, helping businesses leverage technology to achieve
                their goals.
              </p>
              <p>
                Our team of experts combines technical expertise with creative thinking to deliver solutions that not
                only meet but exceed client expectations. We believe in the power of technology to transform businesses
                and improve lives.
              </p>
            </motion.div>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0 }}
              animate={{
                opacity: scrollY > 200 ? 1 : 0,
              }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className={styles.statItem}>
                <motion.span
                  className={styles.statNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: scrollY > 200 ? 1 : 0,
                    scale: scrollY > 200 ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  7+
                </motion.span>
                <span className={styles.statLabel}>Years of Experience</span>
              </div>
              <div className={styles.statItem}>
                <motion.span
                  className={styles.statNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: scrollY > 200 ? 1 : 0,
                    scale: scrollY > 200 ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  100+
                </motion.span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <motion.span
                  className={styles.statNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: scrollY > 200 ? 1 : 0,
                    scale: scrollY > 200 ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  50+
                </motion.span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.mission}>
          <div className={styles.missionContent}>
            <motion.div
              className={styles.missionVision}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: scrollY > 400 ? 1 : 0,
                x: scrollY > 400 ? 0 : -50,
              }}
              transition={{ duration: 0.7 }}
            >
              <h2>Our Mission</h2>
              <p>
                To empower businesses through innovative technology solutions that drive growth, efficiency, and
                competitive advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              className={styles.missionVision}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: scrollY > 400 ? 1 : 0,
                x: scrollY > 400 ? 0 : 50,
              }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2>Our Vision</h2>
              <p>
                To be the leading technology partner for businesses seeking digital transformation, recognized for our
                innovation, expertise, and commitment to client success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
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
            {[
              { name: "John Doe", role: "CEO & Founder", img: "/placeholder.svg?height=300&width=300" },
              { name: "Jane Smith", role: "CTO", img: "/placeholder.svg?height=300&width=300" },
              { name: "Mike Johnson", role: "Lead Developer", img: "/placeholder.svg?height=300&width=300" },
              { name: "Sarah Williams", role: "UX Designer", img: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
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
                  <img src={member.img || "/placeholder.svg"} alt={member.name} />
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
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timeline}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: scrollY > 900 ? 1 : 0,
              y: scrollY > 1900 ? 0 : 30,
            }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h2>

          <div className={styles.timelineContainer}>
            {[
              {
                year: "2015",
                title: "Founded",
                description: "Metalogic was founded with a vision to transform digital experiences.",
              },
              {
                year: "2017",
                title: "Expansion",
                description: "Expanded our team and opened a new office to accommodate growth.",
              },
              {
                year: "2019",
                title: "Innovation",
                description: "Launched our innovative product suite and expanded service offerings.",
              },
              {
                year: "2022",
                title: "Global Reach",
                description: "Expanded operations to serve clients globally with innovative solutions.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{
                  opacity: scrollY > 1550 + index * 50 ? 1 : 0,
                  x: scrollY > 950 + index * 50 ? 0 : index % 2 === 0 ? -50 : 50,
                }}
                transition={{ duration: 0.6, delay: 0.5 * index }}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: scrollY > 1200 ? 1 : 0,
              y: scrollY > 1200 ? 0 : 30,
            }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h2>

          <div className={styles.valuesGrid}>
            {[
              { title: "Innovation", description: "We constantly push boundaries to create cutting-edge solutions." },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code to customer service.",
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical business practices.",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and collaborative problem-solving.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: scrollY > 1250 + index * 30 ? 1 : 0,
                  y: scrollY > 1250 + index * 30 ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.contactCta}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: scrollY > 1500 ? 1 : 0,
              y: scrollY > 1500 ? 0 : 50,
            }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how Metalogic can help you achieve your digital goals.</p>
            <motion.button className={styles.ctaButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Us
            </motion.button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>METALOGIC</h2>
            <p>Pioneering Digital Transformation</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Whitepapers</a>
                </li>
                <li>
                  <a href="#">Webinars</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>Contact</h3>
              <ul>
                <li>123 Tech Street</li>
                <li>Kathmandu, Nepal</li>
                <li>info@metalogic.com.np</li>
                <li>+977 1234567890</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Metalogic. All rights reserved.</p>
          <div className={styles.footerSocial}>
            <a href="#" aria-label="Facebook">
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
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
            <a href="#" aria-label="Instagram">
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
