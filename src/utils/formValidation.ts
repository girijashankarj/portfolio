/**
 * Shared form validation and sanitization for Contact and Newsletter.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const NEWSLETTER = {
  MAX_FIRST_NAME_LENGTH: 100,
  MAX_LAST_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 254,
  MIN_NAME_LENGTH: 1,
} as const

export const CONTACT = {
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 254,
  MAX_SUBJECT_LENGTH: 150,
  MAX_MESSAGE_LENGTH: 200,
} as const

export function validateNewsletterFirstName(value: string): string | undefined {
  const t = value.trim()
  if (t.length < NEWSLETTER.MIN_NAME_LENGTH) return 'First name is required.'
  if (t.length > NEWSLETTER.MAX_FIRST_NAME_LENGTH) return `Max ${NEWSLETTER.MAX_FIRST_NAME_LENGTH} characters.`
  return undefined
}

export function validateNewsletterLastName(value: string): string | undefined {
  const t = value.trim()
  if (t.length < NEWSLETTER.MIN_NAME_LENGTH) return 'Last name is required.'
  if (t.length > NEWSLETTER.MAX_LAST_NAME_LENGTH) return `Max ${NEWSLETTER.MAX_LAST_NAME_LENGTH} characters.`
  return undefined
}

export function validateNewsletterEmail(value: string): string | undefined {
  const t = value.trim()
  if (t.length < 1) return 'Email is required.'
  if (t.length > NEWSLETTER.MAX_EMAIL_LENGTH) return `Max ${NEWSLETTER.MAX_EMAIL_LENGTH} characters.`
  if (!EMAIL_REGEX.test(t)) return 'Enter a valid email address.'
  return undefined
}

/**
 * Strip HTML tags and control characters, trim, optionally truncate.
 */
export function sanitizeContactField(str: string, maxLen?: number): string {
  // eslint-disable-next-line no-control-regex -- intentional: strips control characters from user input as part of sanitization
  const s = str.replace(/<[^>]*>/g, '').replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '').trim()
  return maxLen ? s.slice(0, maxLen) : s
}
