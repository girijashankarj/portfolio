import { Reveal } from '../shared/Reveal'

export function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="section section-band">
      <div className="container">
        <Reveal>
          <div className="card-elevated" style={{
            background: 'var(--gradient-secondary)',
            border: '2px solid var(--accent)',
            padding: '2rem',
            textAlign: 'center',
          }}>
            <h2 style={{ 
              marginTop: 0, 
              marginBottom: '1rem',
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
              color: 'var(--accent)',
            }}>
              Executive Summary
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              color: 'var(--text)',
            }}>
              AI Platform Engineer with <strong>8+ years</strong> improving development workflows through intelligent automation. 
              Reduced team productivity bottlenecks by <strong>40%</strong>, enabled <strong>100+ developers</strong> with AI tooling, 
              and built <strong>10+ production ML pipelines</strong>. Currently leading AI enablement initiatives at Synechron, 
              driving <strong>35% faster</strong> delivery and significant cost savings through automation and productivity improvements.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '1.5rem',
            }}>
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'var(--card)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.25rem' }}>8+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Years Experience</div>
              </div>
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'var(--card)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.25rem' }}>100+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Developers Enabled</div>
              </div>
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'var(--card)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.25rem' }}>40%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Productivity Gain</div>
              </div>
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'var(--card)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.25rem' }}>10+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>ML Pipelines</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
