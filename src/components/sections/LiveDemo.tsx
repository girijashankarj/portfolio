import { useEffect, useMemo, useRef, useState } from 'react'
import { isArchivedGitHubProject } from '@/common/github'
import { useGitHubRepos } from '@/hooks/useGitHubRepos'
import { Reveal } from '../shared/Reveal'

const DEMOS = [
  {
    title: 'MCP Caply — MCP Server Explorer',
    description: 'Interactive MCP server explorer and capability viewer. Explore MCP tools and server capabilities through a live, browser-based demo.',
    demoUrl: 'https://girijashankarj.github.io/mcp-caply/',
    repoUrl: 'https://github.com/girijashankarj/mcp-caply',
    iframeTitle: 'MCP Caply live demo',
  },
  {
    title: 'Clear Prompt — Prompt Quality Analyzer',
    description: 'Scores and improves prompts using local NLP analysis. Runs client-side in your browser, no signup, nothing you type is sent anywhere.',
    demoUrl: 'https://girijashankarj.github.io/garry-clear-prompt/',
    repoUrl: 'https://github.com/girijashankarj/garry-clear-prompt',
    iframeTitle: 'Clear Prompt live demo',
  },
]

const LOAD_TIMEOUT_MS = 8000

type DemoStatus = 'loading' | 'loaded' | 'timeout'

function DemoCard({
  title,
  description,
  demoUrl,
  repoUrl,
  iframeTitle,
}: (typeof DEMOS)[number]) {
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
    <Reveal>
      <div className="card-elevated" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.25rem',
        }}>
          <div style={{ flex: '1 1 320px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.35rem' }}>{title}</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>{description}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Open in new tab <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '0.35rem' }}></i>
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
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
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Open demo directly <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '0.35rem' }}></i>
                  </a>
                </div>
              )}
            </div>
          )}
          <iframe
            src={demoUrl}
            title={iframeTitle}
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
  )
}

export function LiveDemo() {
  const { archivedRepoNames } = useGitHubRepos()
  const visibleDemos = useMemo(
    () => DEMOS.filter((demo) => !isArchivedGitHubProject(demo.repoUrl, archivedRepoNames)),
    [archivedRepoNames],
  )

  if (visibleDemos.length === 0) return null

  return (
    <section id="live-demo" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-bolt" style={{ marginRight: '0.5rem' }}></i>
          Live Demo
        </h2>
        <p className="section-kicker reveal">
          Real tools I built and shipped, not screenshots. Try them below, or open them in their own tab.
        </p>
        {visibleDemos.map((demo) => (
          <DemoCard key={demo.title} {...demo} />
        ))}
      </div>
    </section>
  )
}
