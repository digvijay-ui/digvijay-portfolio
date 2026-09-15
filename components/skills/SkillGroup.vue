<script setup lang="ts">
import type { SkillGroup } from '~/types/portfolio'
import TechTag from '~/components/ui/TechTag.vue'

interface SkillGroupProps {
  group: SkillGroup
}

defineProps<SkillGroupProps>()
</script>

<template>
  <section class="skill-group" :aria-labelledby="`${group.id}-skills-title`">
    <h3 :id="`${group.id}-skills-title`" class="skill-group__title">
      <span aria-hidden="true">//</span>
      {{ group.label }}
    </h3>

    <ul class="skill-group__list">
      <li v-for="skill in group.skills" :key="skill">
        <TechTag :label="skill" />
      </li>
    </ul>
  </section>
</template>
