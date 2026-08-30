import { useEffect, useState } from 'react'
import { Reveal } from '../shared/Reveal'
import { ResumeDownload } from '../shared/ResumeDownload'

interface GitHubStats {
  publicRepos: number
  totalStars: number
}

const GITHUB_USER = 'girijashankarj'
const GITHUB_API = `https://api.github.com/users/${GITHUB_USER}/repos`

function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)

  useEffect(() => {
    let cancelled = false

    const loadStats = async () => {
      try {
        const repos: Array<{
          fork: boolean
          stargazers_count: number
        }> = []
        let page = 1

        // Fetch every public repository page so the total reflects all repositories.
        while (true) {
          const response = await fetch(`${GITHUB_API}?per_page=100&page=${page}&type=owner`, {
            cache: 'no-store',
          })
          if (!response.ok) throw new Error(`GitHub API returned ${response.status}`)

          const pageRepos = await response.json() as typeof repos
          repos.push(...pageRepos)
          if (pageRepos.length < 100) break
          page += 1
        }

        // Aggregate stars from original repositories. Forks are excluded so the
        // metric represents work published by this profile, not inherited stars.
        const originalRepos = repos.filter((repo) => !repo.fork)
        const totalStars = originalRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)

        if (!cancelled) {
          setStats({
            publicRepos: originalRepos.length,
            totalStars,
          })
        }
      } catch {
        // Do not show a misleading value if GitHub is temporarily unavailable.
        if (!cancelled) setStats(null)
      }
    }

    loadStats()
    return () => {
      cancelled = true
    }
  }, [])

  return stats
}

export function Hero() {
  const githubStats = useGitHubStats()

  return (
    <header
      id="top"
      className="hero section"
      role="banner"
      style={{
        padding: '4.5rem 0 3rem',
        backgroundImage: `linear-gradient(135deg, var(--hero-overlay-start), var(--hero-overlay-end)), url('${import.meta.env.BASE_URL}assets/cover.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: 'clamp(1.5rem, 4vw, 2.5rem)',
        alignItems: 'center',
      }}>
        <Reveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
            <span className="pill" style={{
              background: 'var(--pill-bg-blue)',
              borderColor: 'var(--pill-border-blue)',
              fontWeight: 500,
            }}>
              AI Platform Engineer · Pune, India
            </span>
            <span className="pill" style={{
              background: 'var(--pill-bg-green)',
              borderColor: 'var(--pill-border-green)',
              fontWeight: 500,
            }}>
              <i className="fa-solid fa-circle-check" style={{ marginRight: '0.35rem', fontSize: '0.7rem' }}></i>
              Open to Opportunities
            </span>
          </div>

          <h1 className="hero-title" style={{
            fontSize: 'clamp(2.4rem, 3.4vw, 3.6rem)',
            margin: '0.6rem 0 1rem',
          }}>
            Building Gen AI solutions and enabling teams with intelligent automation.
          </h1>

          <p className="hero-subtitle" style={{
            color: 'var(--muted)',
            fontSize: '1.05rem',
            marginBottom: '1.5rem',
          }}>
            Senior Associate Consultant with 8+ years specializing in AI Platform Engineering, MLOps, and leading AI enablement initiatives. <strong>JavaScript is my primary language</strong>, with experience in Python, Java, and C++.
          </p>

          <div className="button-group" style={{
            marginBottom: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.5rem, 2vw, 0.75rem)',
          }}>
            <a href="#contact" className="btn-primary">
              <i className="fa-solid fa-envelope"></i>
              <span>Connect</span>
            </a>
            <a href="#projects" className="btn-ghost">
              <i className="fa-solid fa-diagram-project"></i>
              <span>View Projects</span>
            </a>
            <a href="#services" className="btn-ghost">
              <i className="fa-solid fa-briefcase"></i>
              <span>Consulting Services</span>
            </a>
            <ResumeDownload />
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.6rem' }}>
            <a href="https://www.linkedin.com/in/girijashankarj" target="_blank" rel="noopener noreferrer" className="icon-only" style={{ width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', border: '1px solid var(--border)', background: 'var(--icon-bg-blue)', transition: 'all 0.2s ease' }} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/girijashankarj" target="_blank" rel="noopener noreferrer" className="icon-only" style={{ width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', border: '1px solid var(--border)', background: 'var(--icon-bg-green)', transition: 'all 0.2s ease' }} aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@girijashankarj" target="_blank" rel="noopener noreferrer" className="icon-only" style={{ width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', border: '1px solid var(--border)', background: 'var(--icon-bg-blue)', transition: 'all 0.2s ease' }} aria-label="Medium">
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-elevated">
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.png`}
              alt="Girijashankar Jambhale - AI Platform Engineer specializing in Gen AI and MLOps"
              loading="lazy"
              width="400"
              height="400"
              style={{ borderRadius: '1rem', border: '1px solid var(--border)', width: '100%', marginBottom: '1rem' }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.4rem, 2vw, 0.6rem)' }}>
              <span className="pill" style={{ background: 'var(--pill-bg-green)', borderColor: 'var(--pill-border-green)' }}>
                <i className="fa-solid fa-cloud" style={{ marginRight: '0.45rem' }}></i>
                <span>AWS · Cloud · Serverless</span>
              </span>
              <span className="pill" style={{ background: 'var(--pill-bg-blue)', borderColor: 'var(--pill-border-blue)' }}>
                <i className="fa-solid fa-sitemap" style={{ marginRight: '0.45rem' }}></i>
                <span>Architecture · Systems</span>
              </span>
              <span className="pill" style={{ background: 'var(--pill-bg-blue)', borderColor: 'var(--pill-border-blue)' }}>
                <i className="fa-solid fa-wand-magic-sparkles" style={{ marginRight: '0.45rem' }}></i>
                <span>n8n · Gen AI · Automation</span>
              </span>
              <span className="pill" style={{ background: 'var(--pill-bg-blue)', borderColor: 'var(--pill-border-blue)' }}>
                <i className="fa-solid fa-code" style={{ marginRight: '0.45rem' }}></i>
                <span>React · Node · Next.js</span>
              </span>
            </div>

            <div
              aria-label="GitHub repository statistics"
              style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '0.6rem',
                textAlign: 'center',
              }}
            >
              <div>
                <strong style={{ display: 'block', fontSize: '1.15rem' }}>{githubStats?.publicRepos ?? '—'}</strong>
                <span style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>Repos</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.15rem' }}>{githubStats?.totalStars ?? '—'}</strong>
                <span style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>Stars</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
