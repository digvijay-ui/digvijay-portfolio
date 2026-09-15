<script setup lang="ts">
import { computed, ref } from 'vue'
import { portfolioData } from '~/data/portfolio'
import SkillGroup from '~/components/skills/SkillGroup.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'
const active = ref('all')
const groups = computed(() => portfolioData.skillGroups.filter(group => active.value === 'all' || group.id === active.value))
</script>

<template>
  <section id="skills" class="skills-section" aria-labelledby="skills-title">
    <div class="skills-section__inner">
      <SectionHeading number="04" label="Skills" title="Core Technologies." />
      <div class="skills-section__content">
        <div class="skill-filters" role="group" aria-label="Filter technologies by category">
          <button type="button" :aria-pressed="active === 'all'" @click="active = 'all'">All</button>
          <button v-for="group in portfolioData.skillGroups" :key="group.id" type="button" :aria-pressed="active === group.id" @click="active = group.id">{{ group.label }}</button>
        </div>
        <div class="skill-results" aria-live="polite" aria-atomic="true"><SkillGroup v-for="group in groups" :key="group.id" :group="group" /></div>
      </div>
    </div>
  </section>
</template>
