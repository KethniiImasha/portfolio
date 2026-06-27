import { useState } from 'react'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { projects } from '../data/data'
import './Projects.css'

const ALL = 'All'

export default function Projects() {
  const categories = [ALL, ...Array.from(new Set(projects.map(p => p.category)))]
  const [active, setActive] = useState(ALL)
  const [showAll, setShowAll] = useState(false)

  const filtered = active === ALL ? projects : projects.filter(p => p.category === active)
  const displayed = showAll ? filtered : filtered.slice(0, 4)

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        {/* Category filter */}
        <div className="projects__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${active === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => { setActive(cat); setShowAll(false) }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {displayed.map((p, i) => (
            <div
              key={p.id}
              className={`project-card ${p.highlight ? 'project-card--featured' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {p.highlight && (
                <div className="project-card__featured-badge">
                  <FiStar size={12} /> Featured
                </div>
              )}

              <div className="project-card__category-tag">{p.category}</div>

              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
              </div>

              <div className="project-card__footer">
                <div className="project-card__tags">
                  {p.tags.slice(0, 3).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="tag tag--more">+{p.tags.length - 3}</span>
                  )}
                </div>

                <div className="project-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="project-card__link">
                      <FiGithub size={16} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo" className="project-card__link">
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > 4 && (
          <div className="projects__more">
            <button className="btn-outline" onClick={() => setShowAll(s => !s)}>
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  )
}
