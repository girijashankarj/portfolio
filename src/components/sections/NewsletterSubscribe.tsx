import { useState, useEffect, useRef } from 'react'
import { Reveal } from '../shared/Reveal'
import { getAppsScriptUrl } from '@/common/apps-script'

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const FORM_IFRAME_NAME = 'portfolio-form-frame'

export function NewsletterSubscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const resolveRef = useRef<((data: { ok?: boolean; error?: string }) => void) | null>(null)

  const scriptUrl = getAppsScriptUrl()
  const isConfigured = scriptUrl.length > 0

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (resolveRef.current && typeof e.data === 'string') {
        try {
          const data = JSON.parse(e.data) as { ok?: boolean; message?: string; error?: string; formType?: string }
          if (data.formType !== 'newsletter') return
          resolveRef.current(data)
        } catch {
          resolveRef.current({ ok: false, error: 'Invalid response' })
        }
        resolveRef.current = null
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const n = name.trim().slice(0, MAX_NAME_LENGTH)
    const em = email.trim().slice(0, MAX_EMAIL_LENGTH)
    if (!n || !em) return

    setStatus('sending')
    setErrorMsg('')
    resolveRef.current = (data) => {
      if (data.ok) {
        setStatus('success')
        setName('')
        setEmail('')
      } else {
        setErrorMsg(data.error || 'Subscription failed')
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 4000)
    }
    setTimeout(() => {
      if (resolveRef.current) {
        resolveRef.current({ ok: false, error: 'Request timed out' })
        resolveRef.current = null
        setErrorMsg('Request timed out. Please try again.')
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    }, 30000)
  }

  const isConfigured = APPS_SCRIPT_URL.length > 0
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
            action={scriptUrl}
            method="POST"
            target={FORM_IFRAME_NAME}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input type="hidden" name="formType" value="newsletter" />
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
