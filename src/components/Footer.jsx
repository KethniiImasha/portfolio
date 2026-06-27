import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Kethni Nanayakkara. Built with React + Vite.
        </p>
        <p className="footer__made">
          Designed & developed with <span>♥</span> in Colombo, Sri Lanka
        </p>
      </div>
    </footer>
  )
}
