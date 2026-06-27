import { FiDownload, FiBookOpen, FiCode, FiStar } from 'react-icons/fi'
import './About.css'

const highlights = [
  { icon: <FiCode size={18} />, text: "React, TypeScript & Python" },
  { icon: <FiStar size={18} />, text: "WSO2 Open Source Contributor" },
  { icon: <FiBookOpen size={18} />, text: "ICTAR 2026 Research Paper Author" },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about__grid">
          {/* Avatar area */}
          <div className="about__avatar-wrap">
            <div className="about__avatar">
              <div className="about__avatar-initials">KN</div>
            </div>
            <div className="about__avatar-ring" aria-hidden="true" />

            {/* Status badge */}
            <div className="about__badge">
              <span className="about__badge-dot" />
              Available for internships
            </div>
          </div>

          {/* Text */}
          <div className="about__text">
            <p className="about__para">
              I'm a final-year <strong>BSc (Hons) Software Engineering</strong> student at{' '}
              <strong>NSBM Green University</strong> (affiliated with the University of Plymouth, UK),
              based in Colombo, Sri Lanka.
            </p>
            <p className="about__para">
              I care deeply about writing clean, accessible code and building things that are
              genuinely useful. My final year project, <strong>EmoUI</strong>, is a Chrome extension
              that uses on-device AI to detect facial emotions and adapt the browsing experience —
              privacy-first, no data leaves your device.
            </p>
            <p className="about__para">
              I'm an active open source contributor to <strong>WSO2 identity-apps</strong>, with
              merged pull requests covering i18n refactors, ESLint fixes, and accessibility improvements.
              I also co-authored a research paper published at <strong>KDU IRC 2025</strong> and have
              a paper accepted to <strong>ICTAR 2026</strong> on facial emotion recognition systems.
            </p>

            <ul className="about__highlights">
              {highlights.map((h, i) => (
                <li key={i} className="about__highlight">
                  <span className="about__highlight-icon">{h.icon}</span>
                  {h.text}
                </li>
              ))}
            </ul>

            <div className="about__edu">
              <div className="about__edu-card">
                <p className="about__edu-degree">BSc (Hons) Software Engineering</p>
                <p className="about__edu-school">NSBM Green University · University of Plymouth, UK</p>
                <p className="about__edu-year">2023 – 2026</p>
              </div>
            </div>

            <div className="about__actions">
              <a
                href="/kethni-cv.pdf"
                download
                className="btn-primary"
              >
                <FiDownload size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
