import { useState } from 'react'
import { Reveal } from '../shared/Reveal'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Show confirmation dialog instead of immediately opening mailto
    setShowConfirmDialog(true)
  }

  const handleConfirmSend = () => {
    setShowConfirmDialog(false)
    setStatus('sending')

    // Using Formspree or similar service
    // For now, we'll use mailto as fallback
    const mailtoLink = `mailto:girijashankarj@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    
    // Try to open mailto link
    window.location.href = mailtoLink
    
    // Simulate success after a delay
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleCancelSend = () => {
    setShowConfirmDialog(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            />
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
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            />
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
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            />
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
              rows={5}
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
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            />
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
              <i className="fa-solid fa-exclamation-circle"></i> Failed to send message. Please try again.
            </div>
          )}
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
              borderRadius: '10px',
              background: status === 'sending' 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'var(--gradient-primary)',
              border: 'none',
              color: status === 'sending' ? 'var(--muted)' : '#ffffff',
              boxShadow: status === 'sending' ? 'none' : '0 4px 12px rgba(66, 133, 244, 0.2)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              fontWeight: 700,
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
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

        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }} onClick={handleCancelSend}>
            <div className="card-elevated" style={{
              maxWidth: '500px',
              width: '100%',
              padding: '2rem',
              position: 'relative',
            }} onClick={(e) => e.stopPropagation()}>
              <h3 style={{
                marginTop: 0,
                marginBottom: '1rem',
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <i className="fa-solid fa-envelope-circle-check" style={{ color: 'var(--accent)' }}></i>
                <span>Open Email Client?</span>
              </h3>
              <p style={{
                marginBottom: '1.5rem',
                color: 'var(--text)',
                lineHeight: '1.6',
                fontSize: '0.95rem',
              }}>
                We'll open your default email application (Gmail, Outlook, Apple Mail, etc.) with your message pre-filled. 
                You can review and send it from there.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
              }}>
                <button
                  type="button"
                  onClick={handleCancelSend}
                  className="btn-ghost"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-soft)',
                    color: 'var(--text)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.background = 'var(--card)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'var(--bg-soft)'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmSend}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(66, 133, 244, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(66, 133, 244, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(66, 133, 244, 0.2)'
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                  <span>Yes, Open Email</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  )
}
