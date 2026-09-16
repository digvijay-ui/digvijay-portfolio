<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HeroWorld from './HeroWorld.vue'

const hero = ref<HTMLElement | null>(null)
const loading = ref(false)
const entered = ref(false)
let dispose = () => {}
onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
  let frame = 0
  let timer: ReturnType<typeof setTimeout> | undefined
  const finish = () => { loading.value = false; entered.value = true }
  if (!reduced.matches && !sessionStorage.getItem('night-hero-intro')) {
    loading.value = true
    sessionStorage.setItem('night-hero-intro', '1')
    timer = setTimeout(finish, 1900)
  } else finish()
  const reset = () => {
    if (frame) cancelAnimationFrame(frame)
    frame = 0
    hero.value?.style.setProperty('--world-x', '0px')
    hero.value?.style.setProperty('--world-y', '0px')
    if (reduced.matches) { clearTimeout(timer); finish() }
  }
  const move = (event: PointerEvent) => {
    if (reduced.matches || !fine.matches || event.pointerType !== 'mouse' || frame) return
    const rect = hero.value!.getBoundingClientRect()
    frame = requestAnimationFrame(() => {
      hero.value?.style.setProperty('--world-x', `${(event.clientX / rect.width - .5) * 12}px`)
      hero.value?.style.setProperty('--world-y', `${((event.clientY - rect.top) / rect.height - .5) * 8}px`)
      frame = 0
    })
  }
  hero.value?.addEventListener('pointermove', move, { passive: true })
  hero.value?.addEventListener('pointerleave', reset)
  reduced.addEventListener('change', reset)
  fine.addEventListener('change', reset)
  dispose = () => { clearTimeout(timer); reset(); hero.value?.removeEventListener('pointermove', move); hero.value?.removeEventListener('pointerleave', reset); reduced.removeEventListener('change', reset); fine.removeEventListener('change', reset) }
})
onBeforeUnmount(() => dispose())
</script>

<template>
  <section id="home" ref="hero" class="night-hero" :class="{ 'night-hero--entered': entered }" aria-labelledby="hero-title">
    <div v-if="loading" class="hero-loader" aria-hidden="true">
      <p>FULL STACK DEVELOPER</p>
      <div><span v-for="(letter, i) in 'DIGVIJAY'" :key="i" :style="{ '--letter-delay': `${350 + i * 110}ms` }">{{ letter }}</span></div>
    </div>
    <HeroWorld />
    <div class="night-hero__shade" aria-hidden="true" />
    <div class="night-hero__copy">
      <p class="night-hero__eyebrow mono hero-enter"></p>
      <h1 id="hero-title">
        <span class="hero-enter">I am Digvijaysinh Rajput</span>
        <span class="hero-enter"><em>Full Stack Developer.</em></span>
        <span class="hero-enter">Building products that scale.</span>
      </h1>
      <p class="night-hero__description hero-enter">I build responsive interfaces and reliable full-stack products using Vue, React, TypeScript, Node.js, and PostgreSQL—turning real business requirements into clean, scalable experiences.</p>
    </div>
    <a class="night-hero__scroll" href="#about" aria-label="Scroll to About"><span aria-hidden="true">↓</span></a>
    <span class="night-hero__caption mono" aria-hidden="true"></span>
  </section>
</template>
