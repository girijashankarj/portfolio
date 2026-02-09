import { useEffect, useState } from 'react'

export function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(progressPercent)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="progress-track" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      background: 'var(--progress-track)',
      zIndex: 70,
    }}>
      <div
        className="progress-bar"
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'var(--gradient-primary)',
        }}
      />
    </div>
  )
}
