<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'contact'

const sectionIds: SectionId[] = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'education',
  'contact',
]

const sectionOffsets: Record<SectionId, { x: number; y: number }> = {
  home: { x: -10, y: 54 },
  about: { x: -22, y: -16 },
  experience: { x: -4, y: 10 },
  projects: { x: -20, y: -8 },
  skills: { x: -30, y: 4 },
  education: { x: -12, y: -18 },
  contact: { x: -6, y: 18 },
}

const activeSection = ref<SectionId>('home')
const welcomeComplete = ref(false)
const isMoving = ref(false)
const scrollDrift = ref({ x: 0, y: 0 })
const prefersReducedMotion = ref(false)

let sectionObserver: IntersectionObserver | null = null
let animationFrameId: number | null = null
let welcomeTimer: ReturnType<typeof window.setTimeout> | null = null
let movingTimer: ReturnType<typeof window.setTimeout> | null = null
let mediaQuery: MediaQueryList | null = null

const mascotClasses = computed(() => [
  `portfolio-mascot--${activeSection.value}`,
  {
    'portfolio-mascot--welcome': !welcomeComplete.value,
    'portfolio-mascot--moving': isMoving.value,
    'portfolio-mascot--reduced-motion': prefersReducedMotion.value,
  },
])

const mascotStyle = computed(() => {
  const offset = sectionOffsets[activeSection.value]

  if (prefersReducedMotion.value) {
    return {
      '--mascot-x': `${offset.x}px`,
      '--mascot-y': `${offset.y}px`,
    }
  }

  return {
    '--mascot-x': `${offset.x + scrollDrift.value.x}px`,
    '--mascot-y': `${offset.y + scrollDrift.value.y}px`,
  }
})

const updateScrollDrift = () => {
  animationFrameId = null

  if (prefersReducedMotion.value) {
    return
  }

  const maxScroll = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    1,
  )
  const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
  const isTablet = window.innerWidth <= 1024
  const xRange = isTablet ? 5 : 12
  const yRange = isTablet ? 7 : 18

  scrollDrift.value = {
    x: Math.round(Math.sin(progress * Math.PI * 4) * xRange),
    y: Math.round(Math.sin(progress * Math.PI * 6) * yRange),
  }
}

const requestScrollUpdate = () => {
  if (prefersReducedMotion.value) {
    return
  }

  isMoving.value = true

  if (movingTimer !== null) {
    window.clearTimeout(movingTimer)
  }

  movingTimer = window.setTimeout(() => {
    isMoving.value = false
  }, 180)

  if (animationFrameId === null) {
    animationFrameId = window.requestAnimationFrame(updateScrollDrift)
  }
}

const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
  prefersReducedMotion.value = event.matches
  welcomeComplete.value = event.matches
  isMoving.value = false
  scrollDrift.value = { x: 0, y: 0 }
}

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = mediaQuery.matches

  if (prefersReducedMotion.value) {
    welcomeComplete.value = true
  } else {
    welcomeTimer = window.setTimeout(() => {
      welcomeComplete.value = true
    }, 2800)
  }

  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (current, next) =>
              next.intersectionRatio - current.intersectionRatio,
          )[0]

        if (visibleEntry?.target.id) {
          activeSection.value = visibleEntry.target.id as SectionId
        }
      },
      {
        rootMargin: '-32% 0px -48% 0px',
        threshold: [0.08, 0.18, 0.3, 0.44],
      },
    )

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId)

      if (section) {
        sectionObserver?.observe(section)
      }
    })
  }

  updateScrollDrift()
  window.addEventListener('scroll', requestScrollUpdate, { passive: true })
  window.addEventListener('resize', requestScrollUpdate)
  mediaQuery.addEventListener('change', handleMotionPreferenceChange)
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
  window.removeEventListener('scroll', requestScrollUpdate)
  window.removeEventListener('resize', requestScrollUpdate)

  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleMotionPreferenceChange)
  }

  if (animationFrameId !== null) {
    window.cancelAnimationFrame(animationFrameId)
  }

  if (welcomeTimer !== null) {
    window.clearTimeout(welcomeTimer)
  }

  if (movingTimer !== null) {
    window.clearTimeout(movingTimer)
  }
})
</script>

