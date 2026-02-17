# Security

This document summarizes how the portfolio is built to be safe from common threats (DDoS, data leaks, hacking).

## Why this portfolio is safe

- **Static site** — Served as static files from GitHub Pages. There is no application server to attack, no database, and no server-side secrets. This greatly reduces DDoS and server-compromise risk.
- **No credentials in the client** — No API keys, passwords, or tokens are in the repo or in the built JS. Only `VITE_*` env vars are embedded at build time (Vite default).
- **Forms use Google’s infrastructure** — Contact and newsletter submissions go to Google Apps Script. Google handles scaling, rate limiting, and execution. The portfolio does not process or store form data itself.
- **Content Security Policy (CSP)** — `index.html` defines a strict CSP (e.g. `default-src 'self'`, script/style/font/connect/frame-src allowlists). This limits XSS and unwanted third-party requests.
- **Input validation and sanitization** — Form fields are length-limited and sanitized (HTML stripped, control characters removed) before send. Newsletter form validates email format and required fields.

## Newsletter + Contact form

- **`VITE_CONTACT_SCRIPT_URL`** and **`VITE_NEWSLETTER_SCRIPT_URL`** are baked into the built JS at build time. These URLs are visible to anyone who inspects the site. This is intentional: they are public web app endpoints. Access control and quotas are enforced by Google (the script runs as you).
- **`.env`** is gitignored. Do not commit `.env` or `.env.local` (or any file containing these URLs if you treat them as private).
- **URL validation** in `src/common/apps-script.ts` restricts form targets to `https://script.google.com/macros/s/.../exec` only. Invalid URLs are ignored.
- **Contact form**: Name, subject, and message are length-limited; all fields are sanitized before send.
- **Newsletter form**: First name, last name, and email are required and validated (including email format).

## DDoS, abuse, and rate limiting

- The site itself is static; “DDoS” on the HTML/JS/CSS is just normal traffic to GitHub Pages, which is designed for that.
- Form abuse (spam, floods) is limited by: (1) Google Apps Script execution quotas and rate limiting, (2) optional future hardening (e.g. reCAPTCHA, server-side checks in Apps Script). No sensitive data is exposed if someone spams the form; it only appends rows to your sheets.

## Data and privacy

- Form submissions are sent only to your Google Apps Script web apps and stored in your Google Sheets. The portfolio does not log or store them.
- No analytics or third-party scripts are required for the core site; add them only if you need them and accept their privacy impact.
- **Cookies / storage:** The site does not set cookies. Only **localStorage** is used, for theme preference (`portfolio-theme`). That is strictly necessary for the feature and does not require consent under GDPR. If you add analytics or advertising later, you must add a cookie-consent banner (accept / reject / manage) and document it in your privacy notice.

## Source code

- No API keys, passwords, or tokens in the codebase.
- Only `VITE_*` env vars are exposed to the client (Vite default).
