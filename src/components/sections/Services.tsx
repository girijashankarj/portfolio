import { Reveal } from '../shared/Reveal'

const SERVICES = [
  {
    title: 'Career & profile',
    items: [
      'Resume, portfolio, and profile reviews',
      'LinkedIn profile review and growth strategy',
      'Peer review and community engagement playbooks',
    ],
  },
  {
    title: 'Product & delivery',
    items: [
      'Project setup, architecture reviews, and boilerplates',
      'Technical documentation, analysis, and system walkthroughs',
      'Workflow automation and code-quality gates',
    ],
  },
  {
    title: 'Strategy & ideas',
    items: [
      'Marketing ideas for developer communities',
      'Consulting on AI tooling adoption and enablement',
      'Templates, workflows, and team enablement assets',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-briefcase" style={{ marginRight: '0.5rem' }}></i>
          Services & Consulting
        </h2>
        <p className="section-kicker reveal">
          Consulting and technical support for individuals, teams, and communities.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {SERVICES.map((service) => (
            <Reveal key={service.title}>
              <div className="card">
                <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>{service.title}</h3>
                <ol className="list list-ordered">
                  {service.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: i === service.items.length - 1 ? 0 : undefined }}>{item}</li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
