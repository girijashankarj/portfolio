import { Reveal } from '../shared/Reveal'

export function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-chart-line" style={{ marginRight: '0.5rem' }}></i>
          Highlights
        </h2>
        <p className="section-kicker reveal">
          Quantifiable impact and achievements demonstrating technical leadership and delivery excellence.
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
                <i className="fa-solid fa-sitemap" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
                Architecture & AI Enablement
              </h3>
              <ol className="list list-ordered">
                <li>Designed cloud-ready systems with shared AWS layers and secure integrations</li>
                <li>Built scalable APIs, observability, and audit-ready logging for regulated domains</li>
                <li><strong>Leading AI Enablement:</strong> Leading AI enablement programs at Synechron, automating workflows for <strong>5+ enterprise teams</strong></li>
                <li><strong>Cursor Adoption:</strong> Key contributor to organization-wide adoption, creating AI critics frameworks used by <strong>100+ developers</strong></li>
                <li style={{ marginBottom: 0 }}>Applied AI agents, GitHub Copilot, and MCP workflows to improve development throughput by <strong>35%</strong></li>
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-code" style={{ marginRight: '0.5rem', color: 'var(--accent-2)' }}></i>
                Developer Tools & Automation
              </h3>
              <ol className="list list-ordered">
                <li><strong>PR Quality Packages:</strong> Built Node.js packages for PR quality checks including lint, format, commit message validation, SQL scaffold, and test coverage up to <strong>98%</strong> for large projects</li>
                <li><strong>API Documentation:</strong> Created dev scripts to dynamically generate OpenAPI YAML files for Swagger and Readme.io, plus OpenSearch dashboards for log processing and API metrics</li>
                <li style={{ marginBottom: 0 }}><strong>Cursor Configuration:</strong> Developed production-ready Cursor rules, skills, commands, and hooks with role-based design (Architecture/Business Analyst, Developer/DevOps, QA) that improved development efficiency</li>
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-database" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
                Data Engineering & Gen AI
              </h3>
              <ol className="list list-ordered">
                <li><strong>Data Engineering:</strong> Building scalable data engineering pipelines and Gen AI solutions with Delta Lake, MLflow, and Spark</li>
                <li><strong>Cloud Platforms:</strong> Working with AWS, Databricks, Snowflake, and Azure for data engineering and ML workloads</li>
                <li style={{ marginBottom: 0 }}><strong>10+ production-ready</strong> ML pipelines built on cloud infrastructure</li>
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card-elevated">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-chart-line" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
                Business Impact
              </h3>
              <ol className="list list-ordered">
                <li><strong>40% improvement</strong> in team productivity through AI enablement, translating to faster time-to-market</li>
                <li><strong>35% reduction</strong> in development time through AI-powered workflows, resulting in substantial cost savings</li>
                <li><strong>30% infrastructure cost savings</strong> through optimized AWS Serverless architecture</li>
                <li style={{ marginBottom: 0 }}>Enabled <strong>100+ developers</strong> with AI tooling, scaling impact across the organization</li>
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-award" style={{ marginRight: '0.5rem', color: 'var(--accent-3)' }}></i>
                Recognition
              </h3>
              <ol className="list list-ordered">
                <li>Synechron Surpass Award</li>
                <li>Synechron STAR Award</li>
                <li>AWS ML Engineer Associate + AI Practitioner</li>
                <li style={{ marginBottom: 0 }}>Claude Certified Architect - Foundations (CCA-F)</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
