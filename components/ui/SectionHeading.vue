<script setup lang="ts">
import { computed } from 'vue'

interface SectionHeadingProps {
  number: string
  label: string
  title: string
}

const props = defineProps<SectionHeadingProps>()

const headingId = computed(() => {
  const base = props.label
    .replace(/\/+/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  return `${base || props.number}-title`
})
</script>

<template>
  <div class="section-heading">
    <p class="section-heading__meta">
      <span class="section-heading__number">{{ number }}</span>
      <span class="section-heading__label">{{ label }}</span>
    </p>
    <h2 :id="headingId" class="section-heading__title">
      {{ title }}
    </h2>
  </div>
</template>

<style scoped>
.section-heading {
  display: grid;
  gap: 18px;
}

.section-heading__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.4;
}

.section-heading__number {
  color: var(--color-accent);
}

.section-heading__label {
  color: var(--color-text-muted);
}

.section-heading__title {
  max-width: 12ch;
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
}
</style>
