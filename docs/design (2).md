# Portfolio Design System — Digvijaysinh Rajput

**Style:** Bold & Dark · Single Scrolling Page · Terminal/Pixel-Tech Aesthetic
**Reference:** joydeeproni.com hero treatment (pure black, huge pixel-mono type, green/white split, retro illustration overlay)
**Stack:** Nuxt 3 (static generation / SSG)
**Persona:** Full Stack Developer (React/Vue/Node/TypeScript) — techy, confident, high-contrast

---

## 1. Concept

A single-page, pure-black portfolio built around one huge oversized statement line of pixel-blocky monospace type, split between terminal-green and white per line/phrase. It reads like a boot screen or terminal splash rather than a typical "hero with photo" — text *is* the hero. A small decorative illustration or icon can sit layered behind/across the text for personality, plus a thin rotated meta-text strip on the left edge (name/location, small caps) as a signature detail. Everything below the hero stays disciplined and minimal so the opening statement keeps its impact.

---

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#000000` | Page background — true black, matches reference |
| `--bg-surface` | `#0D0D0F` | Card/section surfaces, slightly lifted off pure black |
| `--bg-surface-alt` | `#161618` | Hover / raised surfaces |
| `--border` | `#232326` | Hairline borders, dividers |
| `--text-primary` | `#FFFFFF` | Headings, primary hero lines (white half of the split) |
| `--text-secondary` | `#A1A1AA` | Body copy, descriptions |
| `--text-muted` | `#5C5C60` | Labels, meta info, dates, rotated side text |
| `--accent` | `#39FF6A` | Terminal green — hero text (green half of the split), links, highlights |
| `--accent-dim` | `#1F8A45` | Accent hover/pressed state |
| `--accent-glow` | `rgba(57,255,106,0.15)` | Glow/shadow behind accent elements |

**Rule:** The hero statement alternates `--text-primary` (white) and `--accent` (green) by line or phrase — never gradient or blend them, keep the split hard-edged like the reference. Outside the hero, green drops back to being a sparing accent (max 3 uses per screen: primary CTA, active nav indicator, hover states) — not a dominant color for body content.

---

## 3. Typography

- **Hero display / pixel-mono:** `Silkscreen` or `Pixelify Sans` (Google Fonts) — the big blocky, slightly-pixelated monospace used ONLY for the hero statement line, matching the reference's boot-screen feel. Weight 400 (these fonts don't need bold, the blockiness carries the weight).
- **Headings elsewhere:** `Space Grotesk` — weight 600–700, for section titles once you're past the hero
- **Body:** `Inter` — weight 400–500
- **Code / Labels / Meta / rotated side text:** `JetBrains Mono` or `IBM Plex Mono` — role titles, tech tags, dates, nav labels, the rotated vertical text strip

```css
--font-pixel: 'Silkscreen', monospace;   /* hero statement only */
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale (desktop)

| Element | Size | Weight | Line-height |
|---|---|---|---|
| Hero statement (pixel font) | 64–96px, auto-shrinks to fit width | 400 | 1.15 |
| Section title (H2) | 40–48px | 600 | 1.1 |
| Card/project title (H3) | 22–28px | 600 | 1.2 |
| Body | 16–18px | 400 | 1.6 |
| Small / meta / mono labels / nav | 13–14px | 500 | 1.4, letter-spacing 0.02em, uppercase |
| Rotated side text (left edge) | 11–12px | 500 | uppercase, letter-spacing 0.15em |

Mobile: shrink hero pixel text to 32–40px (may need to wrap to more lines), H2 to 28–32px, body stays 16px. Rotated side text can be hidden on mobile — it's a desktop flourish.

---

## 4. Spacing & Grid

- Base unit: **8px**. Use multiples: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128
- Max content width: **1200px**, centered, with 24px side padding on mobile, 80px+ on desktop
- Section vertical padding: **120–160px** desktop, **64–80px** mobile (generous breathing room between sections is key to the "premium" feel)
- Grid: 12-column for layout planning; project cards use a 2-column grid on desktop (1-column on mobile)

---

## 5. Page Structure (single scroll)

Minimal top bar + these sections in order:

1. **Top bar (not a traditional nav — matches reference)**
   Pure black, full-width, thin bottom border. Three items spread across: left = small mono link (e.g. `GitHub` or `Resume`), center = name "Digvijaysinh Rajput" (mono, small), right = mono link (e.g. `Contact`). No logo, no hamburger — deliberately sparse.

2. **Hero — the centerpiece**
   - Full black viewport-height section
   - One big multi-line pixel-mono statement, hard-split white/green by line, e.g.:
     - `i build interfaces` (white)
     - `that ship, not just` (green)
     - `demo well.` (white, with `demo well.` in green for emphasis — vary the split per line like the reference does mid-line too)
   - A decorative layered graphic across the middle of the text: could be a small pixel-art illustration (e.g. a retro character at a terminal, a floating pixel laptop/keyboard) sized to overlap 2–3 lines of text, matching the reference's swing illustration placement
   - Rotated vertical mono text on the far left edge: `DIGVIJAYSINH RAJPUT · BANGALORE · © 2026` (rotated -90deg, small, muted gray)
   - Bottom-center of hero: single CTA in mono, e.g. `View Projects ↓` or `Preview Work`, matching reference's "Preview Work" placement
   - Optional: small floating decorative icon bottom-right (a retro/nostalgic object — could riff on dev culture: a floppy disk, an old keyboard key, a terminal cursor block — subtle personality touch like the reference's cassette player)

3. **About**
   - Short paragraph (2–3 sentences) expanding the summary — B.E. IT 2026, current internship, what he builds
   - Quick-fact row (mono style): Experience · Location · Education CPI · Open to relocate/remote

4. **Experience**
   - Timeline layout: vertical line (accent) with dot markers
   - Brainzym Pvt Ltd — Full Stack Developer Intern (Jan 2026–Present)
   - Each entry: role/company + dates (mono, muted) → tech stack tags → 3–4 bullet achievements
   - Tech stack shown as small pill/tag components: dark surface, mono font, thin accent border on hover

5. **Projects** (2-column card grid)
   - **Ticket Booking Platform** — Vue 3, TypeScript, Node/Express, MongoDB, JWT
   - **Digital Dump (E-Waste Platform)** — React, TypeScript, Mapbox
   - Card anatomy: title, one-line description, tech tags, optional GitHub/live link icons top-right, subtle border that glows accent on hover, slight lift (translateY -4px) + shadow on hover
   - Each card could have a decorative code-snippet or abstract UI mockup graphic instead of a real screenshot

6. **Skills**
   - Grouped by category (Languages / Frontend / Backend / Databases / Tools) as labeled tag clusters
   - Mono category labels (`// Languages`), tags as pill chips

