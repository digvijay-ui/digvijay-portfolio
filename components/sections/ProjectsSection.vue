<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { portfolioData } from '~/data/portfolio'
import ProjectShowcase from '~/components/projects/ProjectShowcase.vue'
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
    id="projects"
    ref="sectionRef"
    class="projects-section"
    :class="{ 'projects-section--visible': isVisible }"
    aria-labelledby="projects-title"
  >
    <div class="projects-section__inner">
      <div class="projects-section__heading">
        <SectionHeading
          number="03"
          label="// Projects"
          title="Featured work."
        />
      </div>

      <div class="projects-section__intro-block">
        <p class="projects-section__intro">
          Selected full-stack and frontend projects focused on real application
          flows, API integration and reliable user experiences.
        </p>

        <nav class="project-index" aria-label="Featured projects">
          <a
            v-for="project in portfolioData.projects"
            :key="project.id"
            :href="`#${project.id}`"
          >
            {{ project.number }} / {{ project.title }}
          </a>
        </nav>
      </div>

      <div class="projects-section__list">
        <ProjectShowcase
          v-for="project in portfolioData.projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: var(--color-page);
  padding: 120px 24px 140px;
}

.projects-section__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  gap: 64px;
}

.projects-section__heading,
.projects-section__intro-block,
.projects-section__list {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1000ms ease-out,
    transform 1000ms ease-out;
}

.projects-section__intro-block {
  display: grid;
  max-width: 760px;
  gap: 28px;
  transition-delay: 140ms;
}

.projects-section__list {
  display: grid;
  gap: clamp(140px, 14vw, 180px);
  transition-delay: 220ms;
}

.projects-section--visible .projects-section__heading,
.projects-section--visible .projects-section__intro-block,
.projects-section--visible .projects-section__list {
  opacity: 1;
  transform: translateY(0);
}

.projects-section__intro {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.75;
}

.project-index {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
}

.project-index a {
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.4;
  text-decoration: none;
  transition:
    border-color 180ms ease-out,
    color 180ms ease-out;
}

.project-index a:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.project-index a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 5px;
}

@media (max-width: 767px) {
  .projects-section {
    padding: 72px 20px 96px;
  }

  .projects-section__inner {
    gap: 46px;
  }

  .projects-section__list {
    gap: 104px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .projects-section__heading,
  .projects-section__intro-block,
  .projects-section__list {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
