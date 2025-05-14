"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi"
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.footer
      className={styles.footer}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h3 className={styles.footerTitle}>Metalogic</h3>
            <p className={styles.footerDescription}>
              Driving innovations and empowering businesses with cutting-edge technology solutions.
            </p>
            <div className={styles.socialLinks}>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiFacebook aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/" className={styles.footerLink}>
                    Home
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/services" className={styles.footerLink}>
                    Services
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/career" className={styles.footerLink}>
                    Career
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/blogs" className={styles.footerLink}>
                    Blogs
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/about" className={styles.footerLink}>
                    About Us
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FiMapPin aria-hidden="true" className={styles.contactIcon} />
                <span>123 Tech Street, Digital City</span>
              </li>
              <li className={styles.contactItem}>
                <FiPhone aria-hidden="true" className={styles.contactIcon} />
                <a href="tel:+1234567890" className={styles.contactLink}>
                  +1 (234) 567-890
                </a>
              </li>
              <li className={styles.contactItem}>
                <FiMail aria-hidden="true" className={styles.contactIcon} />
                <a href="mailto:info@metalogic.com" className={styles.contactLink}>
                  info@metalogic.com
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h3 className={styles.footerTitle}>Newsletter</h3>
            <p className={styles.newsletterText}>
              Subscribe to our newsletter to receive updates on our latest services and tech insights.
            </p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" className={styles.newsletterInput} required />
              <motion.button
                type="submit"
                className={styles.newsletterButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div className={styles.footerBottom} variants={itemVariants}>
          <p className={styles.copyright}>&copy; {currentYear} Metalogic. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