7. **Education**
   - Compact single block: B.E. Information Technology, LDRP-ITR, KSV University · 2022–2026 · CPI 7.51/10

8. **Contact / Footer**
   - Big mono prompt: `still-here? --let's-talk` or similar techy CTA line
   - Email, LinkedIn, GitHub as icon-buttons (accent on hover)
   - Small footer meta: copyright, "Built with React & Tailwind" mono line

---

## 6. Components & Interaction Details

- **Buttons**
  - Primary: `--accent` fill, `--bg-primary` text, 8px radius, subtle glow shadow on hover (`box-shadow: 0 0 24px var(--accent-glow)`)
  - Secondary: transparent, 1px `--border`, text `--text-primary`, border turns accent on hover
- **Tags/Pills:** `--bg-surface` bg, `--border` outline, mono font, 4px radius, 6px/12px padding
- **Cards:** `--bg-surface` bg, 1px `--border`, 12–16px radius, transition on hover (border-color + translateY)
- **Section numbering:** small mono labels like `01`, `02` next to section titles for a structured, technical feel
- **Cursor/scroll accents (optional):** custom accent-colored cursor dot, thin scroll-progress bar at top of viewport in accent color
- **Dividers:** 1px hairline `--border`, full width between sections

## 7. Motion

- Fade-up + slight translateY(20px) on scroll-into-view for section content (stagger children ~80ms)
- Nav underline slides between active anchors
- Hover states: 150–200ms ease-out transitions only — keep it snappy, no bouncy easing (techy, not playful)
- Avoid heavy parallax; motion should feel precise, not decorative

---

## 8. Content Source (from resume — use as real copy, not lorem ipsum)

- **Name:** Digvijaysinh Rajput
- **Title:** Full Stack Developer
- **Location:** Bangalore, Karnataka, India
- **Contact:** rajputdigvijaysinh45@gmail.com · linkedin.com/in/rajput-digvijaysinh-7515b4254 · github.com/digvijay-ui
- **Summary:** Full Stack Developer and 2026 B.E. (IT) graduate, currently Full Stack Developer Intern at Brainzym Pvt. Ltd. Builds responsive interfaces and REST APIs with React, Vue.js, TypeScript, Node.js, SQL/NoSQL. Seeking full-time Full Stack/Frontend roles in Bangalore or remote.
- **Experience:** Brainzym Pvt Ltd, Full Stack Developer Intern, Jan 2026–Present — admin dashboard ownership, passcode login flow, PostgreSQL schema + CSV import, cross-functional Agile collaboration
- **Projects:** Ticket Booking Platform (AI-assisted dev, concurrency-safe seat/wallet system); Digital Dump — E-Waste Management Platform frontend (React/TS/Mapbox)
- **Skills:** TypeScript, JavaScript, SQL, Python · React, Vue 3, Next.js, Redux, Pinia, Tailwind · Node.js, Express, REST, JWT, Zod · PostgreSQL, MongoDB · Jest, Postman · Git, Docker, Vercel
- **Education:** B.E. Information Technology, LDRP-ITR (KSV University), 2022–2026, CPI 7.51/10

---

## 9. Tech Stack Recommendation for Build

- **Nuxt 3** (`nuxt generate` / SSG mode) — matches your own stack (Vue 3), fast static deploy on Vercel/Netlify, real SEO meta per section
- **Tailwind CSS** for utility styling — pairs cleanly with Nuxt
- **@vueuse/motion** or **GSAP** for the scroll-triggered fade-up animations (Vue-native alternative to Framer Motion)
- Fonts via Google Fonts / `@nuxt/fonts` module: Silkscreen (hero pixel type), Space Grotesk, Inter, JetBrains Mono
- Hero illustration: either commission/draw a small pixel-art graphic (aseprite or similar, exported as SVG/PNG) or use a simple animated CSS/SVG icon if you want to keep it code-only

## 10. Nuxt-Specific Notes

- Use `app.vue` + single `pages/index.vue` for the single-scroll page; break sections into components (`HeroSection.vue`, `ExperienceSection.vue`, etc.) for maintainability even though it's one page
- Use `useHead()` / `@nuxt/content`-free static meta for SEO (title, og:image, description) — this is where SSG pays off for a portfolio
- Use `<ClientOnly>` around any scroll-animation-heavy component if you hit SSR/hydration mismatches with animation libraries
- Deploy target: Vercel or Netlify, both have zero-config Nuxt static support
