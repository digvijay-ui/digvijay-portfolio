<script setup lang="ts">
interface TechTagProps {
  label: string
}

defineProps<TechTagProps>()
</script>

<template>
  <span class="tech-tag">{{ label }}</span>
</template>
