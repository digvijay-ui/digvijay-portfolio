<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import ExperienceCard from '~/components/experience/ExperienceCard.vue'

const sectionElement = shallowRef<HTMLElement | null>(null)
let dispose = () => {}

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let cleanup = () => {}

  const configure = () => {
    cleanup()
    const section = sectionElement.value
    if (!section || reducedMotion.matches) return

    const controller = new AbortController()
    let frame = 0
    section.classList.add('experience-section--enhanced')

    const update = () => {
      frame = 0
      const bounds = section.getBoundingClientRect()
      const start = window.innerHeight * .78
      const end = window.innerHeight * .24
      const distance = Math.max(bounds.height + start - end, 1)
      const progress = Math.min(1, Math.max(0, (start - bounds.top) / distance))
      section.style.setProperty('--timeline-progress', progress.toFixed(4))
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', schedule, { passive: true, signal: controller.signal })
    window.addEventListener('resize', schedule, { passive: true, signal: controller.signal })
    update()

    cleanup = () => {
      controller.abort()
      cancelAnimationFrame(frame)
      section.classList.remove('experience-section--enhanced')
      section.style.removeProperty('--timeline-progress')
    }
  }

  configure()
  reducedMotion.addEventListener('change', configure)
  dispose = () => {
    cleanup()
    reducedMotion.removeEventListener('change', configure)
  }
})

onBeforeUnmount(() => dispose())
</script>

<template>
  <section
    id="experience"
    ref="sectionElement"
    class="experience-section"
    aria-labelledby="experience-title"
  >
    <div class="experience-section__inner">
      <div class="experience-section__heading">
        <SectionHeading
          number="02"
          label="Experience"
          title="Built in the real world."
        />
        <p class="experience-section__intro">
          Production work across interface, API and data layers—with ownership
          from requirements through release.
        </p>

        <div class="experience-section__progress" aria-hidden="true">
          <span>Current chapter</span>
          <span class="experience-section__progress-track"><i /></span>
        </div>
      </div>

      <div class="experience-section__content">
        <div class="experience-list">
          <div
            v-for="experience in portfolioData.experiences"
            :key="experience.id"
            class="experience-list__item"
          >
            <ExperienceCard :experience="experience" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
