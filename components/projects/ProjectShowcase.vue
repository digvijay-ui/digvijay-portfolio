<script setup lang="ts">
import type { Project } from '~/types/portfolio'
import TechTag from '~/components/ui/TechTag.vue'

interface ProjectShowcaseProps {
  project: Project
}

const props = defineProps<ProjectShowcaseProps>()

const isRightAligned = Number(props.project.number) % 2 === 0
</script>

<template>
  <article
    :id="project.id"
    class="project-showcase"
    :class="{ 'project-showcase--right': isRightAligned }"
  >
    <div class="project-showcase__body">
      <p class="project-showcase__eyebrow">
        PROJECT {{ project.number }}
      </p>

      <h3 class="project-showcase__title">
        {{ project.title }}
      </h3>

      <p v-if="project.subtitle" class="project-showcase__subtitle">
        {{ project.subtitle }}
      </p>

      <p class="project-showcase__description">
        {{ project.description }}
      </p>

      <p class="project-showcase__impact">
        <strong>{{ project.impact }}</strong>
      </p>

      <div v-if="project.role" class="project-showcase__role">
        <p>ROLE</p>
        <span>{{ project.role }}</span>
      </div>

      <ul class="project-showcase__highlights">
        <li
          v-for="highlight in project.highlights"
          :key="highlight"
        >
          {{ highlight }}
        </li>
      </ul>

      <div class="project-showcase__tags" aria-label="Project technologies">
        <TechTag
          v-for="technology in project.technologies"
          :key="technology"
          :label="technology"
        />
      </div>

      <div class="project-showcase__actions">
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-showcase__button project-showcase__button--primary"
        >
          Live Project ↗
        </a>
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-showcase__button project-showcase__button--secondary"
        >
          View GitHub ↗
        </a>
      </div>
    </div>

    <figure class="project-showcase__media">
      <img
        :src="project.image"
        :alt="project.imageAlt"
        width="1440"
        height="900"
        loading="lazy"
        decoding="async"
        class="project-showcase__image"
      >
    </figure>
  </article>
</template>

<style scoped>
.project-showcase {
  display: grid;
  gap: clamp(34px, 5vw, 56px);
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.8fr);
  align-items: start;
  scroll-margin-top: 48px;
}

.project-showcase__body {
  max-width: 760px;
}

.project-showcase__media {
  align-self: start;
  margin: clamp(54px, 8vw, 92px) 0 0;
}

.project-showcase--right .project-showcase__body {
  grid-column: 2;
  justify-self: end;
}

.project-showcase--right .project-showcase__media {
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
}

.project-showcase__eyebrow {
  margin: 0 0 18px;
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
}

.project-showcase__title {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.04;
}

.project-showcase__subtitle {
  margin: 18px 0 0;
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 1.65rem);
  font-weight: 600;
  line-height: 1.25;
}

.project-showcase__description {
  margin: 24px 0 0;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.75;
}

.project-showcase__impact {
  max-width: 68ch;
  margin: 20px 0 0;
  color: var(--color-text-primary);
  font-size: 1rem;
  line-height: 1.6;
}

.project-showcase__impact strong {
  font-weight: 700;
}

.project-showcase__role {
  display: grid;
  gap: 6px;
  margin-top: 26px;
}

.project-showcase__role p {
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
}

.project-showcase__role span {
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.4;
}

.project-showcase__highlights {
  display: grid;
  gap: 14px;
  max-width: 75ch;
  margin: 30px 0 0;
  padding: 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.65;
  list-style: none;
}

.project-showcase__highlights li {
  position: relative;
  padding-left: 22px;
}

.project-showcase__highlights li::before {
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 1px;
  background: var(--color-accent);
  content: "";
}

.project-showcase__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.project-showcase__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.project-showcase__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1;
  padding: 13px 16px;
  text-decoration: none;
  transition:
    border-color 180ms ease-out,
    background-color 180ms ease-out,
    color 180ms ease-out,
    box-shadow 180ms ease-out;
}

.project-showcase__button--primary {
  border-color: var(--color-accent);
  background: var(--color-accent);
  color: var(--color-page);
}

.project-showcase__button--secondary {
  background: transparent;
  color: var(--color-text-primary);
}

.project-showcase__button:hover {
  border-color: var(--color-accent);
  box-shadow: 0 0 22px var(--color-accent-glow);
}

.project-showcase__button--secondary:hover {
  color: var(--color-accent);
}

.project-showcase__button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 5px;
}

.project-showcase__media {
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-surface);
  transition: border-color 300ms ease-out;
}

.project-showcase__image {
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
  transition: transform 300ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
  .project-showcase__media:hover {
    border-color: rgba(182, 255, 74, 0.58);
  }

  .project-showcase__media:hover .project-showcase__image {
    transform: scale(1.012);
  }
}

@media (max-width: 1023px) {
  .project-showcase {
    grid-template-columns: 1fr;
  }

  .project-showcase__media {
    margin: 0;
  }

  .project-showcase--right .project-showcase__body,
  .project-showcase--right .project-showcase__media {
    grid-column: auto;
    grid-row: auto;
    justify-self: start;
  }
}

@media (max-width: 767px) {
  .project-showcase--right .project-showcase__body {
    justify-self: start;
  }

  .project-showcase--right .project-showcase__media {
    justify-self: start;
  }

  .project-showcase__title {
    font-size: clamp(2.15rem, 13vw, 3rem);
  }

  .project-showcase__actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .project-showcase__button {
    width: 100%;
  }

  .project-showcase__media {
    border-radius: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-showcase__button,
  .project-showcase__media,
  .project-showcase__image {
    transition: none;
  }

  .project-showcase__media:hover .project-showcase__image {
    transform: none;
  }
}
</style>
