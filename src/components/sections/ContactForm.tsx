import { useState } from 'react'
import { Reveal } from '../shared/Reveal'
import { getAppsScriptUrl } from '@/common/apps-script'

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_SUBJECT_LENGTH = 150
const MAX_MESSAGE_LENGTH = 200

function sanitize(str: string, maxLen?: number): string {
  const s = str.replace(/<[^>]*>/g, '').replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '').trim()
  return maxLen ? s.slice(0, maxLen) : s
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const scriptUrl = getAppsScriptUrl()
  const isConfigured = scriptUrl.length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isConfigured) {
      setErrorMsg('Contact form is not configured.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const payload = {
      name: sanitize(formData.name, MAX_NAME_LENGTH),
      email: sanitize(formData.email, MAX_EMAIL_LENGTH),
      subject: sanitize(formData.subject, MAX_SUBJECT_LENGTH),
      message: sanitize(formData.message, MAX_MESSAGE_LENGTH),
    }

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setErrorMsg('All fields are required.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sending')
    setErrorMsg('')
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = scriptUrl
    form.target = 'portfolio-form-frame'
    form.style.display = 'none'
    const add = (name: string, value: string) => {
      const input = document.createElement('input')
      input.name = name
      input.value = value
      form.appendChild(input)
    }
    add('name', payload.name)
    add('email', payload.email)
    add('subject', payload.subject)
    add('message', payload.message)
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const overLimits = {
    name: formData.name.length > MAX_NAME_LENGTH,
    email: formData.email.length > MAX_EMAIL_LENGTH,
    subject: formData.subject.length > MAX_SUBJECT_LENGTH,
    message: formData.message.length > MAX_MESSAGE_LENGTH,
  }
  const hasLimitError = overLimits.name || overLimits.email || overLimits.subject || overLimits.message
  const submitDisabled = status === 'sending' || hasLimitError
  const inputErrorStyle = { borderColor: '#ef4444' as const }

  return (
    <Reveal>
      <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Send Message</h3>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          flex: '1 1 auto',
        }}>
          <div>
            <label htmlFor="name" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--text)',
            }}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: 'clamp(0.6rem, 2vw, 0.75rem)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                minHeight: '44px',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                ...(overLimits.name ? inputErrorStyle : {}),
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = overLimits.name ? '#ef4444' : 'var(--border)'
              }}
            />
            {overLimits.name && <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>Max {MAX_NAME_LENGTH} characters</p>}
          </div>
          <div>
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--text)',
            }}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: 'clamp(0.6rem, 2vw, 0.75rem)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                minHeight: '44px',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                ...(overLimits.email ? inputErrorStyle : {}),
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = overLimits.email ? '#ef4444' : 'var(--border)'
              }}
            />
            {overLimits.email && <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>Max {MAX_EMAIL_LENGTH} characters</p>}
          </div>
          <div>
            <label htmlFor="subject" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--text)',
            }}>
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="e.g., AI Platform Engineer Role Inquiry"
              style={{
                width: '100%',
                padding: 'clamp(0.6rem, 2vw, 0.75rem)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                minHeight: '44px',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                ...(overLimits.subject ? inputErrorStyle : {}),
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = overLimits.subject ? '#ef4444' : 'var(--border)'
              }}
            />
            {overLimits.subject && <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>Max {MAX_SUBJECT_LENGTH} characters</p>}
          </div>
          <div>
            <label htmlFor="message" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--text)',
            }}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about your project or opportunity..."
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s ease',
                ...(overLimits.message ? inputErrorStyle : {}),
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = overLimits.message ? '#ef4444' : 'var(--border)'
              }}
            />
            {overLimits.message && <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>Max {MAX_MESSAGE_LENGTH} characters</p>}
          </div>
          {status === 'success' && (
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              color: '#22c55e',
              fontSize: '0.9rem',
            }}>
              <i className="fa-solid fa-check-circle"></i> Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              fontSize: '0.9rem',
            }}>
              <i className="fa-solid fa-exclamation-circle"></i> {errorMsg}
            </div>
          )}
          <button
            type="submit"
            disabled={submitDisabled}
            style={{
              padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
              borderRadius: '10px',
              background: submitDisabled 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'var(--gradient-primary)',
              border: 'none',
              color: submitDisabled ? 'var(--muted)' : '#ffffff',
              boxShadow: submitDisabled ? 'none' : '0 4px 12px rgba(66, 133, 244, 0.2)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              fontWeight: 700,
              cursor: submitDisabled ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              minHeight: '44px',
              width: '100%',
              touchAction: 'manipulation',
            }}
          >
            {status === 'sending' ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i>
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

      </div>
    </Reveal>
  )
}
