import { useRef, useState, useEffect } from 'react'
import { Reveal } from '../shared/Reveal'
import { useCountUp } from '@/hooks/useCountUp'

export function Highlights() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      observer.disconnect()
    }
  }, [isVisible])

  const yearsExp = useCountUp({ end: 8, isVisible, suffix: '+' })
  const mlPipelines = useCountUp({ end: 10, isVisible, suffix: '+' })
  const teamsEnabled = useCountUp({ end: 5, isVisible, suffix: '+' })
  const connections = useCountUp({ end: 15000, isVisible, suffix: '+' })

  return (
    <section id="highlights" ref={sectionRef} className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-chart-line" style={{ marginRight: '0.5rem' }}></i>
          Highlights
        </h2>
        <p className="section-kicker reveal">
          Quantifiable impact and achievements demonstrating technical leadership and delivery excellence.
        </p>

        {/* Stats Row */}
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
          alignItems: 'stretch',
        }}>
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>
              {yearsExp}
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Years Experience</div>
          </div>
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>
              {mlPipelines}
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>ML Pipelines</div>
          </div>
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>
              {teamsEnabled}
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Teams Enabled</div>
          </div>
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>
              {connections}
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>LinkedIn Connections</div>
          </div>
        </div>

        {/* Impact Cards */}
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
                <li><strong>TypeScript Management:</strong> Developed tools for types, enum, and interface management, mock context creation, and external API mocking</li>
                <li><strong>API Documentation:</strong> Created dev scripts to dynamically generate OpenAPI YAML files for Swagger and Readme.io with markdown documentation</li>
                <li><strong>OpenSearch Dashboards:</strong> Built dashboards for processing logs, tracking API rejection errors, error counts, metrics, and KPIs</li>
                <li><strong>Cursor Configuration:</strong> Developed production-ready Cursor rules, skills, commands, hooks with domain configuration, code specifications, database schema selection, SQL optimizer, and test fixer</li>
                <li style={{ marginBottom: 0 }}><strong>Role-Based Cursor Design:</strong> Implemented Architecture/Business Analyst, Implementor (Developer/DevOps), and Tester (QA) roles that improved development efficiency</li>
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
                <li><strong>Data Engineering:</strong> Building scalable data engineering pipelines and Gen AI solutions</li>
                <li><strong>Lakehouse Architecture:</strong> Implementing Delta Lake for reliable data storage and versioning in production environments</li>
                <li><strong>ML Workflows:</strong> Leveraging MLflow for experiment tracking, model registry, and deployment automation</li>
                <li><strong>Spark & Data Processing:</strong> Optimizing Spark jobs for large-scale data transformations and analytics</li>
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
                <li><strong>40% improvement</strong> in team productivity through AI enablement, translating to faster time-to-market and significant value in increased output</li>
                <li><strong>35% reduction</strong> in development time through AI-powered workflows, resulting in substantial cost savings</li>
                <li><strong>30% infrastructure cost savings</strong> through optimized AWS Serverless architecture, reducing cloud spend significantly</li>
                <li><strong>30+ hours/week</strong> saved across teams through intelligent automation solutions, freeing up valuable engineering time</li>
                <li><strong>50% faster</strong> API scaffolding and documentation, reducing onboarding time by <strong>50%</strong> and saving training costs</li>
                <li style={{ marginBottom: 0 }}>Enabled <strong>100+ developers</strong> with AI tooling, scaling impact across organization with substantial productivity gains and cost savings</li>
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
                <i className="fa-solid fa-rocket" style={{ marginRight: '0.5rem', color: 'var(--accent-2)' }}></i>
                Delivery Outcomes
              </h3>
              <ol className="list list-ordered">
                <li><strong>10+ production-ready</strong> ML pipelines deployed on cloud infrastructure</li>
                <li>Built reusable workflows for documentation, API scaffolding, and testing automation</li>
                <li>Developed PR quality packages achieving <strong>98% test coverage</strong> for large-scale projects</li>
                <li style={{ marginBottom: 0 }}>Created production-ready developer tools used by multiple teams</li>
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
                <li style={{ marginBottom: 0 }}>Leading AI enablement initiatives at Synechron</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
