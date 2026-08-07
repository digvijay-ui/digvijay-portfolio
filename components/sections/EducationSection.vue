<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const education = portfolioData.education

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value) {
    return
  }

  if (!('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: 0.18,
    },
  )

  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    id="education"
    ref="sectionRef"
    class="education-section"
    :class="{ 'education-section--visible': isVisible }"
    aria-labelledby="education-title"
  >
    <div class="education-section__inner">
      <div class="education-section__heading">
        <SectionHeading
          number="05"
          label="// Education"
          title="Academic foundation."
        />
      </div>

      <article class="education-block">
        <div class="education-block__main">
          <p class="education-block__degree">{{ education.degree }}</p>
          <p class="education-block__field">{{ education.field }}</p>
        </div>

        <div class="education-block__school">
          <p class="education-block__institution">{{ education.institution }}</p>
          <p class="education-block__university">{{ education.university }}</p>
        </div>

        <dl class="education-meta" aria-label="Education details">
          <div class="education-meta__item">
            <dt>Period</dt>
            <dd>{{ education.period }}</dd>
          </div>

          <div class="education-meta__item">
            <dt>Location</dt>
            <dd>{{ education.location }}</dd>
          </div>

          <div class="education-meta__item education-meta__item--cpi">
            <dt>CPI</dt>
            <dd>{{ education.cpi }}</dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  background: var(--color-page);
  padding: 120px 24px;
}

.education-section__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(48px, 8vw, 112px);
}

.education-section__heading,
.education-block {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1000ms ease-out,
    transform 1000ms ease-out;
}

.education-block {
  display: grid;
  width: min(100%, 900px);
  gap: 34px;
  padding: 18px 0;
  transition-delay: 160ms;
}

.education-section--visible .education-section__heading,
.education-section--visible .education-block {
  opacity: 1;
  transform: translateY(0);
}

.education-block__main,
.education-block__school {
  display: grid;
  gap: 8px;
}

.education-block__degree,
.education-block__field,
.education-block__institution,
.education-block__university {
  margin: 0;
}

.education-block__degree {
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.375rem);
  font-weight: 700;
  line-height: 1.12;
}

.education-block__field {
  color: var(--color-accent);
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 600;
  line-height: 1.25;
}

.education-block__institution {
  color: var(--color-text-primary);
  font-size: clamp(1.0625rem, 1.5vw, 1.1875rem);
  line-height: 1.55;
}

.education-block__university {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.55;
}

.education-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 22px clamp(36px, 5vw, 72px);
  margin: 0;
}

.education-meta__item {
  display: grid;
  gap: 8px;
}

.education-meta dt {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
}

.education-meta dd {
  margin: 0;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
}

.education-meta__item--cpi dd {
  color: var(--color-accent);
}

@media (max-width: 1023px) {
  .education-section__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 767px) {
  .education-section {
    padding: 72px 20px;
  }

  .education-block {
    gap: 30px;
    padding: 8px 0;
  }

  .education-meta {
    display: grid;
    gap: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .education-section__heading,
  .education-block {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
