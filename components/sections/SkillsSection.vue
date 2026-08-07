<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { portfolioData } from '~/data/portfolio'
import SkillGroup from '~/components/skills/SkillGroup.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

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
      threshold: 0.16,
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
    id="skills"
    ref="sectionRef"
    class="skills-section"
    :class="{ 'skills-section--visible': isVisible }"
    aria-labelledby="skills-title"
  >
    <div class="skills-section__inner">
      <div class="skills-section__heading">
        <SectionHeading number="04" label="// Skills" title="Tools I build with." />
      </div>

      <div class="skills-section__content">
        <p class="skills-section__intro">
          A practical stack for building responsive interfaces, REST APIs and
          full-stack web applications.
        </p>

        <div class="skills-section__groups">
          <SkillGroup
            v-for="group in portfolioData.skillGroups"
            :key="group.id"
            :group="group"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background: var(--color-page);
  padding: 96px 24px 112px;
}

.skills-section__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(48px, 8vw, 112px);
}

.skills-section__heading,
.skills-section__content {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1000ms ease-out,
    transform 1000ms ease-out;
}

.skills-section__content {
  display: grid;
  gap: 34px;
  transition-delay: 160ms;
}

.skills-section--visible .skills-section__heading,
.skills-section--visible .skills-section__content {
  opacity: 1;
  transform: translateY(0);
}

.skills-section__intro {
  max-width: 68ch;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.75;
}

.skills-section__groups {
  display: grid;
  gap: clamp(26px, 3vw, 34px);
}

@media (max-width: 1023px) {
  .skills-section__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 767px) {
  .skills-section {
    padding: 72px 20px 84px;
  }

  .skills-section__content {
    gap: 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skills-section__heading,
  .skills-section__content {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
