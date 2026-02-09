import { Reveal } from '../shared/Reveal'

const LEARNING = [
  'LeetCode & Competitive Programming',
  'Advanced Data Structures & Algorithms',
  'LangChain & LangGraph',
  'MCP (Model Context Protocol)',
  'Advanced RAG Patterns',
  'Kubernetes & Container Orchestration',
  'Terraform & Infrastructure as Code',
  'Databricks Unity Catalog',
  'Snowflake Advanced Features',
  'Azure Cloud Services',
]

export function TechnologiesLearning() {
  return (
    <section id="learning" className="section">
      <div className="container">
        <Reveal>
          <div className="card" style={{
            background: 'var(--gradient-secondary)',
            border: '1px solid var(--accent)',
          }}>
            <h3 style={{ 
              marginTop: 0, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <i className="fa-solid fa-lightbulb" style={{ color: 'var(--accent)' }}></i>
              <span>Technologies I'm Learning</span>
            </h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
              Continuously expanding my skill set to stay at the forefront of AI and cloud technologies.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}>
              {LEARNING.map((tech, i) => (
                <span 
                  key={i}
                  className="chip"
                  style={{
                    background: 'var(--card)',
                    borderColor: 'var(--accent)',
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
