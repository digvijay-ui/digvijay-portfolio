<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
</script>

<template>
  <section
    id="about"
    class="about-section"
    aria-labelledby="about-title"
  >
    <div class="about-section__inner">
      <div class="about-section__heading">
        <SectionHeading
          number="01"
          label="About"
          :title="portfolioData.about.heading"
        />
      </div>

      <p class="about-section__statement">
        {{ portfolioData.about.statement }}
      </p>

      <div class="about-section__copy">
        <p
          v-for="paragraph in portfolioData.about.paragraphs"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>

    </div>
  </section>
</template>
