<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'

const hero = shallowRef<HTMLElement | null>(null)
let dispose = () => {}

onMounted(() => {
  const element = hero.value!
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  let stopMotion = () => {}

  const configureMotion = () => {
    stopMotion()
    if (reducedMotion.matches) return

    const controller = new AbortController()
    const options = { passive: true, signal: controller.signal }
    let frame = 0
    let visible = false
    let geometryDirty = true
    let bounds = element.getBoundingClientRect()
    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let previousTime = 0

    const render = (time: number) => {
      frame = 0
      if (!visible || document.hidden) return
      if (geometryDirty) {
        bounds = element.getBoundingClientRect()
        geometryDirty = false
        // Keep the opening stable; fade only as the section moves past the top.
        const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height))
        element.style.setProperty('--hero-exit-opacity', String(1 - progress * 0.8))
        element.style.setProperty('--hero-exit-y', `${-progress * 28}px`)
        element.style.setProperty('--hero-depth-y', `${progress * 10}px`)
      }
      const delta = previousTime ? Math.min(time - previousTime, 64) : 16.67
      previousTime = time
      const blend = 1 - Math.exp(-delta / 150)
      x += (targetX - x) * blend
      y += (targetY - y) * blend
      const unsettled = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.01
      if (!unsettled) { x = targetX; y = targetY }
      element.style.setProperty('--hero-pointer-x', `${x.toFixed(3)}px`)
      element.style.setProperty('--hero-pointer-y', `${y.toFixed(3)}px`)
      if (unsettled) schedule()
    }
    const schedule = () => {
      if (!frame && visible && !document.hidden) frame = requestAnimationFrame(render)
    }
    const refresh = () => { geometryDirty = true; schedule() }
    const resetPointer = () => { targetX = 0; targetY = 0; schedule() }
    const updateActivity = () => {
      element.dataset.motionActive = String(visible && !document.hidden)
      if (!visible || document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
        previousTime = 0
        targetX = 0
        targetY = 0
      } else refresh()
    }

    element.addEventListener('pointermove', (event) => {
      if (!finePointer.matches || event.pointerType !== 'mouse') return
      targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1)) * 3
      targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1)) * 2
      schedule()
    }, options)
    element.addEventListener('pointerleave', resetPointer, options)
    window.addEventListener('blur', resetPointer, options)
    finePointer.addEventListener('change', resetPointer, options)
    window.addEventListener('scroll', refresh, options)
    window.addEventListener('resize', refresh, options)
    document.addEventListener('visibilitychange', updateActivity, options)
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      updateActivity()
    })
    observer.observe(element)
    const resizeObserver = new ResizeObserver(refresh)
    resizeObserver.observe(element)

    stopMotion = () => {
      controller.abort()
      observer.disconnect()
      resizeObserver.disconnect()
      cancelAnimationFrame(frame)
      delete element.dataset.motionActive
      for (const property of ['exit-opacity', 'exit-y', 'depth-y', 'pointer-x', 'pointer-y']) {
        element.style.removeProperty(`--hero-${property}`)
      }
    }
  }

  configureMotion()
  reducedMotion.addEventListener('change', configureMotion)
  dispose = () => {
    reducedMotion.removeEventListener('change', configureMotion)
    stopMotion()
  }
})

onBeforeUnmount(() => dispose())
</script>

