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
  layouts/Base      <head>, SEO, fonts, router, scroll-reveal
  components/       Nav, Footer, WorkCard, BarrelRail, SuiteArt, Logo,
                    PageHead, PageMorph, Intro
  data/             All site content — edit these, not the templates
  lib/three.ts      The slice of three.js the site uses
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
frosts only when content scrolls under it, narrow left-aligned text columns,
and the work barrel below the masthead.

## The three.js pieces

Two features use three.js. Both load it lazily from `src/lib/three.ts`, so
nothing three-related is fetched on first paint — the eager JS payload is
about 9 KB gzipped, and the shared three chunk (~126 KB gzipped) arrives
afterwards.

**The work barrel** (`BarrelRail.astro`) renders the cards through
`CSS3DRenderer` rather than WebGL, so they stay real DOM: the type is crisp at
any zoom, the links work, and text is selectable. Cards lie on the *inside* of
the barrel — depth follows `z = u² / 2r` with each card laid tangent to it —
so the further a card sits from centre, the more its outer edge swings toward
the viewer. The curve radius is mapped to travel speed, so a hard throw curls
the barrel tighter and it relaxes as it coasts. It is driven by the section's
travel through the viewport, by dragging, and by flicking, with release
velocity measured from the last 90 ms of the gesture.

three is fetched only once the rail is within 600 px of the viewport. Until
then — and always, under `prefers-reduced-motion` or without JS — the
server-rendered horizontal rail is what visitors get.

**The page transition** (`PageMorph.astro`) is a bending mask, after Jesper
Landberg's [WebGL bending mask transition](https://codepen.io/ReGGae/pen/rNxpVEd).
A single oversized triangle covers the viewport, masked by a horizontal edge
that sweeps vertically; the edge is bowed by `sin(uv.x · π) · uPower`, and
uPower runs 0 → 1 → 0 across the sweep, so the mask bends out as it travels and
flattens as it lands. `fwidth` keeps that edge one pixel wide at any
resolution. `uOut` flips between the covering and revealing halves so the edge
keeps travelling the same way instead of doubling back.

Two departures from the original: GSAP's timelines are hand-rolled (the eases
are reproduced directly — note `power3` is quartic, not cubic), and the
durations are shortened from the demo's 1.25s so a navigation doesn't stall.

The mask takes its colour from whatever was clicked. Astro's
`astro:before-preparation` event carries `sourceElement`, so the handler walks
up to the card, reads its ground and feeds it to the `uColor` uniform — the
sweep carries that project's colour into its page. Leaving a project page
without a card involved (the header, "All work", the next-project link) picks
up that page's own `data-page-tint` instead, so the colour is continuous on the
way out as well as in; anything else falls back to the studio navy. The colour
is resolved through a 1×1 canvas readback, which normalises any CSS colour the
browser can parse. `uColor` is set once per navigation and deliberately not
touched between the covering and revealing halves, so the mask cannot change
hue mid-sweep.

The card's ground is what the mask samples rather than an average of the
artwork's pixels: it is the colour the card reads as at a glance, and reading
the computed background is exact and instant, where rasterising the inline SVG
would cost far more to reach the same answer.

It covers and reveals; it does not morph one page's pixels into another's,
which would mean rasterising the DOM. The canvas persists across navigations,
so the WebGL context is created once per session. It loads on idle — navigate
before it arrives and the page simply changes, as it does under reduced motion
or without WebGL.

Because the router swaps the document without re-running modules, every
client script sets up on `astro:page-load` and the barrel tears down on
`astro:before-swap`.

## The opening curtain

`Intro.astro` covers the viewport with a solid sheet on load, holds, then
draws it up and off with a bowed trailing edge — a physical sheet being lifted
rather than a slide or a fade. The mark inside leaves slightly ahead of the
sheet, and that parallax is what gives the move its depth.

It is deliberately **pure CSS**, not WebGL:

- it has to cover before first paint, so it cannot wait on the lazily loaded
  three chunk;
- with JS disabled the sheet still lifts, rather than sealing the page shut;
- only `transform` and `opacity` animate, so it stays composited and smooth on
  phones, where the travel and duration are also shortened.

`transition:persist` keeps the same element across client-side navigation. Its
animation has already finished, so the curtain plays on a real page load and
never on an in-site link. `prefers-reduced-motion` removes it entirely, and a
3-second timeout hides it as insurance if the animation never runs at all.

It currently plays on every full page load, including a refresh. To show it
only once per visit instead, gate it on a `sessionStorage` flag.

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
reveal it, and `prefers-reduced-motion` disables it — along with the barrel and
the page transition — entirely. Card artwork is decorative and hidden from
screen readers; each card is labelled by its heading.

The barrel repeats the card set to fill the curve. Those repeats are created
only in the browser, so the server still renders one link per project, and they
carry `aria-hidden` and `tabindex="-1"` — each project is met exactly once by a
screen reader or by tabbing. Tabbing to a card rotates it to the front by the
shortest way round.
