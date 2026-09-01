import { PROJECTS } from '@/common/constants'
import { Reveal } from '../shared/Reveal'

// Curated allowlist. Add project IDs here when you want to feature them publicly.
const FEATURED_PROJECT_IDS = [
  'github-security-agent-mcp',
  'cursor-handbook',
  'aws-infra-canvas',
]

export function FeaturedProjects() {
  const featuredProjects = FEATURED_PROJECT_IDS
    .map((id) => PROJECTS.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))

  if (featuredProjects.length === 0) return null

  return (
    <section id="featured-projects" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-star" style={{ marginRight: '0.5rem' }}></i>
          Featured Projects
        </h2>
        <p className="section-kicker reveal">
          Selected projects I want to highlight for their engineering depth, architecture, and practical AI impact.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '1.5rem',
        }}>
          {featuredProjects.map((project) => (
            <Reveal key={project.id}>
              <article
                className="card-elevated"
                style={{
                  height: '100%',
                  padding: '1.5rem',
                  border: '1px solid var(--pill-border-blue)',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '999px',
                  background: 'var(--pill-bg-blue)',
                  border: '1px solid var(--pill-border-blue)',
                  fontSize: '0.78rem',
                  marginBottom: '0.9rem',
                }}>
                  <i className="fa-solid fa-star"></i>
                  Featured
                </div>

                <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 0 }}>{project.description}</p>

                {project.technologies && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1rem 0' }}>
                    {project.technologies.map((technology) => (
                      <span key={technology} className="pill" style={{ fontSize: '0.75rem' }}>
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                {project.highlights && (
                  <ul className="list" style={{ marginBottom: '1.25rem' }}>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View GitHub Repo <i className="fa-brands fa-github" style={{ marginLeft: '0.35rem' }}></i>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
