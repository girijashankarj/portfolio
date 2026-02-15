import { useState } from 'react'
import { Reveal } from '../shared/Reveal'
import { getNewsletterScriptUrl } from '@/common/apps-script'

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const REQUEST_TIMEOUT_MS = 30000

export function NewsletterSubscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const newsletterUrl = getNewsletterScriptUrl()
  const isConfigured = newsletterUrl.length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const n = name.trim().slice(0, MAX_NAME_LENGTH)
    const em = email.trim().slice(0, MAX_EMAIL_LENGTH)
    if (!n || !em) return

    if (!isConfigured) {
      setErrorMsg('Newsletter is not configured.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
      return
    }

    setStatus('sending')
    setErrorMsg('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      await fetch(newsletterUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name: n, email: em }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      // Google Apps Script returns 302 redirect; with no-cors the response is
      // opaque but the data IS sent and processed. Client-side validation already
      // passed, so we treat a resolved fetch as success.
      setStatus('success')
      setName('')
      setEmail('')
    } catch (err) {
      clearTimeout(timeoutId)
      if (err instanceof DOMException && err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please try again.')
      } else {
        setErrorMsg('Subscription failed. Please try again.')
      }
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  const nameOver = name.length > MAX_NAME_LENGTH
  const emailOver = email.length > MAX_EMAIL_LENGTH
  const hasLimitError = nameOver || emailOver
  const submitDisabled = status === 'sending' || hasLimitError

  const inputErrorStyle = { borderColor: '#ef4444' as const }

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
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div>
              <label htmlFor="newsletter-name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)' }}>
                Name *
              </label>
              <input
                id="newsletter-name"
                name="name"
                type="text"
                placeholder="Your name"
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
                  ...(nameOver ? inputErrorStyle : {}),
                }}
              />
              {nameOver && <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>Max {MAX_NAME_LENGTH} characters</p>}
            </div>
            <div>
              <label htmlFor="newsletter-email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)' }}>
                Email *
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="your@email.com"
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
                  ...(emailOver ? inputErrorStyle : {}),
                }}
              />
              {emailOver && <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>Max {MAX_EMAIL_LENGTH} characters</p>}
            </div>
            <button
              type="submit"
              disabled={submitDisabled}
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
                <i className="fa-solid fa-exclamation-circle"></i> {errorMsg || 'Something went wrong. Try again.'}
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
