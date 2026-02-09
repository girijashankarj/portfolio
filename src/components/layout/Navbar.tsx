import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveNav, toggleTheme } from '@/store/portfolioSlice'
import type { RootState } from '@/store'
import { NAV_ITEMS } from '@/common/constants'
import { Search } from '../shared/Search'

export function Navbar() {
  const dispatch = useDispatch()
  const { activeNav, theme } = useSelector((state: RootState) => state.portfolio)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          dispatch(setActiveNav(sectionId || ''))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch])

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 900
      if (!isMobileView) {
        setIsMobileMenuOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar" style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        backdropFilter: 'blur(20px) saturate(180%)',
        background: theme === 'light' 
          ? 'rgba(255, 255, 255, 0.92)' 
          : 'rgba(10, 14, 26, 0.92)',
        borderBottom: `1px solid ${theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(148, 163, 184, 0.18)'}`,
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: 'clamp(0.5rem, 2vw, 1rem)',
            padding: '1rem 0',
          }}>
            <div className="brand" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.85rem)',
              fontWeight: 700,
              minWidth: 0,
              flex: '0 1 auto',
              overflow: 'hidden',
            }}>
              <img src={`${import.meta.env.BASE_URL}assets/profile-header.jpeg`} alt="Girijashankar Jambhale - AI Platform Engineer" style={{
                width: 'clamp(36px, 5vw, 42px)',
                height: 'clamp(36px, 5vw, 42px)',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                flexShrink: 0,
              }} />
              <span style={{ 
                whiteSpace: 'nowrap', 
                fontSize: 'clamp(0.8rem, 2vw, 0.98rem)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: 'clamp(100px, 25vw, 200px)',
                minWidth: 0,
              }}>Girijashankar Jambhale</span>
            </div>
            <div className="nav-links" style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: '1.5rem',
              fontSize: '0.85rem',
              whiteSpace: 'nowrap',
              justifyContent: 'center',
            }}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={activeNav === item.id ? 'active' : ''}
                  style={{
                    color: activeNav === item.id ? 'var(--text)' : 'var(--muted)',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                    padding: '0.25rem 0',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                  {activeNav === item.id && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-0.5rem',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--gradient-primary)',
                    }} />
                  )}
                </a>
              ))}
            </div>
            <div className="nav-actions" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.3rem, 1.5vw, 0.5rem)',
              flexShrink: 0,
            }}>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="theme-toggle"
                style={{
                  background: 'var(--gradient-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  minHeight: '44px',
                  minWidth: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                <i className={`fa-solid fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
              </button>
              <Search />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-toggle"
                style={{
                  display: 'none',
                  background: 'var(--gradient-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  minHeight: '44px',
                  minWidth: '44px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <i className={`fa-solid fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div
        className="mobile-menu-overlay"
        style={{
          display: isMobileMenuOpen ? 'block' : 'none',
          position: 'fixed',
          top: '73px',
          left: 0,
          right: 0,
          bottom: 0,
          background: theme === 'light' 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'rgba(10, 14, 26, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 59,
          padding: '2rem 1rem',
          overflowY: 'auto',
          borderTop: '1px solid var(--border)',
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick(item.href)
              }}
              style={{
                color: activeNav === item.id ? 'var(--accent)' : 'var(--text)',
                fontSize: '1.1rem',
                fontWeight: activeNav === item.id ? 600 : 400,
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: activeNav === item.id ? 'var(--nav-active-bg)' : 'transparent',
                border: activeNav === item.id ? '1px solid var(--accent)' : '1px solid transparent',
                transition: 'all 0.2s ease',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-menu-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
