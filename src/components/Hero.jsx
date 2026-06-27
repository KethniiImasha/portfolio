import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left content */}
        <div className="hero__content">
          {/* Status badge */}
          <div className="hero__badge">
            <span className="hero__badge-sparkle">✦</span>
            Available for opportunities
          </div>

          {/* Main heading */}
          <h1 className="hero__heading">
            Hi, I'm <span className="hero__name">Kethni Nanayakkara</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Software engineer building AI-powered tools &amp; clean web experiences.
          </p>

          {/* Bio */}
          <p className="hero__bio">
            Final-year BSc (Hons) Software Engineering at NSBM Green University,
            affiliated with the University of Plymouth, UK — blending on-device AI
            with thoughtful, accessible interfaces.
          </p>

          {/* CTA buttons */}
          <div className="hero__actions">
            <a href="#projects" className="hero__btn-primary">
              View my work <FiArrowRight size={18} />
            </a>
            <a href="#contact" className="hero__btn-secondary">
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div className="hero__social">
            <a href="https://github.com/KethniiImasha" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/kethni-nanayakkara" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-ring" aria-hidden="true" />
          <div className="hero__photo">
            <img src="/photo.jpg" alt="Kethni Nanayakkara" />
          </div>
        </div>
      </div>
    </section>
  )
}
