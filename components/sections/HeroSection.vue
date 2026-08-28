<script setup lang="ts"></script>

<template>
  <section id="home" class="hero-section" aria-labelledby="hero-title">
    <h1 id="hero-title" class="sr-only">
      Digvijaysinh Rajput — Full Stack Developer
    </h1>

    <div class="hero-artwork">
      <img
        src="/images/digvijay-portfolio-2026.svg"
        width="1600"
        height="900"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        alt="Retro black and green portfolio artwork for Digvijaysinh Rajput, Full Stack Developer"
        class="hero-image"
      >
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
  animation: hero-enter 500ms ease-out both;
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

@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  .hero-artwork {
    animation: none;
  }
}
</style>
