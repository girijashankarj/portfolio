import { useEffect, useState } from 'react'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/girijashankarj')
        
        // Handle rate limiting
        if (response.status === 403) {
          const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining')
          const rateLimitReset = response.headers.get('X-RateLimit-Reset')
          
          if (rateLimitRemaining === '0') {
            console.warn('GitHub API rate limit exceeded')
            setLoading(false)
            return
          }
        }
        
        if (response.ok) {
          const data = await response.json()
          setStats({
            public_repos: data.public_repos || 0,
            followers: data.followers || 0,
            following: data.following || 0,
          })
        } else {
          console.warn('GitHub API request failed:', response.status)
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        marginTop: '0.5rem',
      }}>
        <div style={{
          width: '12px',
          height: '12px',
          border: '2px solid var(--border)',
          borderTopColor: 'var(--accent)',
          borderRightColor: 'rgba(66, 133, 244, 0.3)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }} />
        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Loading stats...</span>
      </div>
    )
  }

  if (!stats) return null

  return (
    <div style={{
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid var(--border)',
    }}>
      <a
        href="https://github.com/girijashankarj"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text)',
          textDecoration: 'none',
          marginBottom: '0.75rem',
          fontWeight: 600,
        }}
      >
        <i className="fab fa-github"></i>
        <span>GitHub Profile</span>
      </a>
      <div style={{
        display: 'flex',
        gap: '1rem',
        fontSize: '0.85rem',
        color: 'var(--muted)',
        flexWrap: 'wrap',
      }}>
        <span>
          <strong style={{ color: 'var(--text)' }}>{stats.public_repos}</strong> Repos
        </span>
        <span>
          <strong style={{ color: 'var(--text)' }}>{stats.followers}</strong> Followers
        </span>
        <span>
          <strong style={{ color: 'var(--text)' }}>{stats.following}</strong> Following
        </span>
      </div>
    </div>
  )
}
