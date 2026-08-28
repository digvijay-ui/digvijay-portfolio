<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { portfolioData } from '~/data/portfolio'
import ExperienceCard from '~/components/experience/ExperienceCard.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  const section = sectionRef.value

  if (!(section instanceof Element)) {
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
      threshold: 0.22,
    },
  )

  observer.observe(section)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    id="experience"
    ref="sectionRef"
    class="experience-section"
    :class="{ 'experience-section--visible': isVisible }"
    aria-labelledby="experience-title"
  >
    <div class="experience-section__inner">
      <div class="experience-section__heading">
        <SectionHeading
          number="02"
          label="Experience"
          title="Building and shipping production software."
        />
      </div>

      <div class="experience-section__content">
        <p class="experience-section__intro">
          Hands-on experience as a Full Stack Developer building production
          features, admin workflows and reliable REST APIs.
        </p>

        <div class="experience-list">
          <div
            v-for="experience in portfolioData.experiences"
            :key="experience.id"
            class="experience-list__item"
          >
            <span class="experience-list__marker" aria-hidden="true" />
            <ExperienceCard :experience="experience" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background: var(--color-page);
  padding: 120px 24px;
}

.experience-section__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(48px, 8vw, 112px);
}

.experience-section__heading,
.experience-section__content {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1000ms ease-out,
    transform 1000ms ease-out;
}

.experience-section__content {
  display: grid;
  gap: 34px;
  transition-delay: 160ms;
}

.experience-section--visible .experience-section__heading,
.experience-section--visible .experience-section__content {
  opacity: 1;
  transform: translateY(0);
}

.experience-section__intro {
  max-width: 68ch;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.75;
}

.experience-list {
  display: grid;
  gap: 28px;
}

.experience-list__item {
  position: relative;
  padding-left: 28px;
}

.experience-list__item::before {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 5px;
  width: 1px;
  background: var(--color-border);
  content: "";
}

.experience-list__marker {
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 1;
  width: 11px;
  height: 11px;
  border: 2px solid var(--color-page);
  border-radius: 999px;
  background: var(--color-accent);
}

@media (max-width: 1023px) {
  .experience-section__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 767px) {
  .experience-section {
    padding: 72px 20px;
  }

  .experience-section__content {
    gap: 30px;
  }

  .experience-list__item {
    padding-left: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience-section__heading,
  .experience-section__content {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
