import { Reveal } from '../shared/Reveal'

export function About() {
  return (
    <section id="about" className="section" itemScope itemType="https://schema.org/Person">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-user" style={{ marginRight: '0.5rem' }}></i>
          About
        </h2>
        <p className="section-kicker reveal">
          AI Platform Engineer specializing in Gen AI, data engineering, and developer tooling. Building production-ready solutions and enabling teams with intelligent automation.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          <Reveal>
            <div className="card" style={{
              gridColumn: 'span 1',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Profile</h3>
              <p style={{ marginBottom: '1rem' }}>
                AI Platform Engineer and Senior Associate Consultant with <strong>8+ years</strong> of full-stack experience 
                across product-based and service companies. <strong>JavaScript is my primary and favorite language</strong>, 
                with experience in Python, Java, and C++.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Core Specializations:</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                  <li>Workflow automation tools (n8n) and Gen AI tools (Flutter Flow, Retool)</li>
                  <li>Google services (Firebase, Analytics, Maps API) for backend and analytics</li>
                  <li>MLOps (AWS) and AI enablement leadership</li>
                  <li>Production-ready developer tools and Cursor adoption</li>
                  <li>Data engineering and cloud platforms (AWS, Databricks, Snowflake, Azure)</li>
                </ul>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Programming Languages:</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                  <li><strong>JavaScript</strong> (Primary & Favorite) - 8+ years</li>
                  <li>Python, Java, C++ - Production experience</li>
                  <li>Data Structures & Algorithms - Basic knowledge, actively practicing on LeetCode</li>
                </ul>
              </div>
              <p style={{ marginTop: 'auto', fontStyle: 'italic', color: 'var(--muted)', marginBottom: 0, fontSize: '0.9rem' }}>
                <strong>My Philosophy:</strong> Learn → Try → Share. I continuously explore new technologies, experiment through projects, and share knowledge with the global tech community.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="card" style={{
              gridColumn: 'span 1',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Achievements & Contributions</h3>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Key Achievements:</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                  <li>Built Node.js packages for PR quality checks achieving <strong>98% test coverage</strong></li>
                  <li>Created OpenAPI documentation automation and OpenSearch dashboards</li>
                  <li>Developed advanced Cursor configurations with role-based AI assistance</li>
                </ul>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Organizational Contributions:</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                  <li>Contributing to onboarding new team members with documentation and knowledge transfer</li>
                  <li>Providing KT (Knowledge Transfer) sessions and technical training</li>
                  <li>Sharing tech news, trends, and best practices across the organization</li>
                  <li>Always vocal about new technologies, improvements, and innovation opportunities</li>
                </ul>
              </div>
              <div style={{ marginTop: 'auto' }}></div>
            </div>
          </Reveal>
          <Reveal>
            <div className="card" style={{
              gridColumn: 'span 1',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>What I'm Looking For</h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', marginBottom: '1rem' }}>
                <li><strong>AI Platform Engineer</strong> roles focusing on Gen AI and MLOps</li>
                <li><strong>Senior/Lead positions</strong> in AI enablement and developer tooling</li>
                <li><strong>Consulting opportunities</strong> for AI adoption and automation</li>
                <li><strong>AI-enabled product work</strong> in innovative startups or enterprises</li>
              </ul>
              <div style={{ marginBottom: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <h4 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Credentials:</h4>
                <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                  <strong>Education:</strong> MCA (Savitribai Phule Pune University)<br/>
                  <strong>Certifications:</strong> AWS Certified AI Practitioner, AWS ML Engineer Associate<br/>
                  <strong>Pursuing:</strong> AWS Solutions Architect<br/>
                  <strong>Current Role:</strong> Leading AI enablement initiatives at Synechron
                </p>
              </div>
              <p style={{ marginTop: 'auto', marginBottom: 0, fontSize: '0.85rem', color: 'var(--muted)' }}>
                <i className="fa-solid fa-clock" style={{ marginRight: '0.5rem' }}></i>
                Available for new opportunities. Response time: <strong>24-48 hours</strong>
              </p>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) {
            #about > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 901px) and (max-width: 1200px) {
            #about > div > div:last-child {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            #about > div > div:last-child > div:first-child {
              grid-column: span 2 !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
