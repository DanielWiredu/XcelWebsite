# Xcel iSolutions — Website

A premium, single-page marketing website for **Xcel iSolutions Company Limited**, a Ghanaian-owned custom software company specializing in web applications, mobile apps, and enterprise software for regulated industries.

> **Driven by Care. Powered by Innovation.**

## Tech stack

- **Next.js 15** (App Router, static export-ready)
- **React 19**
- **Tailwind CSS 3** (custom brand theme: navy + gold + blue gradients)
- **Framer Motion** (scroll reveals, staggered entrances, scroll progress, animated FAQ/menu)
- **lucide-react** icons
- **TypeScript**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Other scripts

```bash
npm run build            # production build → self-contained server in .next/standalone
npm run start            # serve the build (next start)
npm run start:standalone # run the standalone server directly (node .next/standalone/server.js)
npm run lint             # lint
```

## Deployment (Node.js on IIS)

This is a **Node.js app** (server-side API route + image optimization). `npm run build`
uses `output: "standalone"` and a `postbuild` step to produce a complete, copy-and-run
server at **`.next/standalone`**. IIS runs in front as a reverse proxy to the Node process.

👉 **Full step-by-step guide: [DEPLOY-IIS-NODE.md](DEPLOY-IIS-NODE.md)**

## Sections

Hero · Client marquee · Services · Industries · Featured Projects · Development Process ·
Technologies · Testimonials · Team · FAQ · Contact · Footer

## Design & quality notes

- **Minimalist** aesthetic — generous whitespace, large display typography (Sora), rounded cards, subtle blue gradients.
- **Accessibility** — skip-to-content link, semantic landmarks, `aria` on interactive elements, visible focus rings, and full `prefers-reduced-motion` support (animations disable gracefully).
- **SEO** — per-page metadata, Open Graph/Twitter tags, canonical URL, JSON-LD `Organization` schema, `sitemap.xml`, and `robots.txt`. All content renders server-side.
- **Responsive** — mobile-first layouts with a collapsing glass navbar and body-scroll lock on the mobile menu.

## Content

All copy and data live in [`lib/content.ts`](lib/content.ts) — services, industries, projects,
process, tech stack, testimonials, team, FAQ, and clients. Edit that single file to update the site.

## Contact form (Resend)

The contact form POSTs to the `app/api/contact/route.ts` server route, which sends an
email via [Resend](https://resend.com). To enable it:

1. Copy `.env.example` to `.env.local` and set your key:
   ```env
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=info@xcelisolutions.com
   CONTACT_FROM_EMAIL=Xcel iSolutions <onboarding@resend.dev>
   ```
2. Get a key at **resend.com → API Keys**. For production, verify the
   `xcelisolutions.com` domain in Resend, then change `CONTACT_FROM_EMAIL` to a verified
   sender (e.g. `Xcel iSolutions <hello@xcelisolutions.com>`).
3. Restart the dev server.

The route includes input validation, a honeypot anti-spam field, and graceful error
handling. Without a key set, valid submissions return a friendly "not configured" error.

## Customization checklist

- Contact details live in `lib/content.ts` (`company`) — already set to real values.
- Team photos live in `public/team/` and are wired in `lib/content.ts`.
- Set `RESEND_API_KEY` in `.env.local` to activate the contact form.
- Swap testimonial attributions for named, approved quotes when available.
