<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'

const props = defineProps<{ value: string }>()
const stat = shallowRef<HTMLElement | null>(null)
const display = ref(props.value)
let dispose = () => {}

onMounted(() => {
  const match = props.value.match(/^(\d+(?:\.\d+)?)(.*)$/s)
  const element = stat.value
  if (!match || !element || !('IntersectionObserver' in window)) return
  const finalNumber = Number(match[1])
  const decimals = match[1]!.split('.')[1]?.length ?? 0
  const suffix = match[2] ?? ''
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame = 0
  let finished = false
  const finish = () => {
    finished = true
    cancelAnimationFrame(frame)
    display.value = props.value
    observer.disconnect()
  }
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting) || finished) return
    observer.disconnect()
    if (reduced.matches) { finish(); return }
    const started = performance.now()
    const tick = (time: number) => {
      const progress = Math.min((time - started) / 1200, 1)
      display.value = `${(finalNumber * (1 - (1 - progress) ** 3)).toFixed(decimals)}${suffix}`
      if (progress < 1) frame = requestAnimationFrame(tick)
      else finish()
    }
    frame = requestAnimationFrame(tick)
  }, { threshold: .25 })
  const change = () => { if (reduced.matches) finish() }
  reduced.addEventListener('change', change)
  if (!reduced.matches) observer.observe(element)
  dispose = () => { finish(); reduced.removeEventListener('change', change) }
})
onBeforeUnmount(() => dispose())
</script>

<template>
  <span ref="stat" class="animated-stat"><span class="sr-only">{{ value }}</span><span aria-hidden="true">{{ display }}</span></span>
</template>
