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
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
          Theme preference is stored locally; no tracking or advertising cookies are used.
        </p>
        <p className="muted" style={{ color: 'var(--muted)', marginTop: '1rem' }}>&copy; 2025 Girijashankar Jambhale</p>
      </div>
    </footer>
  )
}
