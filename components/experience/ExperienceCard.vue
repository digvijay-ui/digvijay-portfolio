<script setup lang="ts">
import type { Experience } from '~/types/portfolio'
import TechTag from '~/components/ui/TechTag.vue'

interface ExperienceCardProps {
  experience: Experience
}

defineProps<ExperienceCardProps>()
</script>

<template>
  <article class="experience-card">
    <header class="experience-card__header">
      <div class="experience-card__logo">
        <img
          v-if="experience.logo"
          :src="experience.logo"
          :alt="experience.logoAlt || `${experience.company} logo`"
          width="48"
          height="48"
          class="experience-card__logo-image"
        >
        <span v-else class="experience-card__initials" aria-hidden="true">
          {{ experience.initials }}
        </span>
      </div>

      <div class="experience-card__identity">
        <h3 class="experience-card__role">{{ experience.role }}</h3>
        <a
          v-if="experience.companyUrl"
          :href="experience.companyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="experience-card__company"
        >
          {{ experience.company }}
        </a>
        <p v-else class="experience-card__company">
          {{ experience.company }}
        </p>
      </div>

      <div class="experience-card__meta">
        <p>{{ experience.period }}</p>
        <p>{{ experience.location }}</p>
      </div>
    </header>

    <div class="experience-card__tags" aria-label="Technologies used">
      <TechTag
        v-for="technology in experience.technologies"
        :key="technology"
        :label="technology"
      />
    </div>

    <ul class="experience-card__achievements">
      <li
        v-for="achievement in experience.achievements"
        :key="achievement"
      >
        {{ achievement }}
      </li>
    </ul>

    <a
      v-if="experience.linkedinUrl"
      :href="experience.linkedinUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="experience-card__link"
      aria-label="View Digvijaysinh Rajput's LinkedIn profile in a new tab"
    >
      View role on LinkedIn ↗
    </a>
  </article>
</template>

<style scoped>
.experience-card {
  position: relative;
  padding: 0;
}

.experience-card__header {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) max-content;
  gap: 18px;
  align-items: start;
}

.experience-card__logo {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface-alt);
  padding: 6px;
}

.experience-card__logo-image {
  width: 100%;
  height: 100%;
  border-radius: 999px;
  object-fit: contain;
}

.experience-card__initials {
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
}

.experience-card__identity {
  min-width: 0;
}

.experience-card__role {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  font-weight: 700;
  line-height: 1.15;
}

.experience-card__company {
  display: inline-flex;
  width: fit-content;
  margin: 10px 0 0;
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration: none;
}

a.experience-card__company {
  border-bottom: 1px solid transparent;
  transition:
    border-color 180ms ease-out,
    color 180ms ease-out;
}

a.experience-card__company:hover {
  border-color: var(--color-accent);
  color: var(--color-text-primary);
}

.experience-card__meta {
  display: grid;
  gap: 8px;
  justify-items: end;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.45;
  text-align: right;
}

.experience-card__meta p {
  margin: 0;
}

.experience-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.experience-card__achievements {
  display: grid;
  max-width: 75ch;
  gap: 16px;
  margin: 30px 0 0;
  padding: 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  list-style: none;
}

.experience-card__achievements li {
  position: relative;
  padding-left: 22px;
}

.experience-card__achievements li::before {
  position: absolute;
  top: 0.75em;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 1px;
  background: var(--color-accent);
  content: "";
}

.experience-card__link {
  display: inline-flex;
  width: fit-content;
  margin-top: 30px;
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

.experience-card__link:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.experience-card__link:focus-visible,
.experience-card__company:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 5px;
}

@media (max-width: 767px) {
  .experience-card__header {
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 16px;
  }

  .experience-card__logo {
    width: 44px;
    height: 44px;
  }

  .experience-card__logo-image {
    width: 44px;
    height: 44px;
  }

  .experience-card__meta {
    grid-column: 2;
    justify-items: start;
    margin-top: -4px;
    text-align: left;
  }

  .experience-card__role {
    font-size: clamp(1.35rem, 7vw, 1.6rem);
  }

  .experience-card__tags,
  .experience-card__achievements {
    margin-top: 26px;
  }
}
</style>
