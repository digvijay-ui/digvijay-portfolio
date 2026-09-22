<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import ProjectShowcase from '~/components/projects/ProjectShowcase.vue'
</script>

<template>
  <section
    id="projects"
    class="projects-section"
    aria-labelledby="projects-title"
  >
    <div class="projects-section__inner">
      <div class="projects-section__heading">
        <SectionHeading
          number="03"
          label="Projects"
          title="Featured work."
        />
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
