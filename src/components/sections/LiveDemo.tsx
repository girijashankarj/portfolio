import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../shared/Reveal'

const DEMO_URL = 'https://girijashankarj.github.io/garry-clear-prompt/'
const DEMO_REPO_URL = 'https://github.com/girijashankarj/garry-clear-prompt'
const LOAD_TIMEOUT_MS = 8000

type DemoStatus = 'loading' | 'loaded' | 'timeout'

export function LiveDemo() {
  const [status, setStatus] = useState<DemoStatus>('loading')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStatus((current) => (current === 'loading' ? 'timeout' : current))
    }, LOAD_TIMEOUT_MS)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleIframeLoad = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setStatus('loaded')
  }

  return (
    <section id="live-demo" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-bolt" style={{ marginRight: '0.5rem' }}></i>
          Live Demo
        </h2>
        <p className="section-kicker reveal">
          A real tool I built and shipped, not a screenshot. Try it below, or open it in its own tab.
        </p>
        <Reveal>
          <div className="card-elevated" style={{ padding: '1.5rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}>
              <div style={{ flex: '1 1 320px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '0.35rem' }}>
                  Clear Prompt — Prompt Quality Analyzer
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>
                  Scores and improves prompts using local NLP analysis. Runs client-side in your browser,
                  no signup, nothing you type is sent anywhere.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Open in new tab <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '0.35rem' }}></i>
                </a>
                <a href={DEMO_REPO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  View source <i className="fa-brands fa-github" style={{ marginLeft: '0.35rem' }}></i>
                </a>
              </div>
            </div>
            <div style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(480px, 70vh, 700px)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--card)',
            }}>
              {status !== 'loaded' && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  {status === 'loading' ? (
                    <span style={{ color: 'var(--muted)' }}>
                      <i className="fa-solid fa-circle-notch fa-spin" style={{ marginRight: '0.5rem' }}></i>
                      Loading live demo…
                    </span>
                  ) : (
                    <div>
                      <p style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>
                        The embedded demo is taking longer than expected to load.
                      </p>
                      <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Open Clear Prompt directly <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '0.35rem' }}></i>
                      </a>
                    </div>
                  )}
                </div>
              )}
              <iframe
                src={DEMO_URL}
                title="Clear Prompt live demo"
                onLoad={handleIframeLoad}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  opacity: status === 'loaded' ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
