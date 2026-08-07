<script setup lang="ts">
interface TechTagProps {
  label: string
}

defineProps<TechTagProps>()
</script>

<template>
  <span class="tech-tag">{{ label }}</span>
</template>

<style scoped>
.tech-tag {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-surface-alt);
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1;
  padding: 8px 12px;
  transition:
    border-color 180ms ease-out,
    color 180ms ease-out,
    transform 180ms ease-out;
}

.tech-tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .tech-tag {
    transition: none;
  }

  .tech-tag:hover {
    transform: none;
  }
}
</style>
