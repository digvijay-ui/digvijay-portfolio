# Digvijaysinh Rajput — Portfolio design system

## Direction

An editorial developer portfolio: confident typography, asymmetric composition, real project imagery, clear technical contributions and quiet personal details. Black, warm white and neon green remain the identity. The opening uses a personal statement instead of a poster labelled “PORTFOLIO”.

The reference, https://akritipurbey.framer.website/, informed the hierarchy, personal tone, image-led work and recruiter Q&A. Its layouts, assets and copy are not reproduced. The hero now follows the composition of https://akashux.framer.website/ with original night artwork; see the hero specification below.

## Stack and content

Nuxt 3, Vue 3, TypeScript, existing Tailwind module and CSS. No new runtime dependencies or animation framework. `data/portfolio.ts` remains unchanged and is the source of truth for biography, roles, education, technology, project details and external destinations. Existing screenshots, social links, download, SEO metadata, structured data, sitemap and robots configuration are preserved. FAQ answers reuse facts already present in the portfolio; there are no invented achievements or availability promises.

## Tokens

Defined in `assets/css/main.css`.

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-page` | `#080908` | Near-black canvas |
| `--color-surface` | `#111310` | Restrained secondary surfaces |
| `--color-surface-alt` | `#191c18` | Raised surfaces |
| `--color-border` | `#30332f` | Fine rules and structure |
| `--color-text-primary` | `#f5f5ef` | Warm white headings and primary copy |
| `--color-text-secondary` | `#b0b3aa` | Body copy |
| `--color-text-muted` | `#969c91` | Readable metadata |
| `--color-accent` | `#b6ff4a` | Neon green, actions and selective emphasis |

Use green on key actions, status, section numbers and hover feedback. Below the hero, keep solid surfaces and restrained accents. The hero alone uses blurred navigation, atmospheric shading and a subtle terminal glow. The developer fragment uses a faint 22px grid; project surrounds use solid muted green and pale neutral tones. Spacing establishes hierarchy; decorative section and row dividers have been removed.

## Typography

- **Space Grotesk 600/700:** headings, signature and project numbers. Tight tracking, approximately −0.035em for shared headings.
- **Inter 400/500:** readable body and controls, generally 14–20px with 1.55–1.75 line height.
- **JetBrains Mono:** restrained labels, technology tags and technical metadata, approximately 10–12px.
- **Georgia regular/italic:** editorial hero statement; the role is italic neon green.
- Hero: fluid 46–96px desktop, 39–66px mobile. H2: 36–60px. Project H3: 24–48px.
- Existing Google Fonts stylesheet uses `display=swap`; fallbacks remain usable.

## Layout

Content width: 1320px. Gutters: `clamp(22px, 5vw, 88px)`. Section spacing: `clamp(80px, 10vw, 150px)`.

1. **Header:** floating sticky off-white rounded bar, DIGVIJAY* brand, About/Work/Resume links and a dark Contact me button. Mobile menu at 760px and below retains Escape dismissal, focus cycling and scroll locking.
2. **Hero:** full-viewport night environment, upper-left serif statement and supporting copy, original lower-right terminal laptop and centered scroll anchor. See the hero specification below.
3. **About:** asymmetric heading and editorial biography, followed by two-column quick facts.
4. **Experience:** a muted section with open spacing, company identity, dates, technologies and all existing achievements.
5. **Projects:** large numbered case studies. Each has a real screenshot in a browser-like frame, original description and impact, contribution list, technologies and live/GitHub actions. Alternating solid image surrounds establish rhythm.
6. **Skills:** category filters and structured rows, sourced from the existing skill groups. The default shows every category. Filters use native buttons and `aria-pressed`.
7. **Education:** compact academic record, preserving institution, location, period and CGPA.
8. **Recruiter FAQ:** native `details` / `summary` disclosures; answers are derived from existing biography and work history.
9. **Contact:** large invitation, directional arrow, original email/social links and location.
10. **Footer:** oversized “DIGVIJAY”. Individual letters respond to cursor proximity with small lifts and green/white changes. Copyright and back-to-top remain.

At 1050px, supporting columns tighten and skills become a single column. At 760px, editorial columns stack and the hero fragment becomes a compact side note. Mobile retains readable text, image proportions and generous touch targets. No content depends on a hover interaction.

## Motion

`composables/usePortfolioMotion.ts` provides optional enhancements, cleaned up on unmount and reconfigured when the motion preference changes.

- Hero intro: a short optional black/green letter sequence, once per browser tab; skipped for reduced motion. No decorative intro rule.
- Hero masking: 900ms entrance, 100ms line offsets, using transforms inside overflow masks.
- Section reveals: 22px vertical offset, 700ms, triggered once by IntersectionObserver. Content is visible before JavaScript; only offscreen targets are hidden after enhancement initializes. Keyboard focus reveals a pending target immediately.
- Single-page transitions: native smooth anchor scrolling and section entrances; there are no additional page routes to animate.
- Magnetic controls: small pointer offsets, only for a fine pointer, reset on leave, blur, scrolling or pointer changes.
- Project images: 1.025 scale on hover over 650ms, inside the existing media container.
- Footer: existing animation-frame proximity behavior retained, with approximately 7px maximum lift. It pauses offscreen and when the tab is hidden.
- Native cursor remains visible. Cursor interactions are local to controls, the fragment and the signature.
- Reduced motion: no intro, masking, smooth scrolling, reveals, image transforms or magnetic movement. Footer letters remain still. Preferences are respected on load and when changed during a session.

