import { describe, it, expect } from 'vitest'
import {
  validateNewsletterFirstName,
  validateNewsletterLastName,
  validateNewsletterEmail,
  sanitizeContactField,
  NEWSLETTER,
  CONTACT,
} from './formValidation'

describe('validateNewsletterFirstName', () => {
  it('returns error when empty or whitespace', () => {
    expect(validateNewsletterFirstName('')).toBe('First name is required.')
    expect(validateNewsletterFirstName('   ')).toBe('First name is required.')
  })
  it('returns undefined when valid', () => {
    expect(validateNewsletterFirstName('Garry')).toBeUndefined()
    expect(validateNewsletterFirstName('  Jane  ')).toBeUndefined()
  })
  it('returns error when over max length', () => {
    const long = 'a'.repeat(NEWSLETTER.MAX_FIRST_NAME_LENGTH + 1)
    expect(validateNewsletterFirstName(long)).toBe(`Max ${NEWSLETTER.MAX_FIRST_NAME_LENGTH} characters.`)
  })
  it('accepts exactly max length', () => {
    expect(validateNewsletterFirstName('a'.repeat(NEWSLETTER.MAX_FIRST_NAME_LENGTH))).toBeUndefined()
  })
})

describe('validateNewsletterLastName', () => {
  it('returns error when empty or whitespace', () => {
    expect(validateNewsletterLastName('')).toBe('Last name is required.')
    expect(validateNewsletterLastName('   ')).toBe('Last name is required.')
  })
  it('returns undefined when valid', () => {
    expect(validateNewsletterLastName('Patil')).toBeUndefined()
  })
  it('returns error when over max length', () => {
    const long = 'a'.repeat(NEWSLETTER.MAX_LAST_NAME_LENGTH + 1)
    expect(validateNewsletterLastName(long)).toBe(`Max ${NEWSLETTER.MAX_LAST_NAME_LENGTH} characters.`)
  })
})

describe('validateNewsletterEmail', () => {
  it('returns error when empty', () => {
    expect(validateNewsletterEmail('')).toBe('Email is required.')
    expect(validateNewsletterEmail('   ')).toBe('Email is required.')
  })
  it('returns error for invalid format', () => {
    expect(validateNewsletterEmail('invalid')).toBe('Enter a valid email address.')
    expect(validateNewsletterEmail('missing@domain')).toBe('Enter a valid email address.')
    expect(validateNewsletterEmail('@nodomain.com')).toBe('Enter a valid email address.')
    expect(validateNewsletterEmail('spaces in@email.com')).toBe('Enter a valid email address.')
  })
  it('returns undefined for valid email', () => {
    expect(validateNewsletterEmail('garry@gmail.com')).toBeUndefined()
    expect(validateNewsletterEmail('user+tag@example.co.uk')).toBeUndefined()
  })
  it('returns error when over max length', () => {
    const long = 'a'.repeat(NEWSLETTER.MAX_EMAIL_LENGTH) + '@x.co'
    expect(long.length).toBeGreaterThan(NEWSLETTER.MAX_EMAIL_LENGTH)
    expect(validateNewsletterEmail(long)).toBe(`Max ${NEWSLETTER.MAX_EMAIL_LENGTH} characters.`)
  })
})

describe('sanitizeContactField', () => {
  it('strips HTML tags', () => {
    expect(sanitizeContactField('<script>alert(1)</script>hello')).toBe('alert(1)hello')
    expect(sanitizeContactField('<b>bold</b>')).toBe('bold')
  })
  it('trims whitespace', () => {
    expect(sanitizeContactField('  text  ')).toBe('text')
  })
  it('truncates to maxLen when provided', () => {
    const str = 'a'.repeat(200)
    expect(sanitizeContactField(str, CONTACT.MAX_NAME_LENGTH)).toHaveLength(CONTACT.MAX_NAME_LENGTH)
    expect(sanitizeContactField('hello', 2)).toBe('he')
  })
  it('does not truncate when maxLen not provided', () => {
    const str = 'a'.repeat(300)
    expect(sanitizeContactField(str)).toHaveLength(300)
  })
  it('removes control characters', () => {
    expect(sanitizeContactField('a\x00b\x1fc')).toBe('abc')
  })
})