<template>
  <section ref="hero" id="home" class="hero-section" aria-labelledby="hero-title">
    <h1 id="hero-title" class="sr-only">
      Digvijaysinh Rajput — Full Stack Developer
    </h1>

    <div class="hero-artwork">
      <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet" role="img" class="hero-image" aria-labelledby="hero-art-title hero-art-desc">
        <title id="hero-art-title">Digvijaysinh Rajput Portfolio 2026</title>
        <desc id="hero-art-desc">Black and neon green retro-futuristic portfolio hero banner with a cartoon boy wearing glasses.</desc>
        <defs>
          <linearGradient id="titleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#c9ff72"/>
            <stop offset="0.55" stop-color="#9df443"/>
            <stop offset="1" stop-color="#486d2b"/>
          </linearGradient>
          <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#182115"/>
            <stop offset="0.55" stop-color="#0b100b"/>
            <stop offset="1" stop-color="#1c2b16"/>
          </linearGradient>
          <radialGradient id="skinGrad" cx="50%" cy="35%" r="75%">
            <stop offset="0" stop-color="#d8ef9f"/>
            <stop offset="1" stop-color="#6b8e3d"/>
          </radialGradient>
          <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="#97d941" stroke-opacity="0.07" stroke-width="1"/>
          </pattern>
          <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="1.5" fill="#b6ff4a" fill-opacity="0.18"/>
          </pattern>
          <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity="0.7"/>
          </filter>
          <clipPath id="capsuleClip">
            <rect x="300" y="430" width="1000" height="270" rx="135"/>
          </clipPath>
        </defs>

        <!-- Background -->
        <rect width="1600" height="900" fill="#050805"/>
        <g class="hero-grid"><rect width="1600" height="900" fill="url(#grid)"/></g>

        <!-- Top labels -->
        <g fill="#b6ff4a" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="24" letter-spacing="2">
          <text class="hero-boot hero-boot--one" x="64" y="76" text-anchor="start">/WEB DEVELOPER/</text>
          <text class="hero-boot hero-boot--two" x="800" y="76" text-anchor="middle">/FULL STACK/</text>
          <text class="hero-boot hero-boot--three" x="1536" y="76" text-anchor="end">/DIGVIJAYSINH RAJPUT/</text>
        </g>

        <!-- Year and main title -->
        <text class="hero-reveal hero-reveal--year" x="238" y="192" fill="#b6ff4a" font-family="ui-monospace, monospace" font-size="40" letter-spacing="3">/2026/</text>
        <text class="hero-reveal hero-reveal--title" x="205" y="385" fill="url(#titleGrad)" font-family="Georgia, 'Times New Roman', serif" font-size="205" font-weight="700" letter-spacing="-16">PORTFOLIO</text>

        <!-- Decorative star -->
        <g class="hero-star-depth"><g class="hero-accent">
        <g transform="translate(1170 155)" fill="#b6ff4a" filter="url(#softGlow)">
          <path d="M0-50C4-17 17-4 50 0C17 4 4 17 0 50C-4 17-17 4-50 0C-17-4-4-17 0-50Z"/>
          <circle cx="0" cy="0" r="4" fill="#050805"/>
        </g>

        </g></g>

        <!-- Halftone side textures -->
        <rect x="165" y="500" width="165" height="170" fill="url(#dots)" opacity="0.6"/>
        <rect x="1270" y="500" width="165" height="170" fill="url(#dots)" opacity="0.6"/>

        <!-- Main capsule -->
        <g class="hero-mascot-depth"><g class="hero-reveal hero-reveal--mascot">
        <rect x="300" y="430" width="1000" height="270" rx="135" fill="url(#panelGrad)" stroke="#b6ff4a" stroke-width="3" filter="url(#shadow)"/>
        <g clip-path="url(#capsuleClip)">
          <path d="M300 655C520 520 1080 520 1300 655V730H300Z" fill="#111a0f" opacity="0.9"/>
          <path d="M220 650C500 560 1100 560 1380 650" fill="none" stroke="#b6ff4a" stroke-opacity="0.15" stroke-width="30"/>

          <!-- Boy hair -->
          <path d="M540 480C585 420 650 410 708 430C760 390 850 400 900 438C965 408 1045 445 1074 500C1100 548 1082 605 1050 640H552C505 590 500 525 540 480Z" fill="#080b08" stroke="#b6ff4a" stroke-width="3"/>
          <path d="M565 487C610 435 663 432 720 454C749 422 807 414 850 436C887 411 948 425 980 460C1020 451 1057 471 1075 507C1025 490 980 515 943 545C900 515 867 497 821 500C775 475 731 480 696 518C650 490 608 490 565 520Z" fill="#111811"/>

          <!-- Face -->
          <ellipse cx="806" cy="592" rx="250" ry="205" fill="url(#skinGrad)" stroke="#b6ff4a" stroke-width="3"/>
          <path d="M588 535C626 495 665 475 710 464C738 490 775 500 813 495C850 510 890 503 928 480C961 493 990 511 1026 542V520C965 435 650 435 588 520Z" fill="#080b08"/>

          <!-- Ears -->
          <ellipse cx="566" cy="588" rx="38" ry="58" fill="#779c46" stroke="#0b0f0a" stroke-width="7"/>
          <ellipse cx="1046" cy="588" rx="38" ry="58" fill="#779c46" stroke="#0b0f0a" stroke-width="7"/>

          <!-- Glasses -->
          <g fill="#050805" stroke="#b6ff4a" stroke-width="5">
            <rect x="598" y="530" width="190" height="112" rx="46"/>
            <rect x="824" y="530" width="190" height="112" rx="46"/>
            <path d="M788 567C801 557 813 557 824 567" fill="none" stroke-width="14"/>
            <path d="M598 565L565 550M1014 565L1048 550" fill="none" stroke-width="13"/>
          </g>

          <!-- Eyes -->
          <g fill="#dfffad" stroke="#0a0d09" stroke-width="5">
            <ellipse cx="694" cy="586" rx="48" ry="42"/>
            <ellipse cx="919" cy="586" rx="48" ry="42"/>
          </g>
          <g fill="#050805">
            <circle cx="700" cy="589" r="18"/>
            <circle cx="913" cy="589" r="18"/>
          </g>
          <g fill="#b6ff4a" filter="url(#softGlow)">
            <path d="M700 560C702 578 710 586 728 589C710 592 702 600 700 618C697 600 689 592 671 589C689 586 697 578 700 560Z"/>
            <path d="M913 560C916 578 924 586 942 589C924 592 916 600 913 618C910 600 902 592 884 589C902 586 910 578 913 560Z"/>
          </g>

          <!-- Brows, nose, mouth -->
          <path d="M645 520C675 500 719 499 752 515M862 515C896 498 938 500 969 520" fill="none" stroke="#090c08" stroke-width="16" stroke-linecap="round"/>
          <path d="M806 589L792 617L814 617" fill="none" stroke="#26351e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="806" cy="652" rx="15" ry="9" fill="#050805"/>

          <!-- Hands -->
          <g fill="#769d45" stroke="#080b08" stroke-width="6">
            <path d="M456 669C470 626 509 624 526 655C542 620 585 626 594 659C611 624 651 635 654 671V704H456Z"/>
            <path d="M958 671C962 635 1002 624 1018 659C1028 626 1070 620 1087 655C1103 624 1144 626 1157 669V704H958Z"/>
          </g>
        </g>

        </g></g>

        <!-- Floating code cubes -->
        <g class="hero-code-depth"><g class="hero-reveal hero-reveal--code">
        <g filter="url(#shadow)" font-family="Arial, sans-serif" font-weight="700" text-anchor="middle">
          <g transform="translate(285 595) rotate(-14)">
            <rect x="-72" y="-62" width="144" height="124" rx="18" fill="#0a0f09" stroke="#b6ff4a" stroke-width="3"/>
            <path d="M-72-62L0-92L72-62L0-30Z" fill="#111a0f" stroke="#b6ff4a" stroke-width="3"/>
            <path d="M72-62L92-48V45L72 62Z" fill="#0f170e" stroke="#b6ff4a" stroke-width="3"/>
            <text x="0" y="24" fill="#b6ff4a" font-size="54">TS</text>
          </g>
          <g transform="translate(1310 560) rotate(12)">
            <rect x="-72" y="-62" width="144" height="124" rx="18" fill="#0a0f09" stroke="#b6ff4a" stroke-width="3"/>
            <path d="M-72-62L0-92L72-62L0-30Z" fill="#111a0f" stroke="#b6ff4a" stroke-width="3"/>
            <path d="M72-62L92-48V45L72 62Z" fill="#0f170e" stroke="#b6ff4a" stroke-width="3"/>
            <text x="0" y="24" fill="#b6ff4a" font-size="48">Vue</text>
          </g>
          <g transform="translate(430 485) rotate(-8)">
            <rect x="-43" y="-39" width="86" height="78" rx="12" fill="#0a0f09" stroke="#b6ff4a" stroke-width="2.5"/>
            <text x="0" y="12" fill="#b6ff4a" font-size="30">JS</text>
          </g>
          <g transform="translate(1175 590) rotate(8)">
            <rect x="-43" y="-39" width="86" height="78" rx="12" fill="#0a0f09" stroke="#b6ff4a" stroke-width="2.5"/>
            <text x="0" y="12" fill="#b6ff4a" font-size="24">Node</text>
          </g>
          <g transform="translate(188 462) rotate(12)">
            <rect x="-46" y="-39" width="92" height="78" rx="12" fill="#0a0f09" stroke="#b6ff4a" stroke-width="2.5"/>
            <path d="M-46-39L0-58L46-39L0-20Z" fill="#111a0f" stroke="#b6ff4a" stroke-width="2.5"/>
            <path d="M46-39L58-31V31L46 39Z" fill="#0f170e" stroke="#b6ff4a" stroke-width="2.5"/>
            <text x="0" y="12" fill="#b6ff4a" font-size="24">React</text>
          </g>
          <g transform="translate(1412 462) rotate(-12)">
            <rect x="-46" y="-39" width="92" height="78" rx="12" fill="#0a0f09" stroke="#b6ff4a" stroke-width="2.5"/>
            <path d="M-46-39L0-58L46-39L0-20Z" fill="#111a0f" stroke="#b6ff4a" stroke-width="2.5"/>
            <path d="M46-39L58-31V31L46 39Z" fill="#0f170e" stroke="#b6ff4a" stroke-width="2.5"/>
            <text x="0" y="12" fill="#b6ff4a" font-size="28">API</text>
          </g>
          <g transform="translate(402 682) rotate(9)">
            <rect x="-43" y="-39" width="86" height="78" rx="12" fill="#0a0f09" stroke="#b6ff4a" stroke-width="2.5"/>
            <text x="0" y="12" fill="#b6ff4a" font-size="30">DB</text>
          </g>
          <g transform="translate(1198 688) rotate(-10)">
            <rect x="-43" y="-39" width="86" height="78" rx="12" fill="#0a0f09" stroke="#b6ff4a" stroke-width="2.5"/>
            <text x="0" y="12" fill="#b6ff4a" font-size="30">Git</text>
          </g>
        </g>

        </g></g>

        <!-- Welcome and footer -->
        <text class="hero-reveal hero-reveal--footer" x="800" y="770" text-anchor="middle" fill="#b6ff4a" font-family="ui-monospace, monospace" font-size="34" letter-spacing="13">/WELCOME/</text>
        <text class="hero-reveal hero-reveal--footer" x="64" y="832" text-anchor="start" fill="#d9e7d0" font-family="Arial, sans-serif" font-size="18" letter-spacing="1">github.com/digvijay-ui</text>
        <text class="hero-reveal hero-reveal--footer" x="1536" y="832" text-anchor="end" fill="#d9e7d0" font-family="Arial, sans-serif" font-size="18" letter-spacing="1">BANGALORE · INDIA</text>

        <!-- Accent marks -->
        <g class="hero-boot hero-boot--marks" fill="#b6ff4a">
          <path d="M752 824h18l-20 24h-18zM779 824h18l-20 24h-18zM806 824h18l-20 24h-18zM833 824h18l-20 24h-18z"/>
        </g>
      </svg>
      <a
        href="https://github.com/digvijay-ui"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-hotspot hero-hotspot--github"
        aria-label="Open Digvijaysinh Rajput's GitHub profile in a new tab"
      >
        <span class="sr-only">GitHub profile</span>
      </a>
    </div>

    <div class="hero-mobile-copy">
      <p class="hero-mobile-name">Digvijaysinh Rajput</p>
      <p class="hero-mobile-stack">Vue · React · TypeScript · Node.js</p>
      <a
        href="https://github.com/digvijay-ui"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-mobile-link"
        aria-label="Open Digvijaysinh Rajput's GitHub profile in a new tab"
      >
        GitHub ↗
      </a>
    </div>

    <div class="hero-actions">
      <a
        href="/resume.pdf"
        download
        class="hero-cta hero-cta--secondary"
        aria-label="Download Digvijaysinh Rajput's resume PDF"
      >
        <svg
          class="hero-cta__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        Download Resume
      </a>
      <a href="#about" class="hero-cta">
        Explore portfolio
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  min-height: 100svh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: var(--color-hero);
  padding: clamp(24px, 4vw, 64px);
}

