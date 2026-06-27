import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import './Contact.css'

const contacts = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "kethnin2005@gmail.com",
    href: "mailto:kethnin2005@gmail.com",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/kethni-nanayakkara",
    href: "https://linkedin.com/in/kethni-nanayakkara",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/KethniiImasha",
    href: "https://github.com/KethniiImasha",
  },
  {
    icon: <SiWhatsapp size={20} />,
    label: "WhatsApp",
    value: "+94 768275174",  
    href: "https://wa.me/94768275174",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Get In <span>Touch</span></h2>

        <div className="contact__grid">
          <div className="contact__left">
            <p className="contact__intro">
              I'm currently looking for internship opportunities in Software Engineering
              and Business Analysis. If you have a role, project, or just want to say hello
              — my inbox is open.
            </p>

            <div className="contact__cards">
              {contacts.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__card"
                >
                  <span className="contact__card-icon">{c.icon}</span>
                  <div className="contact__card-text">
                    <span className="contact__card-label">{c.label}</span>
                    <span className="contact__card-value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick message form */}
          <form
            className="contact__form"
            onSubmit={e => {
              e.preventDefault()
              const data = new FormData(e.target)
              const mailto = `mailto:kethnin2005@gmail.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(data.get('message') + '\n\nFrom: ' + data.get('name'))}`
              window.location.href = mailto
            }}
          >
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__field">
              <label className="contact__label" htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" className="contact__input" placeholder="Jane Doe" required />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" className="contact__input" placeholder="Internship Opportunity" required />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="contact__input contact__textarea" placeholder="Hi Kethni, I'd love to..." rows={5} required />
            </div>

            <button type="submit" className="btn-primary contact__submit">
              <FiSend size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
