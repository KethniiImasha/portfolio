import { useState } from 'react'
import { skillCategories } from '../data/data'
import './Skills.css'

const iconMap = {
  "</>": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  "[]": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
    </svg>
  ),
  "{}": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"/>
      <path d="M20 6c0-1.1-.9-2-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 1-2 2 2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2"/>
    </svg>
  ),
  "~>": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "#": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
}

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id)
  const current = skillCategories.find(c => c.id === active)

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Tools I <span>work with</span></h2>
        <p className="skills__subtitle">
          Always eager to learn — picking up new frameworks, tools and patterns is part of the fun.
        </p>

        <div className="skills__layout">
          {/* Sidebar tabs */}
          <div className="skills__sidebar">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                className={`skills__tab ${active === cat.id ? 'skills__tab--active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                <span className="skills__tab-icon">{iconMap[cat.icon] || cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Icon grid */}
          <div className="skills__panel">
            <div className="skills__panel-header">
              <span className="skills__panel-icon">{iconMap[current.icon]}</span>
              <h3 className="skills__panel-title">{current.label}</h3>
            </div>
            <div className="skills__icon-grid">
              {current.skills.map(skill => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-card__icon">
                    <i className={skill.icon} />
                  </div>
                  <span className="skill-card__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