.hero-artwork {
  position: relative;
  width: min(100%, var(--artwork-width));
  max-width: var(--artwork-width);
  aspect-ratio: 1600 / 900;

}

.hero-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.hero-hotspot {
  position: absolute;
  z-index: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
}

.hero-hotspot:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.hero-hotspot--github {
  left: 4.2%;
  bottom: 5%;
  width: 18%;
  height: 5.5%;
}

.hero-mobile-copy {
  display: none;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: transparent;
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1;
  min-height: 44px;
  padding: 10px 14px;
  text-decoration: none;
  transition:
    border-color 170ms ease-out,
    box-shadow 170ms ease-out,
    color 170ms ease-out;
}

.hero-cta:hover {
  border-color: var(--color-accent);
  box-shadow: 0 0 24px var(--color-accent-glow);
  color: var(--color-text-primary);
}

.hero-cta__icon {
  width: 0.875rem;
  height: 0.875rem;
  flex: 0 0 auto;
}

.hero-cta--secondary {
  color: var(--color-text-primary);
}

.hero-cta--secondary:hover {
  color: var(--color-accent);
}

/* Animate existing layers only. Transforms and opacity keep the motion inexpensive. */
.hero-section {
  --hero-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (prefers-reduced-motion: no-preference) {
  .hero-artwork,
  .hero-mobile-copy,
  .hero-actions {
    opacity: var(--hero-exit-opacity, 1);
    transform: translate3d(0, var(--hero-exit-y, 0px), 0);
  }

  .hero-reveal,
  .hero-mobile-name,
  .hero-mobile-stack,
  .hero-mobile-link,
  .hero-cta {
    animation: hero-reveal 800ms var(--hero-ease) both;
  }

  .hero-reveal--year { animation-delay: 180ms; }
  .hero-reveal--title { animation-delay: 300ms; }
  .hero-reveal--mascot { animation-delay: 420ms; }
  .hero-reveal--code { animation-delay: 520ms; }
  .hero-reveal--footer { animation-delay: 620ms; }
  .hero-mobile-name { animation-delay: 440ms; }
  .hero-mobile-stack { animation-delay: 580ms; }
  .hero-mobile-link { animation-delay: 1420ms; }
  .hero-cta { animation-delay: 1420ms; animation-duration: 650ms; }
  .hero-cta + .hero-cta { animation-delay: 1540ms; }

  .hero-boot { animation: hero-boot 360ms steps(4, end) both; }
  .hero-boot--one { animation-delay: 40ms; }
  .hero-boot--two { animation-delay: 120ms; }
  .hero-boot--three { animation-delay: 200ms; }
  .hero-boot--marks { animation-delay: 780ms; }

  .hero-accent { animation: hero-accent 1400ms var(--hero-ease) 480ms both; }
  .hero-grid { animation: hero-grid 10s ease-in-out infinite; }
  .hero-mascot-depth {
    transform: translate3d(var(--hero-pointer-x, 0px), calc(var(--hero-pointer-y, 0px) + var(--hero-depth-y, 0px)), 0);
  }
  .hero-code-depth {
    transform: translate3d(calc(var(--hero-pointer-x, 0px) * -0.65), calc(var(--hero-pointer-y, 0px) * -0.65), 0);
  }
  .hero-star-depth {
    transform: translate3d(calc(var(--hero-pointer-x, 0px) * 0.4), calc(var(--hero-pointer-y, 0px) * 0.4), 0);
  }

  .hero-section[data-motion-active="false"] .hero-grid {
    animation-play-state: paused;
  }

  /* Keyboard navigation never waits for a reveal or inherits a scroll fade. */
  .hero-cta:focus-visible,
  .hero-mobile-link:focus-visible { animation: none; }
  .hero-artwork:focus-within,
  .hero-mobile-copy:focus-within,
  .hero-actions:focus-within { opacity: 1; }
}

@keyframes hero-reveal {
  from { opacity: 0; transform: translate3d(0, 10px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes hero-boot {
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes hero-accent {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes hero-grid {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
}

@media (max-width: 767px) {
  .hero-section {
    min-height: auto;
    align-items: stretch;
    justify-content: flex-start;
    gap: 20px;
    padding: 24px 20px 48px;
  }

  .hero-artwork {
    width: calc(100vw - 40px);
    max-width: 100%;
    align-self: center;
    flex: 0 0 auto;
  }

  .hero-image {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .hero-hotspot {
    display: none;
  }

  .hero-mobile-copy {
    display: block;
  }

  .hero-mobile-stack {
    margin: 0;
    color: var(--color-accent);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  .hero-mobile-name {
    margin: 0 0 10px;
    color: var(--color-text-primary);
    font-family: var(--font-display);
    font-size: clamp(2rem, 11vw, 3rem);
    font-weight: 700;
    line-height: 1;
  }

  .hero-mobile-link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    width: fit-content;
    margin-top: 18px;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    color: var(--color-accent);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    line-height: 1;
    padding: 9px 12px;
    text-decoration: none;
    transition:
      border-color 180ms ease-out,
      box-shadow 180ms ease-out,
      color 180ms ease-out;
  }

  .hero-mobile-link:hover {
    border-color: var(--color-accent);
    box-shadow: 0 0 18px var(--color-accent-glow);
    color: var(--color-text-primary);
  }

  .hero-actions {
    align-self: flex-start;
    justify-content: flex-start;
  }

  .hero-cta {
    width: fit-content;
  }
}

@media (min-width: 768px) {
  .hero-mobile-copy {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-section *,
  .hero-section *::before,
  .hero-section *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