<template>
  <div
    class="portfolio-mascot"
    :class="mascotClasses"
    :style="mascotStyle"
    aria-hidden="true"
  >
    <div class="portfolio-mascot__bubble">HEY, I'M DIGVIJAYSINH 👋</div>

    <div class="portfolio-mascot__stage">
      <span class="portfolio-mascot__shadow" />

      <div class="portfolio-mascot__sprite">
        <span class="portfolio-mascot__antenna" />
        <span class="portfolio-mascot__head">
          <span class="portfolio-mascot__hair" />
          <span class="portfolio-mascot__eye portfolio-mascot__eye--left" />
          <span class="portfolio-mascot__eye portfolio-mascot__eye--right" />
          <span class="portfolio-mascot__mouth" />
        </span>
        <span class="portfolio-mascot__neck" />
        <span class="portfolio-mascot__body">
          <span class="portfolio-mascot__badge" />
        </span>
        <span class="portfolio-mascot__arm portfolio-mascot__arm--left" />
        <span class="portfolio-mascot__arm portfolio-mascot__arm--right" />
        <span class="portfolio-mascot__leg portfolio-mascot__leg--left" />
        <span class="portfolio-mascot__leg portfolio-mascot__leg--right" />
        <span class="portfolio-mascot__prop portfolio-mascot__prop--book" />
        <span class="portfolio-mascot__prop portfolio-mascot__prop--laptop" />
        <span class="portfolio-mascot__prop portfolio-mascot__prop--terminal">
          <span />
        </span>
        <span class="portfolio-mascot__prop portfolio-mascot__prop--pointer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-mascot {
  --mascot-x: 0px;
  --mascot-y: 0px;
  position: fixed;
  top: 56svh;
  right: clamp(18px, 3vw, 44px);
  z-index: 40;
  width: 86px;
  pointer-events: none;
  transform: translate3d(var(--mascot-x), var(--mascot-y), 0);
  transition:
    opacity 180ms ease-out,
    transform 360ms cubic-bezier(0.2, 0.8, 0.25, 1);
  will-change: transform;
}

.portfolio-mascot__stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.18;
}

.portfolio-mascot__shadow {
  position: absolute;
  right: 14px;
  bottom: 2px;
  width: 52px;
  height: 8px;
  background: rgba(57, 255, 106, 0.18);
  filter: blur(1px);
}

.portfolio-mascot__sprite {
  position: absolute;
  right: 9px;
  bottom: 6px;
  width: 64px;
  height: 80px;
  image-rendering: pixelated;
  animation: mascot-idle 2200ms steps(2, end) infinite;
}

.portfolio-mascot__antenna,
.portfolio-mascot__head,
.portfolio-mascot__hair,
.portfolio-mascot__eye,
.portfolio-mascot__mouth,
.portfolio-mascot__neck,
.portfolio-mascot__body,
.portfolio-mascot__badge,
.portfolio-mascot__arm,
.portfolio-mascot__leg,
.portfolio-mascot__prop {
  position: absolute;
  display: block;
}

.portfolio-mascot__antenna {
  top: 0;
  left: 30px;
  width: 4px;
  height: 9px;
  background: var(--color-accent-strong);
  box-shadow: 0 -4px 0 #ffffff;
}

.portfolio-mascot__head {
  top: 9px;
  left: 15px;
  width: 34px;
  height: 30px;
  border: 3px solid var(--color-accent-strong);
  background: #101310;
  box-shadow:
    0 0 0 2px #000000,
    0 0 18px rgba(57, 255, 106, 0.16);
}

.portfolio-mascot__hair {
  top: -3px;
  left: 4px;
  width: 22px;
  height: 7px;
  background: #ffffff;
  box-shadow:
    -4px 4px 0 #ffffff,
    18px 4px 0 #ffffff;
}

.portfolio-mascot__eye {
  top: 12px;
  width: 5px;
  height: 5px;
  background: var(--color-accent-strong);
  box-shadow: 0 0 8px rgba(57, 255, 106, 0.56);
  animation: mascot-blink 4600ms steps(1, end) infinite;
}

