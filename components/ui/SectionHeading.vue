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
