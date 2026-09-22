<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '~/types/portfolio'
import TechTag from '~/components/ui/TechTag.vue'
defineProps<{ project: Project }>()

const imageFailed = ref(false)
</script>

<template>
  <article :id="project.id" class="project-showcase" :class="{ 'project-showcase--right': Number(project.number) % 2 === 0 }">
    <header class="project-showcase__header">
      <span class="project-showcase__number">{{ project.number }}</span>
      <div><p class="mono project-showcase__role">{{ project.role }}</p><h3>{{ project.title }}</h3><p class="project-showcase__subtitle">{{ project.subtitle }}</p></div>
      <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="project-launch" :aria-label="`Open live ${project.title} project in a new tab`" data-magnetic>↗</a>
    </header>
    <figure class="project-showcase__media">
      <div class="project-window mono" aria-hidden="true"><span>● ○ ○</span><span>{{ project.title }} / Preview</span><span>↗</span></div>
      <div class="project-showcase__visual">
        <img
          v-if="!imageFailed"
          :src="project.image"
          :alt="project.imageAlt"
          width="1440"
          height="900"
          loading="lazy"
          decoding="async"
          class="project-showcase__image"
          @error="imageFailed = true"
        >
        <div
          v-else
          class="project-showcase__fallback"
          role="img"
          :aria-label="`${project.imageAlt}. Preview unavailable.`"
        >
          <span class="mono">Preview unavailable</span>
          <strong>{{ project.title }}</strong>
          <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer">
            Open live project ↗
          </a>
        </div>
      </div>
    </figure>
    <div class="project-showcase__body">
      <div class="project-overview">
        <h4 class="mono">The problem</h4>
        <p>{{ project.description }}</p>
        <h4 class="mono">Technical result</h4>
        <p class="project-impact">{{ project.impact }}</p>
      </div>
      <div><h4 class="mono">My contribution</h4><ul class="project-showcase__highlights"><li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li></ul>
        <div class="project-showcase__actions"><a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="text-link" :aria-label="`Open live ${project.title} project in a new tab`" data-magnetic>Live Project ↗</a><a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="text-link" :aria-label="`Open ${project.title} GitHub repository in a new tab`" data-magnetic>View GitHub ↗</a></div>
      </div>
    </div>
    <div class="project-showcase__technology">
      <h4 class="mono">Technology</h4>
      <div class="project-showcase__tags"><TechTag v-for="technology in project.technologies" :key="technology" :label="technology" /></div>
    </div>
  </article>
</template>
