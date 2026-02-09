import { Reveal } from '../shared/Reveal'

const LINKEDIN_HIGHLIGHTS = [
  'Modernizing Java Applications: Migrating Employee Management System to AWS',
  'React Hooks: useState() and useQuery Polyfills',
  'JavaScript Polyfills: bind, map, filter, reduce',
  'JavaScript Quirks: falsy values, loose equality',
  'React-is and Object.is deep dives',
  'Demystifying robots.txt',
]

const MEDIUM_HIGHLIGHTS = [
  'Error Handling and Fallbacks using React Hooks',
  'useQuery Hook and Crafting Your Custom Polyfill',
  'useState() and Crafting Your Custom State Hook',
  'Supercharging React with the Secrets of React-is',
  'Why React Developers are Embracing Next.js',
  'React Diffing: A Deeper Dive into Virtual DOM Comparison',
]

export function Community() {
  return (
    <section id="community" className="section section-band">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-users" style={{ marginRight: '0.5rem' }}></i>
          Community & Learning
        </h2>
        <p className="section-kicker reveal">
          My philosophy: <strong>learn → try → share</strong>. I continuously explore new technologies, experiment through projects, and share knowledge with the global tech community.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-pen-nib" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
                Writing & Publications
              </h3>
              <p style={{ marginBottom: '1rem' }}>Active on LinkedIn and Medium, sharing technical insights and industry trends:</p>
              <ul className="list list-unordered" style={{ marginBottom: '1rem' }}>
                <li>Regular posts on AI, cloud, React, and engineering trends</li>
                <li>Sharing and reposting trending tech content</li>
                <li>Engaging with community through comments and discussions</li>
                <li style={{ marginBottom: 0 }}>Reporting on industry innovations and best practices</li>
              </ul>
              <p style={{ color: 'var(--muted)', marginTop: 'auto', fontSize: '0.9rem', marginBottom: 0 }}>
                <strong>50+ articles</strong> published on LinkedIn and Medium
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-chalkboard-teacher" style={{ marginRight: '0.5rem', color: 'var(--accent-2)' }}></i>
                Lectures & Workshops
              </h3>
              <ol className="list list-ordered">
                <li><strong>20+ sessions</strong> delivered at colleges and corporate events</li>
                <li>Topics: React.js, AWS, JavaScript, and AI tooling</li>
                <li>Hands-on demos with Cursor, GitHub Copilot, ChatMade, MCP servers</li>
                <li style={{ marginBottom: 0 }}>Jest, automation, code-quality checks, workflows, and boilerplates</li>
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fab fa-linkedin" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
                LinkedIn Highlights
              </h3>
              <ol className="list list-ordered">
                {LINKEDIN_HIGHLIGHTS.map((item, i) => (
                  <li key={i} style={{ marginBottom: i === LINKEDIN_HIGHLIGHTS.length - 1 ? 0 : undefined }}>{item}</li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fab fa-medium" style={{ marginRight: '0.5rem', color: 'var(--text)' }}></i>
                Medium Highlights
              </h3>
              <ol className="list list-ordered">
                {MEDIUM_HIGHLIGHTS.map((item, i) => (
                  <li key={i} style={{ marginBottom: i === MEDIUM_HIGHLIGHTS.length - 1 ? 0 : undefined }}>{item}</li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-handshake" style={{ marginRight: '0.5rem', color: 'var(--accent-2)' }}></i>
                Community Engagement
              </h3>
              <ul className="list list-unordered">
                <li>Attendee at DevFest Pune and AWS Community Day Pune</li>
                <li>Actively mentoring <strong>10+ developers</strong></li>
                <li>Contributing to open-source projects and community resources</li>
                <li>Participating in tech discussions and knowledge exchange</li>
                <li style={{ marginBottom: 0 }}>Building global connections through LinkedIn networking</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-lightbulb" style={{ marginRight: '0.5rem', color: 'var(--accent-3)' }}></i>
                Continuous Learning
              </h3>
              <p style={{ marginBottom: '1rem' }}>I believe in lifelong learning and constantly explore new technologies:</p>
              <ul className="list list-unordered">
                <li>Experimenting with cutting-edge AI tools and platforms</li>
                <li>Building side projects to understand new concepts</li>
                <li>Contributing to open-source projects</li>
                <li style={{ marginBottom: 0 }}>Following industry trends and best practices</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