.portfolio-mascot__eye--left {
  left: 8px;
}

.portfolio-mascot__eye--right {
  right: 8px;
}

.portfolio-mascot__mouth {
  left: 14px;
  bottom: 6px;
  width: 8px;
  height: 3px;
  background: #ffffff;
}

.portfolio-mascot__neck {
  top: 39px;
  left: 28px;
  width: 8px;
  height: 6px;
  background: var(--color-accent-strong);
}

.portfolio-mascot__body {
  top: 44px;
  left: 18px;
  width: 28px;
  height: 24px;
  border: 3px solid #ffffff;
  background: #0d0d0f;
  box-shadow:
    inset 0 -6px 0 rgba(57, 255, 106, 0.18),
    0 0 0 2px #000000;
}

.portfolio-mascot__badge {
  top: 7px;
  right: 5px;
  width: 5px;
  height: 5px;
  background: var(--color-accent-strong);
}

.portfolio-mascot__arm {
  top: 48px;
  width: 8px;
  height: 23px;
  background: var(--color-accent-strong);
  transform-origin: 50% 4px;
}

.portfolio-mascot__arm--left {
  left: 11px;
  transform: rotate(12deg);
}

.portfolio-mascot__arm--right {
  right: 11px;
  transform: rotate(-12deg);
}

.portfolio-mascot__leg {
  top: 68px;
  width: 9px;
  height: 12px;
  background: #ffffff;
}

.portfolio-mascot__leg--left {
  left: 21px;
}

.portfolio-mascot__leg--right {
  right: 21px;
}

.portfolio-mascot__prop {
  opacity: 0;
  transform: translateY(2px);
  transition:
    opacity 160ms ease-out,
    transform 160ms ease-out;
}

.portfolio-mascot__prop--book {
  top: 51px;
  left: 13px;
  width: 38px;
  height: 18px;
  border: 2px solid var(--color-accent-strong);
  background:
    linear-gradient(to right, transparent 47%, var(--color-accent-strong) 47% 53%, transparent 53%),
    #050805;
}

.portfolio-mascot__prop--laptop {
  top: 54px;
  left: 12px;
  width: 40px;
  height: 19px;
  border: 2px solid #ffffff;
  background:
    linear-gradient(var(--color-accent-strong), var(--color-accent-strong)) 10px 7px / 20px 3px no-repeat,
    #050805;
  box-shadow: 0 5px 0 var(--color-accent-strong);
}

