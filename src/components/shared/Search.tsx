import { useState, useEffect, useRef, useMemo } from 'react'
import { PROJECTS } from '@/common/constants'
import { NAV_ITEMS } from '@/common/constants'
import { isArchivedGitHubProject } from '@/common/github'
import { useGitHubRepos } from '@/hooks/useGitHubRepos'

interface SearchResult {
  type: 'project' | 'section'
  title: string
  url?: string
  href?: string
  description?: string
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const { archivedRepoNames } = useGitHubRepos()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setQuery('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setQuery('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return []

    const searchLower = query.toLowerCase()
    const searchResults: SearchResult[] = []

    // Search projects
    PROJECTS.forEach((project) => {
      if (isArchivedGitHubProject(project.url, archivedRepoNames)) return
      if (
        project.title.toLowerCase().includes(searchLower) ||
        project.description?.toLowerCase().includes(searchLower) ||
        project.technologies?.some((tech) => tech.toLowerCase().includes(searchLower))
      ) {
        searchResults.push({
          type: 'project',
          title: project.title,
          url: project.url,
          description: project.description,
        })
      }
    })

    // Search sections
    NAV_ITEMS.forEach((item) => {
      if (item.label.toLowerCase().includes(searchLower)) {
        searchResults.push({
          type: 'section',
          title: item.label,
          href: item.href,
        })
      }
    })

    return searchResults.slice(0, 10)
  }, [query, archivedRepoNames])

  const handleResultClick = (result: SearchResult) => {
    if (result.url) {
      window.open(result.url, '_blank', 'noopener,noreferrer')
    } else if (result.href) {
      const element = document.querySelector(result.href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
    setQuery('')
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open search (Ctrl+K or Cmd+K)"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          background: 'var(--search-bg)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          cursor: 'pointer',
          fontSize: '0.9rem',
        }}
        title="Search (Cmd/Ctrl + K)"
      >
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        <span>Search...</span>
        <kbd style={{
          padding: '0.2rem 0.4rem',
          borderRadius: '4px',
          background: 'var(--kbd-bg)',
          fontSize: '0.75rem',
          fontFamily: 'monospace',
        }}>
          ⌘K
        </kbd>
      </button>
    )
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--overlay-dark)',
          backdropFilter: 'blur(4px)',
          zIndex: 999,
        }}
        onClick={() => {
          setIsOpen(false)
          setQuery('')
        }}
      />
      <div
        ref={searchRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search projects and sections"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(600px, 95vw)',
          maxWidth: 'calc(100vw - 2rem)',
          background: 'var(--card-strong)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          maxHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          borderBottom: '1px solid var(--border)',
        }}>
          <i className="fa-solid fa-magnifying-glass" style={{ color: 'var(--muted)' }} aria-hidden="true"></i>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, sections..."
            autoFocus
            aria-label="Search input"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text)',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              setQuery('')
            }}
            aria-label="Close search"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--muted)',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <div style={{
          overflowY: 'auto',
          maxHeight: 'calc(70vh - 60px)',
        }}>
          {results.length === 0 && query ? (
            <div style={{
              padding: '2rem',
              textAlign: 'center',
              color: 'var(--muted)',
            }}>
              No results found
            </div>
          ) : results.length === 0 ? (
            <div style={{
              padding: '2rem',
              textAlign: 'center',
              color: 'var(--muted)',
            }}>
              Start typing to search...
            </div>
          ) : (
            results.map((result, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleResultClick(result)}
                style={{
                width: '100%',
                padding: '1rem',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--border)',
                borderLeft: '3px solid transparent',
                color: 'var(--text)',
                cursor: 'pointer',
                transition: 'background 0.2s ease, border-left-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--search-hover)'
                  e.currentTarget.style.borderLeftColor = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderLeftColor = 'transparent'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.25rem',
                }}>
                  <i className={`fa-solid fa-${result.type === 'project' ? 'code' : 'hashtag'}`} style={{
                    color: 'var(--accent)',
                    fontSize: '0.9rem',
                  }}></i>
                  <strong>{result.title}</strong>
                </div>
                {result.description && (
                  <p style={{
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                  }}>
                    {result.description}
                  </p>
                )}
              </button>
            ))
        )}
        </div>
      </div>
    </>
  )
}
