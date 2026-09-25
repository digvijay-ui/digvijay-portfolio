# Digvijaysinh Rajput — Portfolio design system

## Direction

An editorial developer portfolio: confident typography, asymmetric composition, real project imagery, clear technical contributions and quiet personal details. Black, warm white and neon green remain the identity. The opening uses a personal statement instead of a poster labelled “PORTFOLIO”.

The reference, https://akritipurbey.framer.website/, informed the hierarchy, personal tone, image-led work and recruiter Q&A. Its layouts, assets and copy are not reproduced. The hero now follows the composition of https://akashux.framer.website/ with original night artwork; see the hero specification below.

## Stack and content

Nuxt 3, Vue 3, TypeScript, existing Tailwind module and CSS. No new runtime dependencies or animation framework. `data/portfolio.ts` remains unchanged and is the source of truth for biography, roles, education, technology, project details and external destinations. Existing screenshots, social links, download, SEO metadata, structured data, sitemap and robots configuration are preserved. FAQ answers reuse facts already present in the portfolio; there are no invented achievements or availability promises.

## Tokens

Defined in `assets/css/tokens.css` and consumed by the shared styles in
`assets/css/main.css` and `assets/css/hero.css`.

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-ink` | `#090b0a` | Near-black canvas |
| `--color-ivory` | `#f4f1e8` | Warm primary copy |
| `--color-lime` | `#b6ff4a` | Primary actions and selective emphasis |
| `--color-blue` | `#aac4ff` | Secondary links and project signals |
| `--color-moss` | `#7f8f70` | Muted technical accents |
| `--color-border` | `rgb(244 241 232 / 13%)` | Fine rules and structure |

Use lime on key actions, status, section numbers and hover feedback. Soft blue
supports secondary links while moss carries low-priority technical detail. A
low-opacity 72px technical grid and static SVG grain unify the page; both stay
subtle enough to preserve text contrast. Project surrounds use solid muted
green and pale neutral tones, with spacing and fine borders establishing the
hierarchy.

## Typography

- **Space Grotesk 600/700:** headings, signature and project numbers. Tight tracking, approximately −0.035em for shared headings.
- **Inter 400/500:** readable body and controls, generally 14–20px with 1.55–1.75 line height.
- **JetBrains Mono:** restrained labels, technology tags and technical metadata, approximately 10–12px.
- **Georgia regular/italic:** editorial hero statement; the role is italic neon green.
- Hero: fluid 38–72px desktop, 31–49px mobile. H2: 36–64px. Project H3: 32–52px.
- Existing Google Fonts stylesheet uses `display=swap`; fallbacks remain usable.

## Layout

Content width: 1260px. Gutters: `clamp(1.25rem, 4.5vw, 5.5rem)`. Section spacing: `clamp(5.5rem, 8vw, 9.5rem)`.

