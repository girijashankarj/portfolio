import { Reveal } from '../shared/Reveal'

const SKILLS = {
  'Data Engineering & Gen AI': [
    'Data Engineering', 'Spark', 'Delta Lake', 'MLflow', 'Lakehouse Architecture', 'Databricks', 'Gen AI on Databricks', 'Databricks Workflows'
  ],
  'Developer Tools & Automation': [
    'Node.js Packages', 'PR Quality Checks', 'Lint & Format', 'Commit Message Validation', 'SQL Scaffold', 'Test Coverage (98%)', 'TypeScript Types', 'Enum Management', 'Interface Management', 'Mock Context Creation', 'API Mocking', 'OpenAPI YAML', 'Swagger', 'Readme.io', 'OpenSearch', 'Dashboard Creation', 'Log Processing', 'Metrics & KPIs'
  ],
  'AI Platform & MLOps': [
    'AWS', 'AWS Bedrock', 'MLOps', 'Gen AI', 'Machine Learning', 'Serverless', 'Architecture', 'CI/CD', 'Jest',
    'MCP Servers', 'GitHub Copilot', 'ChatMade', 'Cursor Hooks', 'Cursor Rules', 'Cursor Skills', 'RAG', 'Agent Mode', 'Plan Mode', 'Snowflake', 'Azure'
  ],
  'Workflow Automation & Gen AI Tools': [
    'n8n', 'Retool', 'Flutter Flow', 'Workflow Automation', 'AI Workflows', 'Process Automation'
  ],
  'Backend': [
    'JavaScript (Primary)', 'Node.js', 'Python', 'Java', 'C++', 'GraphQL', 'REST APIs', 'MySQL', 'Data Structures & Algorithms',
    'Google Firebase', 'Google Analytics', 'Google Maps API'
  ],
  'Development Tools & IDEs': [
    'Cursor', 'VSCode', 'IntelliJ IDEA', 'WebStorm'
  ],
  'Frontend': [
    'ReactJS', 'Redux', 'Next.js', 'TypeScript', 'HTML', 'CSS / SCSS'
  ]
}

const CERTIFICATIONS = [
  { name: 'AWS Certified Machine Learning Engineer - Associate', achieved: '2025', expires: '2028', verified: true },
  { name: 'AWS Certified AI Practitioner', achieved: '2025', expires: '2028', verified: true },
  { name: 'Microsoft Azure Fundamentals (AZ900)', achieved: '2023', expires: null, verified: true },
  { name: 'GitHub Copilot Technical Preview', achieved: '2023', expires: null, verified: true },
  { name: 'Cisco JavaScript Essentials', achieved: '2022', expires: null, verified: true },
  { name: 'HackerRank React Developer', achieved: '2021', expires: null, verified: true },
]

const EDUCATION = [
  'Master of Computer Applications, Savitribai Phule Pune University',
  'Bachelor of Science in Computer Science, Dr. D.Y. Patil College',
]

const BADGE_COURSES = [
  { name: 'Personality Development', achieved: null, verified: true },
  { name: 'Storytelling', achieved: null, verified: true },
  { name: 'Scrum Master', achieved: null, verified: true },
  { name: 'Agile Methodologies', achieved: null, verified: true },
]

const INTERESTS = [
  'Reading books (fictional and non-fictional) and listening to audiobooks',
  'Google Maps Level 8 Local Guide with high views - exploring new places, sharing accurate information, correcting locations, place times, and helping others discover the right places',
  'Continuous learning and experimenting with new technologies',
  'Sharing knowledge through LinkedIn and articles',
  'Building global connections and engaging with tech community',
  'AI, finance, and tech history',
  'Mobile photography and community collaboration',
  'Teaching, career talks, and mentorship',
]

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

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-toolbox" style={{ marginRight: '0.5rem' }}></i>
          Skills & Stack
        </h2>
        <p className="section-kicker reveal">
          Technical stack, certifications, and continuous learning powering production-ready solutions across data engineering, AI, and developer automation.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {/* Certifications */}
          <Reveal>
            <div className="card-elevated">
              <h3 style={{ marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-award" style={{ color: 'var(--accent)' }}></i>
                <span>Professional Certifications</span>
              </h3>
              <ol className="list list-ordered">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} style={{ marginBottom: i === CERTIFICATIONS.length - 1 ? 0 : '0.75rem', fontWeight: i < 2 ? 600 : 400 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ flex: '1 1 auto', minWidth: '200px' }}>{cert.name}</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--muted)', whiteSpace: 'nowrap', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span>Achieved: <strong>{cert.achieved}</strong></span>
                        {cert.expires && (
                          <span style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
                            • Expires: <strong>{cert.expires}</strong>
                          </span>
                        )}
                        {cert.verified && (
                          <i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-2)' }} title="Verified"></i>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-medal" style={{ color: 'var(--accent-2)' }}></i>
                <span>Professional Development & Badges</span>
              </h3>
              <ol className="list list-ordered">
                {BADGE_COURSES.map((badge, i) => (
                  <li key={i} style={{ marginBottom: i === BADGE_COURSES.length - 1 ? 0 : '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <span>{badge.name}</span>
                      {badge.verified && (
                        <i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-2)' }} title="Completed"></i>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Education</h3>
              <ol className="list list-ordered">
                {EDUCATION.map((edu, i) => (
                  <li key={i} style={{ marginBottom: i === EDUCATION.length - 1 ? 0 : undefined }}>{edu}</li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-heart" style={{ color: 'var(--accent-3)' }}></i>
                <span>Interests & Hobbies</span>
              </h3>
              <ol className="list list-ordered">
                {INTERESTS.map((interest, i) => (
                  <li key={i} style={{ marginBottom: i === INTERESTS.length - 1 ? 0 : undefined }}>{interest}</li>
                ))}
              </ol>
            </div>
          </Reveal>
          {/* Skills by category */}
          {Object.entries(SKILLS).map(([category, skills]) => (
            <Reveal key={category}>
              <div className="card">
                <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>{category}</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  width: '100%',
                  alignContent: 'flex-start',
                  alignItems: 'center',
                  flex: '1 1 auto',
                }}>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          {/* Technologies Learning */}
          <Reveal>
            <div className="card" style={{
              background: 'var(--gradient-secondary)',
              border: '1px solid var(--accent)',
              gridColumn: '1 / -1',
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
      </div>
    </section>
  )
}
