<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import ExperienceCard from '~/components/experience/ExperienceCard.vue'
</script>

<template>
  <section
    id="experience"
    class="experience-section"
    aria-labelledby="experience-title"
  >
    <div class="experience-section__inner">
      <div class="experience-section__heading">
        <SectionHeading
          number="02"
          label="Experience"
          title="Built in the real world."
        />
        <p class="experience-section__intro">
          Production work across interface, API and data layers—with ownership
          from requirements through release.
        </p>
      </div>

      <div class="experience-section__content">
        <div class="experience-list">
          <div
            v-for="experience in portfolioData.experiences"
            :key="experience.id"
            class="experience-list__item"
          >
            <ExperienceCard :experience="experience" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
