import { Reveal } from '../shared/Reveal'
import { ContactForm } from './ContactForm'
import { NewsletterSubscribe } from './NewsletterSubscribe'
import { GitHubStats } from '../shared/GitHubStats'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-envelope" style={{ marginRight: '0.5rem' }}></i>
          Contact
        </h2>
        <p className="section-kicker reveal">
          Open to AI Platform Engineer roles, Gen AI/MLOps positions, consulting, and AI-enabled product work. 
          <strong style={{ display: 'block', marginTop: '0.5rem', color: 'var(--accent)' }}>
            <i className="fa-solid fa-circle-check" style={{ marginRight: '0.5rem' }}></i>
            Available for new opportunities · Response time: 24-48 hours
          </strong>
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Details</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.75rem' }}>
                <i className="fa-solid fa-envelope"></i>
                <span>girij***********@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.75rem' }}>
                <i className="fa-solid fa-phone"></i>
                <span>888-***-****</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-location-dot"></i>
                <span>Pune, Maharashtra, India</span>
              </div>
              <GitHubStats />
            </div>
          </Reveal>
          <ContactForm />
          <NewsletterSubscribe />
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Quick Note</h3>
              <p style={{ marginBottom: '1rem' }}>Thanks for visiting. I keep refining this portfolio as I explore new ideas and technologies.</p>
              <div className="button-group" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: 'auto',
              }}>
                <a
                  href="https://www.linkedin.com/in/girijashankarj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  <i className="fab fa-linkedin"></i>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
