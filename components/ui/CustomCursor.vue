<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'

const cursorElement = shallowRef<HTMLElement | null>(null)
const dotElement = shallowRef<HTMLElement | null>(null)
const ringElement = shallowRef<HTMLElement | null>(null)
const labelElement = shallowRef<HTMLElement | null>(null)

let dispose = () => {}

onMounted(() => {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const controller = new AbortController()
  const options = { passive: true, signal: controller.signal }
  let enabled = finePointer.matches && !reducedMotion.matches
  let frame = 0
  let targetX = 0
  let targetY = 0
  let ringX = 0
  let ringY = 0
  let hasPosition = false

  const render = () => {
    frame = 0
    ringX += (targetX - ringX) * .22
    ringY += (targetY - ringY) * .22
    ringElement.value?.style.setProperty('transform', `translate3d(${ringX}px, ${ringY}px, 0)`)

    if (Math.abs(targetX - ringX) > .1 || Math.abs(targetY - ringY) > .1) {
      frame = requestAnimationFrame(render)
    }
  }

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(render)
  }

  const updateTarget = (target: EventTarget | null) => {
    const element = target instanceof Element ? target : null
    const labelledTarget = element?.closest<HTMLElement>('[data-cursor-label]')
    const interactiveTarget = element?.closest<HTMLElement>('a, button, summary, [data-cursor]')
    const label = labelledTarget?.dataset.cursorLabel || ''

    cursorElement.value?.classList.toggle('custom-cursor--active', Boolean(interactiveTarget))
    cursorElement.value?.classList.toggle('custom-cursor--labelled', Boolean(label))
    if (labelElement.value) labelElement.value.textContent = label
  }

  const handlePointerMove = (event: PointerEvent) => {
    if (!enabled || event.pointerType !== 'mouse') return
    targetX = event.clientX
    targetY = event.clientY
    dotElement.value?.style.setProperty('transform', `translate3d(${targetX}px, ${targetY}px, 0)`)
    if (!hasPosition) {
      ringX = targetX
      ringY = targetY
      hasPosition = true
      document.documentElement.classList.add('custom-cursor-enabled')
    }
    cursorElement.value?.classList.add('custom-cursor--visible')
    updateTarget(event.target)
    schedule()
  }

  const hide = () => cursorElement.value?.classList.remove('custom-cursor--visible')
  const reset = () => {
    cancelAnimationFrame(frame)
    frame = 0
    hasPosition = false
    cursorElement.value?.classList.remove('custom-cursor--visible', 'custom-cursor--active', 'custom-cursor--labelled')
    document.documentElement.classList.remove('custom-cursor-enabled')
  }
  const updateMode = () => {
    enabled = finePointer.matches && !reducedMotion.matches
    if (!enabled) reset()
  }

  document.addEventListener('pointermove', handlePointerMove, options)
  document.documentElement.addEventListener('mouseleave', hide, options)
  window.addEventListener('blur', hide, options)
  finePointer.addEventListener('change', updateMode, options)
  reducedMotion.addEventListener('change', updateMode, options)

  dispose = () => {
    controller.abort()
    reset()
  }
})

onBeforeUnmount(() => dispose())
</script>

<template>
  <div ref="cursorElement" class="custom-cursor" aria-hidden="true">
    <span ref="dotElement" class="custom-cursor__dot" />
    <span ref="ringElement" class="custom-cursor__ring">
      <span ref="labelElement" class="custom-cursor__label" />
    </span>
  </div>
</template>

<style>
.custom-cursor {
  display: none;
}

@media (hover: hover) and (pointer: fine) {
  .custom-cursor {
    display: block;
  }

  .custom-cursor__dot,
  .custom-cursor__ring {
    position: fixed;
    z-index: 3000;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
  }

  .custom-cursor__dot {
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: var(--color-lime);
    box-shadow: 0 0 9px rgb(182 255 74 / 42%);
    transition: opacity var(--duration-fast) ease, scale var(--duration-fast) var(--ease);
  }

  .custom-cursor__ring {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border: 1px solid rgb(182 255 74 / 52%);
    border-radius: 50%;
    background: rgb(9 11 10 / 5%);
    box-shadow: 0 0 18px rgb(182 255 74 / 10%);
    transition:
      width var(--duration-base) var(--ease),
      height var(--duration-base) var(--ease),
      margin var(--duration-base) var(--ease),
      color var(--duration-fast) ease,
      background-color var(--duration-fast) ease,
      border-color var(--duration-fast) ease,
      opacity var(--duration-fast) ease;
  }

  .custom-cursor__label {
    color: var(--color-ink);
    font-family: var(--font-mono);
    font-size: .5625rem;
    font-weight: 600;
    letter-spacing: .08em;
    line-height: 1;
    opacity: 0;
    transform: scale(.8);
    transition: opacity var(--duration-fast) ease, transform var(--duration-fast) var(--ease);
  }

  .custom-cursor--visible .custom-cursor__dot,
  .custom-cursor--visible .custom-cursor__ring {
    opacity: 1;
  }

  .custom-cursor--active .custom-cursor__ring {
    width: 46px;
    height: 46px;
    margin: -23px 0 0 -23px;
    border-color: rgb(182 255 74 / 76%);
    background: rgb(9 11 10 / 28%);
  }

  .custom-cursor--active .custom-cursor__dot {
    scale: .72;
  }

  .custom-cursor--labelled .custom-cursor__ring {
    width: 64px;
    height: 64px;
    margin: -32px 0 0 -32px;
    border-color: var(--color-lime);
    background: var(--color-lime);
    box-shadow: 0 0 26px rgb(182 255 74 / 18%);
  }

  .custom-cursor--labelled .custom-cursor__label {
    opacity: 1;
    transform: scale(1);
  }

  html.custom-cursor-enabled,
  html.custom-cursor-enabled body,
  html.custom-cursor-enabled a,
  html.custom-cursor-enabled button,
  html.custom-cursor-enabled summary,
  html.custom-cursor-enabled [data-cursor] {
    cursor: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .custom-cursor {
    display: none !important;
  }
}
</style>
