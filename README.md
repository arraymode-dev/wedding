# fold.designs

Marketing site for **fold.designs** — bespoke wedding stationery by Rosie Pedley,
Manchester and UK-wide.

Static, no CMS. Built with [Astro](https://astro.build) and Tailwind v4.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build locally
```

Deploy `dist/` to any static host — Netlify, Vercel, Cloudflare Pages, GitHub
Pages. No server or runtime is required.

## Structure

```
src/
  pages/            One file per route; work/[slug] generates the case studies
  layouts/Base      <head>, SEO, fonts, scroll-reveal
  components/       Nav, Footer, WorkCard, Rail, SuiteArt, Logo, PageHead
  data/             All site content — edit these, not the templates
  styles/global.css Design tokens (@theme) and shared components
```

**All copy lives in `src/data/`.** `site.ts` holds contact details and
navigation, `work.ts` the case studies, `services.ts` the service tiers. Editing
those files is how the site gets updated; the page templates rarely need
touching. Adding a project to `work.ts` automatically creates its card, its page
at `/work/<slug>`, and its sitemap entry.

## Design

Palette is taken from the FOLD wordmark artwork — navy `#2e3279`, butter
`#ebdf8d`, coral `#d9584a`, periwinkle `#8894c8` — on a warm cream ground, with
a soft coral-and-butter glow behind the masthead. Type is Inter throughout, with
Instrument Serif used only for display headings and the occasional italic word.
Tokens are defined once in the `@theme` block at the top of `global.css`.

Layout follows a quiet, Swiss-restrained structure: a hairline header that
frosts only when content scrolls under it, a horizontally scrolling card rail
for work, and narrow left-aligned text columns.

---

## Before this goes live

Everything below is deliberate placeholder content. None of it is real.

- [ ] **Logo** — `src/components/Logo.astro` is a geometric reconstruction of
      the FOLD mark, not the original. Drop the real vector at
      `public/logo.svg` and swap the component body for an `<img>`, keeping the
      same props. Same for `public/favicon.svg`.
- [ ] **Photography** — `src/components/SuiteArt.astro` draws each suite as SVG
      so the cards look designed while real photography is shot. Replace
      `<SuiteArt />` in `WorkCard.astro` and `work/[slug].astro` with real
      images.
- [ ] **Case-study copy** — couple names in `work.ts` are taken from the public
      Instagram grid, but every description is written placeholder copy, not a
      client's own account. Rewrite or remove before launch.
- [ ] **Pricing** — every `from` and `lead` figure in `services.ts` is
      illustrative. Replace with real studio numbers.
- [ ] **Contact form** — `src/pages/contact.astro` posts nowhere. Point
      `action` at a form endpoint (Formspree, Basin, Netlify Forms) and remove
      the submit interceptor in the page's `<script>`. Keep the `_gotcha`
      honeypot field.
- [ ] **Email address** — `hello@folddesigns.co.uk` in `site.ts` is a guess.
- [ ] **Domain** — set the real domain as `site` in `astro.config.mjs`. It
      drives canonical URLs, Open Graph tags and the sitemap.
- [ ] **Social card** — add `public/og.png` (1200×630). Referenced already.
- [ ] **About portrait** — `src/pages/about.astro` has a drawn placeholder.

## Accessibility notes

Skip link, visible focus rings, and a real heading order are in place.
Scroll-reveal is progressive: content is only hidden once JS confirms it can
reveal it, and `prefers-reduced-motion` disables it entirely. Card artwork is
decorative and hidden from screen readers; each card is labelled by its heading.