## Accessibility, SEO and performance

- One visible H1; correctly linked section headings; semantic lists, figures, navigation, buttons and disclosures.
- Skip link, visible green focus outlines, 44px primary touch targets, keyboard-usable mobile navigation and FAQs.
- Links preserve their destinations and download/new-tab behavior; external new-tab links use `noopener noreferrer`.
- Real image alt text and explicit dimensions; below-fold screenshots load lazily with asynchronous decoding.
- Content renders on the server. Core reading, anchor links, FAQs and downloads work without JavaScript; no-script mobile navigation remains available.
- No new network assets or runtime packages; no continuous global cursor loop or scroll hijacking.
- Canonical URL, social metadata, Person structured data, sitemap and robots settings are unchanged.

## Implementation map

- `assets/css/main.css`: tokens, shared editorial layout, responsive rules and core motion.
- `components/sections/*`: existing content sections and recruiter FAQ.
- `components/projects/ProjectShowcase.vue`: case-study presentation.
- `components/layout/SiteHeader.vue`: existing navigation behavior and responsive header.
- `components/layout/FooterName.vue`: letter interaction, using the shared green token.
- `composables/usePortfolioMotion.ts`: reveal and magnetic interaction lifecycle.

The legacy design document at `docs/design (2).md` points to this finalized system.

## Validation

- `npm run typecheck`, `npm run build` and `npm run generate` passed; static generation produced eight routes, including the homepage, sitemap and robots file.
- Chromium checks passed at 1440, 1024, 768, 390 and 320px with no horizontal overflow or browser errors.
- Verified skill filtering, native FAQ keyboard behavior, mobile navigation and focus cycling, anchor targets, heading associations and resume response.
- Verified no-JavaScript navigation/FAQ, reduced-motion rendering, live preference changes, magnetic controls and footer letter proximity.
- Existing package/lock files, Nuxt configuration, portfolio data, types and deployment configuration are unchanged.


## Night hero — September 2026

Scope: hero and its requested shared navigation only. All below-fold content, section colors, data, SEO and project imagery are retained. Earlier validation above describes the previous design, not this revision.

- `assets/css/hero.css` owns the hero and navbar overrides. Shared accent remains `#b6ff4a`; hero-local `--hero-green` is `#39FF6A`. Canvas is black/deep charcoal with dark forest greens and white copy. Navbar uses a slightly transparent off-white surface with backdrop blur, dark controls and a darker green focus outline for contrast.
- `HeroWorld.vue` is an original inline SVG pixel illustration: deterministic stars, faint dot grid, moon, distant city, stepped forest silhouettes, cedar canopy, textured ground, laptop terminal, keyboard, mug and notebook. No copied reference artwork, image downloads, canvas loop or additional dependencies. Decorative artwork is hidden from assistive technology.
- Hero uses `100svh`, with minimum height only for short screens to preserve readable content. Georgia is reused for 38–72px desktop serif type, 31–49px mobile; role italic green. Inter supporting copy is 14–17px. Exact user-provided introduction and product description are retained.
- Navbar sticks 18px from the top (12px mobile), within a 960px rounded surface. About targets `#about`, Work targets `#projects`, Resume opens the existing PDF, Contact targets `#contact`. Mobile navigation keeps the existing keyboard and dismissal behavior.
- Intro shows FULL STACK DEVELOPER, then staggered DIGVIJAY letters, revealing the hero after 1.9 seconds. It does not block input, takes no keyboard focus, and is skipped on subsequent visits in the same tab. Core server-rendered content is always available. Reduced motion removes the intro immediately, including live preference changes.
- Existing CSS/Vue motion handles 900ms staggered copy entrances, navigation entrance, restrained 12px/8px pointer depth, a slow terminal glow and a blinking cursor. Parallax is event-driven, frame-throttled, fine-mouse only and cleaned up on unmount. Mobile simplifies the composition and masks background detail behind text. No decorative section lines are reintroduced.
- Implementation: `HeroSection.vue`, `HeroWorld.vue`, `SiteHeader.vue`, `assets/css/hero.css`, and the CSS registration in `nuxt.config.ts`.

### Revision validation

Type checking passed. Chrome visual and overflow checks passed at 1440×900, 1024×768, 768×1024, 390×844 and 320×740. Portrait tablet framing and 320px copy/illustration clearance were adjusted after visual inspection. No browser page errors. Verified mobile menu visibility, Tab cycling through Contact back to the toggle, Escape focus restoration, sticky 12px mobile positioning, initial/live reduced-motion behavior, and usable no-JavaScript mobile navigation without overflow. Production build passed.
