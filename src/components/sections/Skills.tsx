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

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-toolbox" style={{ marginRight: '0.5rem' }}></i>
          Skills & Stack
        </h2>
        <p className="section-kicker reveal">
          Technical stack and tools powering production-ready solutions across data engineering, AI, and developer automation.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
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
        </div>
      </div>
    </section>
  )
}
