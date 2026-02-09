import { Reveal } from '../shared/Reveal'
import type { Testimonial } from '@/types'

// Note: LinkedIn doesn't provide a public API to fetch recommendations/testimonials.
// The LinkedIn Recommendation API requires partnership approval and is mainly for creating, not fetching.
// 
// To add real testimonials from LinkedIn:
// 1. Go to your LinkedIn profile → Recommendations section
// 2. Copy the recommendation text, person's name, and their role
// 3. Add them to the TESTIMONIALS array below
// 4. Optionally add their LinkedIn profile URL and a highlight/metric
//
// Alternative: You could set up a backend service that scrapes LinkedIn (but this violates LinkedIn ToS)
// or use LinkedIn's embed widget if available in the future.

const TESTIMONIALS: Testimonial[] = [
  // Add your real LinkedIn recommendations here
  // Example format:
  // {
  //   name: 'Person Name',
  //   role: 'Their Role at Company',
  //   text: 'Full recommendation text from LinkedIn...',
  //   highlight: 'Key metric or achievement mentioned',
  //   linkedinUrl: 'https://www.linkedin.com/in/person-profile', // Optional
  // },
  
  // No testimonials added yet. Add real ones from your LinkedIn recommendations.
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section section-band">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-quote-left" style={{ marginRight: '0.5rem' }}></i>
          Recommendations & Impact
        </h2>
        <p className="section-kicker reveal">
          Feedback from colleagues and leaders on the impact of my work.
        </p>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '0.9rem',
          color: 'var(--muted)',
        }}>
          <a 
            href="https://www.linkedin.com/in/girijashankarj/recommendations/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600,
            }}
          >
            <i className="fab fa-linkedin"></i>
            <span>View all recommendations on LinkedIn</span>
            <i className="fa-solid fa-external-link" style={{ fontSize: '0.75rem' }}></i>
          </a>
        </div>
        {TESTIMONIALS.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}>
            {TESTIMONIALS.map((testimonial, i) => (
              <Reveal key={i}>
                <div className="card">
                  <div style={{ marginBottom: '1rem' }}>
                    <i className="fa-solid fa-quote-right" style={{ fontSize: '1.5rem', color: 'var(--accent)', opacity: 0.3 }}></i>
                  </div>
                  <p style={{ 
                    marginBottom: '1rem', 
                    fontStyle: 'italic',
                    lineHeight: '1.7',
                    flex: '1 1 auto',
                  }}>
                    "{testimonial.text}"
                  </p>
                  <div style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                      {testimonial.linkedinUrl ? (
                        <a 
                          href={testimonial.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: 'var(--text)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                        >
                          {testimonial.name}
                          <i className="fab fa-linkedin" style={{ fontSize: '0.75rem', color: 'var(--accent)' }}></i>
                        </a>
                      ) : (
                        testimonial.name
                      )}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>{testimonial.role}</div>
                    <div style={{
                      fontSize: '0.8rem',
                      padding: '0.35rem 0.75rem',
                      background: 'var(--gradient-secondary)',
                      borderRadius: '6px',
                      display: 'inline-block',
                      fontWeight: 600,
                      color: 'var(--accent)',
                    }}>
                      {testimonial.highlight}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            color: 'var(--muted)',
          }}>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              Recommendations will appear here once added.
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Visit the link above to view recommendations on LinkedIn.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
