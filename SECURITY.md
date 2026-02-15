# Security

## Newsletter signup

- **`VITE_NEWSLETTER_SCRIPT_URL`** is baked into the built JS at build time. The Apps Script URL is visible to anyone who inspects the site. This is expected: it is a public endpoint. Security is enforced by Google (the script runs as you and only writes to your sheet).
- **`.env`** is gitignored. Never commit secrets.
- **URL validation** in `NewsletterSubscribe.tsx` restricts fetch targets to `https://script.google.com/macros/s/.../exec` only.

## No tokens or secrets in source

- No API keys, passwords, or tokens in the codebase.
- Only `VITE_*` env vars are exposed to the client (Vite default).
