import { useState } from 'react'
import { Reveal } from '../shared/Reveal'

// Only allow trusted Google Apps Script web app URLs (prevents injection)
const VALID_SCRIPT_URL =
  /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/

function getNewsletterScriptUrl(): string {
  const raw = import.meta.env.VITE_NEWSLETTER_SCRIPT_URL
  if (typeof raw === 'string' && VALID_SCRIPT_URL.test(raw.trim())) {
    return raw.trim()
  }
  return ''
}

const NEWSLETTER_SCRIPT_URL = getNewsletterScriptUrl()

export function NewsletterSubscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setStatus('sending')
    try {
      const res = await fetch(NEWSLETTER_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })
      if (!res.ok) throw new Error('Subscribe failed')
      setStatus('success')
      setName('')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const isConfigured = NEWSLETTER_SCRIPT_URL.length > 0

  return (
    <Reveal>
      <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
          <i className="fa-solid fa-newspaper" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i>
          Tech Newsletter
        </h3>
        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
          Curated AI, GenAI & MLOps digest. Weekly insights, no spam.
        </p>
        {isConfigured ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.6rem 0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontSize: '0.95rem',
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.6rem 0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontSize: '0.95rem',
              }}
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {status === 'sending' ? (
                <><i className="fa-solid fa-spinner fa-spin"></i> Subscribing...</>
              ) : status === 'success' ? (
                <><i className="fa-solid fa-check"></i> Subscribed!</>
              ) : (
                <><i className="fa-solid fa-bell"></i> Subscribe</>
              )}
            </button>
            {status === 'error' && (
              <p style={{ fontSize: '0.85rem', color: '#ef4444' }}>
                <i className="fa-solid fa-exclamation-circle"></i> Something went wrong. Try again.
              </p>
            )}
          </form>
        ) : (
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
            Newsletter signup coming soon. Check back later!
          </p>
        )}
      </div>
    </Reveal>
  )
}
