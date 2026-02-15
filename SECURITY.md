# Security

## Newsletter + Contact form

- **`VITE_NEWSLETTER_SCRIPT_URL`** is baked into the built JS at build time. The Apps Script URL is visible to anyone who inspects the site. This is expected: it is a public endpoint. Security is enforced by Google (the script runs as you).
- **`.env`** is gitignored. Do not commit `.env` or `.env.local`.
- **URL validation** in `apps-script.ts` restricts form targets to `https://script.google.com/macros/s/.../exec` only.
- **Contact form**: Message limited to 200 chars; all fields sanitized (HTML stripped, control chars removed) before send.

## Source code

- No API keys, passwords, or tokens in the codebase.
- Only `VITE_*` env vars are exposed to the client (Vite default).