1. **Header:** floating sticky off-white rounded bar, DIGVIJAY* brand, About/Work/Resume links and a dark Contact me button. A single sliding underline follows the active page region, while a two-pixel lime progress bar shows document position. Mobile uses a compact two-column menu at 760px and below with Escape dismissal, focus cycling, first-link focus and scroll locking.
2. **Hero:** full-viewport night environment, upper-left serif statement and supporting copy, original lower-right terminal laptop and centered scroll anchor. See the hero specification below.
3. **About:** a 12-column asymmetric editorial composition pairs the section heading with a concise developer statement, short biography, code-native delivery-system diagram and four animated facts covering location, education, specialization and shipped project experience.
4. **Experience:** a sticky editorial introduction leads into the verified current Brainzym role. Company details, grouped production technologies and five concise ownership milestones form a scroll-driven timeline instead of a long achievement list.
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
- Hero masking: the same 720ms entrance curve as section reveals, using short staggered line offsets inside overflow masks.
- Section reveals: one shared 720ms ease, 20px vertical offset and restrained 70ms sibling stagger, triggered once by IntersectionObserver. Content is visible before JavaScript; only offscreen targets are hidden after enhancement initializes. Keyboard focus reveals a pending target immediately.
- Single-page transitions: native smooth anchor scrolling and section entrances; there are no additional page routes to animate.
- Navigation tracking: a frame-throttled scroll measurement maps About and Experience to About, Projects through FAQ to Work, and the page end to Contact. The underline measures the active control after font loading and responsive layout changes.
- Experience timeline: a frame-throttled section measurement drives the chapter rail and responsibility line while native document scrolling remains untouched. Responsibility milestones use the same reveal curve as the rest of the page.
- Magnetic controls: small pointer offsets on the desktop brand and navigation controls, only for a fine mouse pointer, reset on leave, cancellation, blur, scrolling or pointer changes.
- Project images: 1.025 scale on hover over 650ms, inside the existing media container.
- Footer: existing animation-frame proximity behavior retained, with approximately 7px maximum lift. It pauses offscreen and when the tab is hidden.
- Custom cursor: fine-pointer desktops receive a 6px lime point and softly lagged 30px ring. The ring expands over interactive elements; labels are limited to VIEW on project media and OPEN on each project launch control. It initializes only after a real mouse movement, uses no perpetual animation loop and is never enabled for touch input.
- Reduced motion: no intro, masking, smooth scrolling, reveals, image transforms, magnetic movement or custom cursor. Footer letters remain still. Preferences are respected on load and when changed during a session.

## Accessibility, SEO and performance

- One visible H1; correctly linked section headings; semantic lists, figures, navigation, buttons and disclosures.
- Skip link, visible green focus outlines, 44px primary touch targets, `aria-current` navigation state, keyboard-usable mobile navigation and FAQs.
- Links preserve their destinations and download/new-tab behavior; external new-tab links use `noopener noreferrer`.
- Real image alt text and explicit dimensions; below-fold screenshots load lazily with asynchronous decoding.
- Content renders on the server. Core reading, anchor links, FAQs and downloads work without JavaScript; no-script mobile navigation remains available.
- No new network assets or runtime packages; no continuous global cursor loop or scroll hijacking.
- Canonical URL, social metadata, Person structured data, sitemap and robots settings are unchanged.

## Implementation map

- `assets/css/tokens.css`: palette, typography, spacing, layout, radius, control and focus tokens.
- `assets/css/main.css`: shared editorial layout, global texture, responsive rules and core motion.
- `assets/css/story.css`: Phase 4 About composition, system diagram, fact grid, sticky Experience chapter and responsive timeline.
- `components/sections/*`: existing content sections and recruiter FAQ.
- `components/sections/AboutSection.vue`: developer statement, delivery-system graphic and animated fact structure.
- `components/sections/ExperienceSection.vue`: reduced-motion-aware timeline progress lifecycle.
- `components/experience/ExperienceCard.vue`: company record, grouped stack and ownership milestones.
- `components/projects/ProjectShowcase.vue`: case-study presentation.
- `components/layout/SiteHeader.vue`: active-section tracking, sliding indicator, scroll progress and accessible compact navigation.
- `components/ui/CustomCursor.vue`: pointer-capability-aware cursor, interaction states and contextual labels.
- `components/layout/FooterName.vue`: letter interaction, using the shared green token.
- `composables/usePortfolioMotion.ts`: unified reveal sequence and magnetic interaction lifecycle.

The legacy design document at `docs/design (2).md` points to this finalized system.

## Validation

- `npm run typecheck`, `npm run build` and `npm run generate` passed; static generation produced eight routes, including the homepage, sitemap and robots file.
- Chromium checks passed at 1440, 1024, 768, 390 and 320px with no horizontal overflow or browser errors.
- Verified skill filtering, native FAQ keyboard behavior, mobile navigation and focus cycling, anchor targets, heading associations and resume response.
- Verified active-section mapping, indicator position, progress completion, compact mobile layout, first-link focus, focus cycling, Escape restoration, touch cursor suppression and reduced-motion rendering.
- Phase 4 checks passed at 1440×1000 and 390×844 with no horizontal overflow or browser errors. Verified the 12-column/one-column About layouts, system diagram geometry, four-column/single-column facts, sticky/static Experience headings, progressive timeline state and complete reduced-motion rendering.
- Existing package/lock files and deployment configuration are unchanged. Portfolio data and types now model the About statement, grouped production stack and concise responsibility records; Nuxt configuration registers the token and story style layers around the existing stylesheets.

