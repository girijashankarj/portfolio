/**
 * Google Apps Script URL for newsletter + contact form.
 * Validated to prevent injection - only script.google.com allowed.
 */
const VALID_SCRIPT_URL =
  /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/

export function getAppsScriptUrl(): string {
  const raw = import.meta.env.VITE_NEWSLETTER_SCRIPT_URL
  if (typeof raw === 'string' && VALID_SCRIPT_URL.test(raw.trim())) {
    return raw.trim()
  }
  return ''
}
