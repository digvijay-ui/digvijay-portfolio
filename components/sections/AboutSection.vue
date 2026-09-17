<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import AnimatedStat from '~/components/ui/AnimatedStat.vue'
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

      <div class="about-section__content">
        <div class="about-section__copy">
          <p
            v-for="paragraph in portfolioData.about.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <dl class="quick-facts" aria-label="Quick facts">
          <div
            v-for="fact in portfolioData.quickFacts"
            :key="fact.id"
            class="quick-fact"
          >
            <dt>{{ fact.label }}</dt>
            <dd><AnimatedStat :value="fact.value" /></dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
