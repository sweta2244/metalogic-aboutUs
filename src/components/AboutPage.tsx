import type React from "react"
import "./AboutPage.css"

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <header className="header">
        <div className="logo-container">
          <div className="logo">M</div>
          <span className="logo-text">MetaLogic</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                About Us
              </a>
            </li>
          </ul>
          <button className="contact-button">Get in Touch</button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">
              Driving Innovations
              <br />
              And Empowering
              <br />
              Business
            </h1>
            <p className="hero-description">
              Metalogic envisions a future where technology serves as a catalyst for limitless human potential,
              fostering innovation and empowering organizations to thrive in a transformative digital era.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2 className="section-title">Our Story</h2>
                <p className="paragraph">
                  Founded with a vision to transform the digital landscape, Metalogic has been at the forefront of
                  technological innovation since our inception. We believe in harnessing the power of technology to
                  create meaningful solutions that drive business growth and enhance user experiences.
                </p>
                <p className="paragraph">
                  Our journey began with a simple mission: to bridge the gap between complex technology and business
                  needs. Today, we've evolved into a full-service digital partner helping organizations navigate the
                  ever-changing technological landscape with confidence.
                </p>
              </div>
              <div className="about-image">
                <div className="image-placeholder"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">We constantly push boundaries to create cutting-edge solutions.</p>
              </div>
              <div className="value-card">
                <h3 className="value-title">Excellence</h3>
                <p className="value-description">
                  We strive for excellence in everything we do, from code to customer service.
                </p>
              </div>
              <div className="value-card">
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">We operate with transparency and honesty in all our interactions.</p>
              </div>
              <div className="value-card">
                <h3 className="value-title">Collaboration</h3>
                <p className="value-description">
                  We believe in the power of teamwork and collaborative problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Our Leadership Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="member-image"></div>
                <h3 className="member-name">John Doe</h3>
                <p className="member-position">CEO & Founder</p>
                <p className="member-bio">Visionary leader with 15+ years in technology innovation.</p>
              </div>
              <div className="team-card">
                <div className="member-image"></div>
                <h3 className="member-name">Jane Smith</h3>
                <p className="member-position">CTO</p>
                <p className="member-bio">Technical genius driving our engineering excellence.</p>
              </div>
              <div className="team-card">
                <div className="member-image"></div>
                <h3 className="member-name">Michael Johnson</h3>
                <p className="member-position">Design Director</p>
                <p className="member-bio">Creative mind behind our award-winning designs.</p>
              </div>
              <div className="team-card">
                <div className="member-image"></div>
                <h3 className="member-name">Sarah Williams</h3>
                <p className="member-position">Operations Head</p>
                <p className="member-bio">Efficiency expert ensuring smooth project delivery.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-description">
                Let's collaborate to bring your digital vision to life. Our team of experts is ready to help.
              </p>
              <button className="cta-button">Get In Touch</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">Metalogic</h3>
              <p className="footer-description">
                Driving innovations and empowering businesses with cutting-edge technology solutions.
              </p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="contact-list">
                <li className="contact-item">123 Tech Street, Digital City</li>
                <li className="contact-item">
                  <a href="tel:+1234567890" className="contact-link">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="contact-item">
                  <a href="mailto:info@metalogic.com" className="contact-link">
                    info@metalogic.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">&copy; 2025 Metalogic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage
