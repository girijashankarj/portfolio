/**
 * Separate URLs for contact form and newsletter.
 * Deploy ContactCode.gs and NewsletterCode.gs as separate web apps.
 */
const VALID_SCRIPT_URL =
  /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/

function getUrl(envKey: string): string {
  const raw = import.meta.env[envKey]
  if (typeof raw === 'string' && VALID_SCRIPT_URL.test(raw.trim())) {
    return raw.trim()
  }
  return ''
}

export function getContactScriptUrl(): string {
  return getUrl('VITE_CONTACT_SCRIPT_URL') || getUrl('VITE_NEWSLETTER_SCRIPT_URL')
}

export function getNewsletterScriptUrl(): string {
  return getUrl('VITE_NEWSLETTER_SCRIPT_URL') || getUrl('VITE_CONTACT_SCRIPT_URL')
}
