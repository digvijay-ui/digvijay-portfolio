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
          loading="lazy"
          decoding="async"
          class="experience-card__logo-image"
        >
        <span v-else class="experience-card__initials" aria-hidden="true">
          {{ experience.initials }}
        </span>
      </div>

      <div class="experience-card__identity">
        <p class="experience-card__company">
          <span class="experience-card__status" aria-hidden="true" />
          {{ experience.company }}
        </p>
        <h3 class="experience-card__role">{{ experience.role }}</h3>
      </div>

      <div class="experience-card__meta">
        <p><span>Period</span>{{ experience.period }}</p>
        <p><span>Location</span>{{ experience.location }}</p>
      </div>

      <a
        v-if="experience.linkedinUrl"
        :href="experience.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="experience-card__link"
        aria-label="View Digvijaysinh Rajput's LinkedIn profile in a new tab"
        data-magnetic
      >
        Profile <span aria-hidden="true">↗</span>
      </a>
    </header>

    <div class="experience-card__story">
      <aside class="experience-card__stack" aria-label="Production technology stack">
        <p class="mono">Production stack</p>
        <div
          v-for="group in experience.technologyGroups"
          :key="group.label"
          class="experience-card__technology-group"
        >
          <h4>{{ group.label }}</h4>
          <div class="experience-card__tags">
            <TechTag
              v-for="technology in group.technologies"
              :key="technology"
              :label="technology"
            />
          </div>
        </div>
      </aside>

      <ol class="experience-card__responsibilities" aria-label="Responsibilities and ownership">
        <li
          v-for="(responsibility, index) in experience.responsibilities"
          :key="responsibility.id"
          class="experience-milestone"
        >
          <span class="experience-milestone__node" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <p class="experience-milestone__label mono">{{ responsibility.label }}</p>
          <h4>{{ responsibility.title }}</h4>
          <p>{{ responsibility.description }}</p>
        </li>
      </ol>
    </div>
  </article>
</template>
