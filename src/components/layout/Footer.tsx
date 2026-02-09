export function Footer() {
  return (
    <footer className="footer" role="contentinfo" style={{
      padding: '3rem 0 4rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-soft)',
      color: 'var(--text)',
    }}>
      <div className="container">
        <p>Thank you for visiting my portfolio. Updated for 2025.</p>
        <p className="muted" style={{ color: 'var(--muted)' }}>&copy; 2025 Girijashankar Jambhale</p>
      </div>
    </footer>
  )
}
