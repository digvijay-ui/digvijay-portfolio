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

<style scoped>
.skill-group {
  display: grid;
  gap: 12px;
}

.skill-group__title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.4;
  text-transform: uppercase;
}

.skill-group__title span {
  color: var(--color-accent);
}

.skill-group__list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
