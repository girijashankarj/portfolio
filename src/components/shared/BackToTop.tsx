import { useState, useEffect } from 'react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 'clamp(1rem, 4vw, 2rem)',
        right: 'clamp(1rem, 4vw, 2rem)',
        width: 'clamp(44px, 6vw, 48px)',
        height: 'clamp(44px, 6vw, 48px)',
        borderRadius: '50%',
        background: 'var(--gradient-primary)',
        border: 'none',
        color: '#ffffff',
        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(66, 133, 244, 0.4)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        minWidth: '44px',
        minHeight: '44px',
        touchAction: 'manipulation',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 16px var(--shadow)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 12px var(--shadow)'
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  )
}
