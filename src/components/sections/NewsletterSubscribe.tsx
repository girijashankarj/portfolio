import { useState } from 'react'
import { Reveal } from '../shared/Reveal'
import { getNewsletterScriptUrl } from '@/common/apps-script'
import {
  NEWSLETTER,
  validateNewsletterFirstName,
  validateNewsletterLastName,
  validateNewsletterEmail,
} from '@/utils/formValidation'

const REQUEST_TIMEOUT_MS = 25000

type ScriptResponse = { ok?: boolean; error?: string; formType?: string }

const MAX_FIRST_NAME_LENGTH = NEWSLETTER.MAX_FIRST_NAME_LENGTH
const MAX_LAST_NAME_LENGTH = NEWSLETTER.MAX_LAST_NAME_LENGTH
const MAX_EMAIL_LENGTH = NEWSLETTER.MAX_EMAIL_LENGTH

type FieldErrors = { firstName?: string; lastName?: string; email?: string }

export function NewsletterSubscribe() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const newsletterUrl = getNewsletterScriptUrl()
  const isConfigured = newsletterUrl.length > 0

  const validateAll = (): boolean => {
    const err: FieldErrors = {}
    const e1 = validateNewsletterFirstName(firstName)
    const e2 = validateNewsletterLastName(lastName)
    const e3 = validateNewsletterEmail(email)
    if (e1) err.firstName = e1
    if (e2) err.lastName = e2
    if (e3) err.email = e3
    setFieldErrors(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateAll()) return

    const first = firstName.trim().slice(0, MAX_FIRST_NAME_LENGTH)
    const last = lastName.trim().slice(0, MAX_LAST_NAME_LENGTH)
    const em = email.trim().slice(0, MAX_EMAIL_LENGTH)

    if (!isConfigured) {
      setErrorMsg('Newsletter is not configured.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
      return
    }

    setStatus('sending')
    setErrorMsg('')
    setFieldErrors({})

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const res = await fetch(newsletterUrl, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ firstName: first, lastName: last, email: em }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

      const text = await res.text()
      let data: ScriptResponse = {}
      try {
        data = text ? JSON.parse(text) : {}
      } catch {
        /* ignore */
      }

      if (res.ok && data.ok) {
        setStatus('success')
        setFirstName('')
        setLastName('')
        setEmail('')
      } else {
        setErrorMsg(data.error || `Request failed (${res.status}). Please try again.`)
        setStatus('error')
      }
    } catch (err) {
      clearTimeout(timeoutId)
      if (err instanceof DOMException && err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please try again.')
      } else {
        setErrorMsg('Subscription failed. Check your connection or try again later.')
      }
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  const firstOver = firstName.length > MAX_FIRST_NAME_LENGTH
  const lastOver = lastName.length > MAX_LAST_NAME_LENGTH
  const emailOver = email.length > MAX_EMAIL_LENGTH
  const hasLimitError = firstOver || lastOver || emailOver
  const hasFieldError = Boolean(fieldErrors.firstName || fieldErrors.lastName || fieldErrors.email)
  const missingRequired = !firstName.trim() || !lastName.trim() || !email.trim()
  const submitDisabled = status === 'sending' || hasLimitError || hasFieldError || missingRequired

  const inputErrorStyle = { borderColor: '#ef4444' as const }
  const showError = (field: keyof FieldErrors) => fieldErrors[field] || (field === 'firstName' && firstOver) || (field === 'lastName' && lastOver) || (field === 'email' && emailOver)

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
              <label htmlFor="newsletter-first-name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)' }}>
                First Name *
              </label>
              <input
                id="newsletter-first-name"
                name="firstName"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                  if (fieldErrors.firstName) setFieldErrors((prev) => ({ ...prev, firstName: undefined }))
                }}
                onBlur={() => setFieldErrors((prev) => ({ ...prev, firstName: validateNewsletterFirstName(firstName) }))}
                required
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-soft)',
                  color: 'var(--text)',
                  fontSize: '0.95rem',
                  ...(showError('firstName') ? inputErrorStyle : {}),
                }}
              />
              {(fieldErrors.firstName || firstOver) && (
                <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>
                  {fieldErrors.firstName || `Max ${MAX_FIRST_NAME_LENGTH} characters`}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="newsletter-last-name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)' }}>
                Last Name *
              </label>
              <input
                id="newsletter-last-name"
                name="lastName"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                  if (fieldErrors.lastName) setFieldErrors((prev) => ({ ...prev, lastName: undefined }))
                }}
                onBlur={() => setFieldErrors((prev) => ({ ...prev, lastName: validateNewsletterLastName(lastName) }))}
                required
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-soft)',
                  color: 'var(--text)',
                  fontSize: '0.95rem',
                  ...(showError('lastName') ? inputErrorStyle : {}),
                }}
              />
              {(fieldErrors.lastName || lastOver) && (
                <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>
                  {fieldErrors.lastName || `Max ${MAX_LAST_NAME_LENGTH} characters`}
                </p>
              )}
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
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }))
                }}
                onBlur={() => setFieldErrors((prev) => ({ ...prev, email: validateNewsletterEmail(email) }))}
                required
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-soft)',
                  color: 'var(--text)',
                  fontSize: '0.95rem',
                  ...(showError('email') ? inputErrorStyle : {}),
                }}
              />
              {(fieldErrors.email || emailOver) && (
                <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>
                  {fieldErrors.email || `Max ${MAX_EMAIL_LENGTH} characters`}
                </p>
              )}
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
