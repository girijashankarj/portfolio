import { Reveal } from '../shared/Reveal'
import { sanitizeHtml } from '../../utils/sanitizeHtml'

const EXPERIENCES = [
  {
    title: 'Synechron · Senior Associate Consultant · AI Platform Engineer',
    period: 'Mar 2024 - Present · Pune (Hybrid)',
    themes: [
      {
        title: 'AI Enablement & Leadership',
        points: [
          'Leading AI enablement initiatives for <strong>5+ enterprise teams (50+ engineers)</strong>, automating workflows that improved team productivity by <strong>40%</strong> and delivery velocity',
          'Led Cursor adoption across organization (<strong>100+ developers</strong>), creating AI critics frameworks and best practices for AI-assisted development',
          'Enabling AI-driven delivery with GenAI tooling and intelligent systems architecture, reducing development time by <strong>35%</strong> and saving <strong>20+ hours/week</strong> across teams',
        ],
      },
      {
        title: 'Developer Tooling & Automation',
        points: [
          'Built production-ready Cursor configuration system with rules, skills, commands, and hooks. Implemented role-based design (Architecture/Business Analyst, Developer/DevOps, QA) that improved development efficiency',
          'Developed Node.js packages for PR quality checks: lint, format, commit validation, SQL scaffold, achieving <strong>98% test coverage</strong> for large projects. Created TypeScript management tools for types/enums/interfaces and API mocking',
          'Automated API documentation: Built dev scripts generating OpenAPI YAML for Swagger/Readme.io with markdown. Created OpenSearch dashboards for log processing, error tracking, metrics, and KPIs',
        ],
      },
      {
        title: 'Data Engineering & MLOps',
        points: [
          'Building production-ready data engineering pipelines and Gen AI solutions, leveraging Delta Lake, Spark, and MLflow for scalable ML workflows',
          'Working on AWS MLOps and cloud platforms, building <strong>10+ production-ready ML pipelines</strong> and infrastructure',
        ],
      },
      {
        title: 'Product Delivery',
        points: [
          'Working on insurance products and service management platform (mobile, home, electronics) serving <strong>50K+ users</strong>',
          'Improving documentation, API implementation, and developer productivity through AI-powered workflows',
        ],
      },
    ],
  },
  {
    title: 'Velotio Technologies · Senior Software Engineer',
    period: 'Oct 2023 - Mar 2024 · Remote',
    themes: [
      {
        title: 'Gen AI & Automation',
        points: [
          'Worked on Gen AI tool (Retool), building intelligent automation solutions and AI-powered applications, reducing manual processes by <strong>60%</strong>',
        ],
      },
      {
        title: 'Data Engineering',
        points: [
          'Automated large-scale data engineering workflows using AWS services (Lambda, S3, ECS) and cloud data platforms, handling <strong>1M+ records daily</strong> for health insurance project',
        ],
      },
      {
        title: 'System Architecture',
        points: [
          'Built scalable fintech systems with strong data consistency patterns and security controls, improving system reliability by <strong>45%</strong>',
        ],
      },
    ],
  },
  {
    title: 'GS Lab · Senior Software Engineer',
    period: 'Oct 2021 - Sep 2023 · Pune',
    themes: [
      {
        title: 'Gen AI & Product Development',
        points: [
          'Worked on Gen AI tool (Flutter Flow), building AI-powered applications and intelligent workflows, improving user engagement by <strong>50%</strong>',
          'Built security systems, user management, and subscription management solutions for financial projects using React and Node.js, serving <strong>100K+ users</strong>',
        ],
      },
      {
        title: 'Real-time Analytics & Infrastructure',
        points: [
          'Developed real-time monitoring dashboard for UPI transactions, processing <strong>500K+ transactions daily</strong>',
          'Implemented AWS Serverless architecture with shared layers, reducing infrastructure costs by <strong>30%</strong>',
        ],
      },
    ],
  },
  {
    title: 'GS Lab · Full Stack Developer',
    period: 'Feb 2020 - Sep 2021 · Pune',
    themes: [
      {
        title: 'Full Stack Development',
        points: [
          'Built security, user management, and subscription management features for financial projects',
          'Developed IAM solutions for global enterprise clients using React and Node.js',
          'Built shared AWS layers, pipelines, and local debugging workflows for efficient development',
        ],
      },
    ],
  },
  {
    title: 'ContentServ Technologies · Frontend Developer',
    period: 'Dec 2017 - Feb 2020 · Pune',
    themes: [
      {
        title: 'Frontend & Product Development',
        points: [
          'Worked on enterprise product suite including PIM (Product Information Management) and Marketing Document Management (MXM)',
          'Gained foundational experience with React class components and early React versions (2017), building marketing experience management tools',
          'Built POCs, reusable UI utilities, and refactored legacy codebases to modern ES6 and React patterns',
        ],
      },
    ],
  },
]

export function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <i className="fa-solid fa-route" style={{ marginRight: '0.5rem' }}></i>
            Career Journey
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-kicker">
            Career progression showcasing growth from frontend development to AI Platform Engineering leadership.
          </p>
        </Reveal>
        <div className="timeline">
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={index}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="card-elevated">
                  <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>{exp.title}</h3>
                  <p className="muted" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
                    {exp.period}
                  </p>
                  {exp.themes ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {exp.themes.map((theme, themeIdx) => (
                        <div key={themeIdx}>
                          <h4 style={{ 
                            marginTop: 0, 
                            marginBottom: '0.75rem', 
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--accent)',
                          }}>
                            {theme.title}
                          </h4>
                          <ol className="list list-ordered" style={{ marginLeft: '1rem' }}>
                            {theme.points.map((point, i) => (
                              <li key={i} style={{ marginBottom: i === theme.points.length - 1 ? 0 : '0.5rem' }} dangerouslySetInnerHTML={{ __html: sanitizeHtml(point) }} />
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
