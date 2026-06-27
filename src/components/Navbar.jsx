import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from 'react-icons/fi'
import './Navbar.css'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          kethni<span>.</span>
        </a>

        {/* Centre nav links */}
        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="navbar__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="navbar__right">
          {/* Theme toggle */}
          <button
            className="navbar__theme-btn"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a href="/kethni-cv.pdf" download className="navbar__cv-btn">
            <FiDownload size={15} /> Download CV
          </a>

          <div className="navbar__avatar" aria-label="Kethni Nanayakkara">
            <img src="/photo.jpg" alt="Kethni Nanayakkara"/>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  )
}
