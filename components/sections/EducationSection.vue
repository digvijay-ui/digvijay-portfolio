<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import AnimatedStat from '~/components/ui/AnimatedStat.vue'
const education = portfolioData.education
</script>

<template>
  <section
    id="education"
    class="education-section"
    aria-labelledby="education-title"
  >
    <div class="education-section__inner">
      <div class="education-section__heading">
        <SectionHeading
          number="05"
          label="Education"
          title="Academic foundation."
        />
      </div>

      <article class="education-block">
        <div class="education-block__main">
          <h3 class="education-block__degree">{{ education.degree }}</h3>
          <p class="education-block__field">{{ education.field }}</p>
        </div>

        <div class="education-block__school">
          <p class="education-block__institution">{{ education.institution }}</p>
          <p class="education-block__university">{{ education.university }}</p>
        </div>

        <dl class="education-meta" aria-label="Education details">
          <div class="education-meta__item">
            <dt>Period</dt>
            <dd>{{ education.period }}</dd>
          </div>

          <div class="education-meta__item">
            <dt>Location</dt>
            <dd>{{ education.location }}</dd>
          </div>

          <div class="education-meta__item education-meta__item--cgpa">
            <dt>CGPA</dt>
            <dd><AnimatedStat :value="education.cgpa" /></dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>
