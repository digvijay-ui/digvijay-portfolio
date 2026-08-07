<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="about" class="about-section" aria-labelledby="about-title">
    <div class="about-section__inner">
      <SectionHeading
        number="01"
        label="// About"
        :title="portfolioData.about.heading"
      />

      <div class="about-section__content">
        <div class="about-section__copy">
          <p
            v-for="paragraph in portfolioData.about.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <dl class="quick-facts" aria-label="Quick facts">
          <div
            v-for="fact in portfolioData.quickFacts"
            :key="fact.id"
            class="quick-fact"
          >
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  border-top: 1px solid var(--color-border);
  background: var(--color-page);
  padding: 120px 24px;
}

.about-section__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(48px, 8vw, 112px);
  animation: about-enter 520ms ease-out both;
}

.about-section__content {
  display: grid;
  gap: 48px;
}

.about-section__copy {
  max-width: 72ch;
}

.about-section__copy p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.75;
}

.about-section__copy p + p {
  margin-top: 24px;
}

.quick-facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
}

.quick-fact {
  border-top: 1px solid var(--color-border);
  padding-top: 18px;
  transition:
    border-color 180ms ease-out,
    transform 180ms ease-out;
}

.quick-fact:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.quick-fact dt {
  margin: 0 0 10px;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;
}

.quick-fact dd {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 2vw, 1.35rem);
  font-weight: 600;
  line-height: 1.25;
}

@keyframes about-enter {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1023px) {
  .about-section__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .quick-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .about-section {
    padding: 72px 20px;
  }

  .about-section__content {
    gap: 40px;
  }
}

@media (max-width: 520px) {
  .quick-facts {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-section__inner {
    animation: none;
  }

  .quick-fact {
    transition: none;
  }

  .quick-fact:hover {
    transform: none;
  }
}
</style>