.portfolio-mascot__prop--terminal {
  top: 51px;
  left: 11px;
  width: 42px;
  height: 22px;
  border: 2px solid var(--color-accent-strong);
  background:
    linear-gradient(#ffffff, #ffffff) 7px 6px / 8px 2px no-repeat,
    #050805;
}

.portfolio-mascot__prop--terminal span {
  position: absolute;
  right: 7px;
  bottom: 6px;
  width: 8px;
  height: 3px;
  background: var(--color-accent-strong);
  animation: mascot-cursor 900ms steps(1, end) infinite;
}

.portfolio-mascot__prop--pointer {
  top: 39px;
  left: -5px;
  width: 26px;
  height: 8px;
  background: var(--color-accent-strong);
  box-shadow:
    -6px -4px 0 #ffffff,
    -6px 4px 0 #ffffff;
}

.portfolio-mascot__bubble {
  position: absolute;
  right: 0;
  bottom: -34px;
  width: max-content;
  max-width: min(260px, calc(100vw - 128px));
  border: 2px solid var(--color-accent-strong);
  background: #050805;
  box-shadow:
    4px 4px 0 #000000,
    0 0 22px rgba(57, 255, 106, 0.16);
  color: #ffffff;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25;
  padding: 8px 10px;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(8px);
}

.portfolio-mascot__bubble::after {
  position: absolute;
  top: -8px;
  right: 18px;
  width: 8px;
  height: 8px;
  background: var(--color-accent-strong);
  box-shadow: 2px -2px 0 #000000;
  content: "";
}

.portfolio-mascot--welcome {
  animation: mascot-welcome 900ms steps(7, end) both;
}

.portfolio-mascot--welcome .portfolio-mascot__bubble {
  animation: mascot-bubble 2600ms steps(1, end) 220ms both;
}

.portfolio-mascot--home .portfolio-mascot__arm--right,
.portfolio-mascot--contact .portfolio-mascot__arm--right {
  animation: mascot-wave 900ms steps(3, end) infinite;
  transform: rotate(-92deg);
}

.portfolio-mascot--about .portfolio-mascot__prop--book,
.portfolio-mascot--education .portfolio-mascot__prop--book,
.portfolio-mascot--experience .portfolio-mascot__prop--laptop,
.portfolio-mascot--projects .portfolio-mascot__prop--terminal,
.portfolio-mascot--skills .portfolio-mascot__prop--pointer {
  opacity: 1;
  transform: translateY(0);
}

.portfolio-mascot--about .portfolio-mascot__head,
.portfolio-mascot--education .portfolio-mascot__head,
.portfolio-mascot--experience .portfolio-mascot__head,
.portfolio-mascot--projects .portfolio-mascot__head {
  transform: translateY(2px);
}

.portfolio-mascot--about .portfolio-mascot__arm,
.portfolio-mascot--education .portfolio-mascot__arm,
.portfolio-mascot--experience .portfolio-mascot__arm,
.portfolio-mascot--projects .portfolio-mascot__arm {
  top: 52px;
  height: 15px;
}

.portfolio-mascot--skills .portfolio-mascot__arm--left {
  transform: rotate(78deg);
}

.portfolio-mascot--skills .portfolio-mascot__arm--right {
  transform: rotate(18deg);
}

.portfolio-mascot--moving .portfolio-mascot__sprite {
  animation: mascot-walk 340ms steps(2, end) infinite;
}

@keyframes mascot-welcome {
  from {
    opacity: 0;
    transform: translate3d(calc(var(--mascot-x) + 96px), var(--mascot-y), 0);
  }

  to {
    opacity: 1;
    transform: translate3d(var(--mascot-x), var(--mascot-y), 0);
  }
}

@keyframes mascot-bubble {
  0%,
  100% {
    opacity: 0;
    transform: translateY(8px);
  }

  12%,
  84% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes mascot-idle {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }
}

@keyframes mascot-walk {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

@keyframes mascot-wave {
  0%,
  100% {
    transform: rotate(-92deg);
  }

  50% {
    transform: rotate(-132deg);
  }
}

@keyframes mascot-blink {
  0%,
  92%,
  100% {
    transform: scaleY(1);
  }

  94% {
    transform: scaleY(0.2);
  }
}

@keyframes mascot-cursor {
  0%,
  55% {
    opacity: 1;
  }

  56%,
  100% {
    opacity: 0;
  }
}

@media (max-width: 1180px) {
  .portfolio-mascot {
    right: 14px;
    width: 68px;
    opacity: 0.86;
  }

  .portfolio-mascot__bubble {
    right: 0;
    bottom: -32px;
    max-width: min(230px, calc(100vw - 100px));
    font-size: 0.6875rem;
  }
}

@media (max-width: 767px) {
  .portfolio-mascot {
    top: auto;
    right: 12px;
    bottom: 14px;
    width: 44px;
    opacity: 0.72;
    transform: none;
  }

  .portfolio-mascot__bubble,
  .portfolio-mascot__prop {
    display: none;
  }

  .portfolio-mascot__sprite {
    transform: scale(0.88);
    transform-origin: right bottom;
  }

  .portfolio-mascot--moving .portfolio-mascot__sprite {
    animation: none;
  }

  .portfolio-mascot--welcome {
    animation: none;
  }
}

@media (max-width: 420px) {
  .portfolio-mascot {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-mascot,
  .portfolio-mascot *,
  .portfolio-mascot *::before,
  .portfolio-mascot *::after {
    animation: none !important;
    transition: none !important;
  }

  .portfolio-mascot {
    opacity: 0.72;
  }

  .portfolio-mascot__bubble {
    display: none;
  }
}
</style>