## About and Experience story — September 2026

- Employment copy now reflects the confirmed current position, **Associate Full Stack Developer (Full-time) at Brainzym Private Ltd**. Only the current full-time role is displayed; no unprovided employment date or additional responsibility was added.
- The About statement condenses verified work already present in the resume: responsive interfaces, REST APIs, database-backed workflows and production delivery. It introduces no new title, metric or availability claim.
- The diagram is HTML and inline SVG only. It maps the existing interface, API and data technologies without network assets, canvas work or continuous animation.
- Experience responsibilities were shortened into five evidence-based ownership areas: production feature delivery, admin dashboard ownership, student access, reliability work and collaboration with the tech lead and product owner. No unsupported counts or performance percentages were added.
- Desktop keeps the About and Experience compositions asymmetric and allows the Experience introduction to remain sticky. Tablet collapses technology groups into a horizontal overview; mobile stacks all content, turns the facts into a readable single column below 420px and disables sticky positioning.

## Night hero — September 2026

Scope: hero and its requested shared navigation only. All below-fold content, section colors, data, SEO and project imagery are retained. Earlier validation above describes the previous design, not this revision.

- `assets/css/hero.css` owns the hero and navbar overrides. Hero-local `--hero-green` aliases the shared electric-lime token. Canvas is black/deep charcoal with dark forest greens and warm-ivory copy. Navbar uses a slightly transparent ivory surface with backdrop blur, dark controls and a darker green focus outline for contrast.
- `HeroWorld.vue` is an original inline SVG pixel illustration: deterministic stars, faint dot grid, moon, distant city, stepped forest silhouettes, cedar canopy, textured ground, laptop terminal, keyboard, mug and notebook. No copied reference artwork, image downloads, canvas loop or additional dependencies. Decorative artwork is hidden from assistive technology.
- Hero uses `100svh`, with minimum height only for short screens to preserve readable content. Georgia is reused for 38–72px desktop serif type, 31–49px mobile; role italic green. Inter supporting copy is 14–17px. Exact user-provided introduction and product description are retained.
- Navbar sticks 18px from the top (12px mobile), within a 960px rounded surface. About targets `#about`, Work targets `#projects`, Resume opens the existing PDF, Contact targets `#contact`. Mobile navigation keeps the existing keyboard and dismissal behavior.
- Intro shows FULL STACK DEVELOPER, then staggered DIGVIJAY letters, revealing the hero after 1.9 seconds. It does not block input, takes no keyboard focus, and is skipped on subsequent visits in the same tab. Core server-rendered content is always available. Reduced motion removes the intro immediately, including live preference changes.
- Existing CSS/Vue motion handles 900ms staggered copy entrances, navigation entrance, restrained 12px/8px pointer depth, a slow terminal glow and a blinking cursor. Parallax is event-driven, frame-throttled, fine-mouse only and cleaned up on unmount. Mobile simplifies the composition and masks background detail behind text. No decorative section lines are reintroduced.
- Implementation: `HeroSection.vue`, `HeroWorld.vue`, `SiteHeader.vue`, `assets/css/hero.css`, and the CSS registration in `nuxt.config.ts`.

### Revision validation

Type checking passed. Chrome visual and overflow checks passed at 1440×900, 1024×768, 768×1024, 390×844 and 320×740. Portrait tablet framing and 320px copy/illustration clearance were adjusted after visual inspection. No browser page errors. Verified mobile menu visibility, Tab cycling through Contact back to the toggle, Escape focus restoration, sticky 12px mobile positioning, initial/live reduced-motion behavior, and usable no-JavaScript mobile navigation without overflow. Production build passed.
