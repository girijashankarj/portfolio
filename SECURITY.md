# Security

## Newsletter + Contact form

- **`VITE_NEWSLETTER_SCRIPT_URL`** is baked into the built JS at build time. The Apps Script URL is visible to anyone who inspects the site. This is expected: it is a public endpoint. Security is enforced by Google (the script runs as you).
- **`.env`** is gitignored. Never commit secrets.
- **URL validation** in `apps-script.ts` restricts fetch targets to `https://script.google.com/macros/s/.../exec` only.
- **Contact form**: Message limited to 200 chars; all fields sanitized (HTML stripped, control chars removed) before send.

## No tokens or secrets in source

- No API keys, passwords, or tokens in the codebase.
- Only `VITE_*` env vars are exposed to the client (Vite default).
