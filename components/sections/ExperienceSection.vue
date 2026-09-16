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
            <ExperienceCard :experience="experience" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
