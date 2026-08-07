<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const threadRef = ref<HTMLElement | null>(null)
const progress = ref(0)

let animationFrameId: number | null = null
let shouldTrackScroll = true

const threadStyle = computed(() => {
  return `--thread-progress: ${Math.round(progress.value * 100)}%`
})

const updateProgress = () => {
  const threadElement = threadRef.value

  if (!threadElement) {
    return
  }

  const rect = threadElement.getBoundingClientRect()
  const travelDistance = window.innerHeight + rect.height
  const currentDistance = window.innerHeight - rect.top
  const nextProgress = currentDistance / travelDistance

  progress.value = Math.min(Math.max(nextProgress, 0), 1)
}

const requestProgressUpdate = () => {
  if (!shouldTrackScroll || animationFrameId !== null) {
    return
  }

  animationFrameId = window.requestAnimationFrame(() => {
    animationFrameId = null
    updateProgress()
  })
}

onMounted(() => {
  shouldTrackScroll = !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!shouldTrackScroll) {
    progress.value = 0.5
    return
  }

  updateProgress()
  window.addEventListener('scroll', requestProgressUpdate, { passive: true })
  window.addEventListener('resize', requestProgressUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestProgressUpdate)
  window.removeEventListener('resize', requestProgressUpdate)

  if (animationFrameId !== null) {
    window.cancelAnimationFrame(animationFrameId)
  }
})
</script>

<template>
  <div
    ref="threadRef"
    class="section-thread"
    :style="threadStyle"
    aria-hidden="true"
  >
    <div class="section-thread__inner">
      <span class="section-thread__line" />
      <span class="section-thread__dot" />
    </div>
  </div>
</template>

<style scoped>
.section-thread {
  height: clamp(104px, 12vw, 160px);
  margin: clamp(-80px, -6vw, -52px) 0;
  padding: 0 24px;
  pointer-events: none;
  position: relative;
  z-index: 1;
}

.section-thread__inner {
  position: relative;
  width: min(100%, var(--content-width));
  height: 100%;
  margin: 0 auto;
}

.section-thread__line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5px;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(182, 255, 74, 0.18) 18%,
    rgba(182, 255, 74, 0.18) 82%,
    transparent
  );
}

.section-thread__dot {
  position: absolute;
  top: var(--thread-progress);
  left: 5px;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: var(--color-accent);
  box-shadow: 0 0 16px var(--color-accent-glow);
  transform: translate(-4px, -50%);
}

@media (max-width: 1023px) {
  .section-thread {
    margin: -52px 0;
  }
}

@media (max-width: 767px) {
  .section-thread {
    height: 96px;
    margin: -44px 0;
    padding: 0 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-thread__dot {
    top: 50%;
  }
}
</style>
