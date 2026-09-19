<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'

const letters = [...'DIGVIJAY']
const nameArea = shallowRef<HTMLElement | null>(null)
let dispose = () => {}

onMounted(() => {
  const area = nameArea.value!
  const anchors = [...area.querySelectorAll<HTMLElement>('.footer-name__letter')]
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  const controller = new AbortController()
  const options = { passive: true, signal: controller.signal }
  const weights = letters.map(() => 0)
  let centers: number[] = []
  let bounds = area.getBoundingClientRect()
  let geometryDirty = true
  let frame = 0
  let previousTime = 0
  let visible = false
  let inside = false
  let cursorX = 0
  let cursorY = 0

  const render = (time: number) => {
    frame = 0
    if (motion.matches || !visible || document.hidden) return
    // Read stable letter anchors together, only after layout or scroll changes.
    if (geometryDirty) {
      bounds = area.getBoundingClientRect()
      centers = anchors.map((anchor) => {
        const rect = anchor.getBoundingClientRect()
        return rect.left + rect.width / 2
      })
      geometryDirty = false
    }
    const delta = previousTime ? Math.min(time - previousTime, 64) : 16.67
    previousTime = time
    const blend = 1 - Math.exp(-delta / 110)
    const radius = bounds.width * 0.24
    const amplitude = Math.min(1, bounds.width / 1000)
    let unsettled = false

    anchors.forEach((anchor, index) => {
      const distance = Math.hypot(cursorX - centers[index], (cursorY - bounds.top - bounds.height / 2) * 0.65)
      const proximity = inside ? Math.max(0, 1 - distance / radius) : 0
      const target = proximity * proximity * (3 - 2 * proximity)
      weights[index] += (target - weights[index]) * blend
      if (Math.abs(target - weights[index]) < 0.001) weights[index] = target
      else unsettled = true
      const weight = weights[index]
      const skew = Math.max(-1, Math.min(1, (cursorX - centers[index]) / radius)) * weight * 0.8
      anchor.style.setProperty('--letter-activation', weight.toFixed(4))
      anchor.style.setProperty('--letter-lift', `${(-7 * amplitude * weight).toFixed(3)}px`)
      anchor.style.setProperty('--letter-scale', (1 + weight * 0.018).toFixed(4))
      anchor.style.setProperty('--letter-skew', `${skew.toFixed(3)}deg`)
    })
    if (unsettled) schedule()
    else previousTime = 0
  }

  const schedule = () => {
    if (!frame && !motion.matches && visible && !document.hidden) frame = requestAnimationFrame(render)
  }
  const leave = () => { inside = false; schedule() }
  const refresh = () => { geometryDirty = true; schedule() }
  const reset = () => {
    cancelAnimationFrame(frame)
    frame = 0
    previousTime = 0
    inside = false
    weights.fill(0)
    anchors.forEach(anchor => anchor.removeAttribute('style'))
  }
  const updateActivity = () => {
    area.dataset.ambient = String(visible && !document.hidden && !motion.matches)
    if (!visible || document.hidden || motion.matches) reset()
    else refresh()
  }

  area.addEventListener('pointermove', (event) => {
    if (motion.matches || !pointer.matches || event.pointerType !== 'mouse') return
    inside = true
    cursorX = event.clientX
    cursorY = event.clientY
    schedule()
  }, options)
  area.addEventListener('pointerleave', leave, options)
  area.addEventListener('pointercancel', leave, options)
  window.addEventListener('blur', leave, options)
  // Scrolling cannot leave a stale hover behind when the footer moves away.
  window.addEventListener('scroll', () => { leave(); refresh() }, options)
  window.addEventListener('resize', refresh, options)
  document.addEventListener('visibilitychange', updateActivity, options)
  motion.addEventListener('change', updateActivity, options)
  pointer.addEventListener('change', leave, options)
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    updateActivity()
  })
  observer.observe(area)
  const resizeObserver = new ResizeObserver(refresh)
  resizeObserver.observe(area)
  document.fonts.addEventListener('loadingdone', refresh, options)

  dispose = () => {
    controller.abort()
    observer.disconnect()
    resizeObserver.disconnect()
    cancelAnimationFrame(frame)
  }
})

onBeforeUnmount(() => dispose())
</script>

<template>
  <div class="footer-signature">
    <div class="footer-signature__meta">
      <span>Full stack developer</span>
      <span class="footer-signature__location">Bengaluru <span aria-hidden="true">↗</span></span>
    </div>

    <div ref="nameArea" class="footer-name" data-ambient="false">
      <h2 class="footer-name__word" aria-label="Digvijay">
        <span
          v-for="(letter, index) in letters"
          :key="index"
          class="footer-name__letter"
          aria-hidden="true"
        >
          <span class="footer-name__ghost">{{ letter }}</span>
          <span class="footer-name__face">
            {{ letter }}
            <span class="footer-name__green">{{ letter }}</span>
          </span>
        </span>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.footer-signature {
  --signature-green: var(--color-accent);
  container-type: inline-size;
  width: 100%;
  margin: 0 auto clamp(24px, 4vw, 64px);
  color: var(--color-ivory);
}

.footer-signature__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2xs) var(--space-md);
  padding-top: clamp(8px, 1.5vw, 24px);
  font-family: var(--font-mono);
  font-size: var(--text-label);
  line-height: 1.5;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
}

.footer-signature__location > span {
  display: inline-block;
  margin-left: 8px;
  color: var(--signature-green);
}

.footer-name {
  padding-top: clamp(20px, 3vw, 48px);
}

.footer-name__word {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 0.025em 0.13em 0;
  font-family: var(--font-display);
  font-size: 22vw;
  font-size: 21cqw;
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.055em;
  user-select: none;
}

.footer-name__letter {
  position: relative;
  display: block;
  flex: 0 0 auto;
}

.footer-name__face {
  position: relative;
  display: block;
  transform-origin: 50% 85%;
  transform: translate3d(0, var(--letter-lift, 0px), 0) scale(var(--letter-scale, 1)) skewX(var(--letter-skew, 0deg));
}

.footer-name__green,
.footer-name__ghost {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.footer-name__green {
  color: var(--signature-green);
  opacity: var(--letter-activation, 0);
  /* The glow is rasterized with its glyph; only the layer's opacity changes. */

}

.footer-name__ghost {
  color: transparent;
  -webkit-text-stroke: 0;
  transform: translate(0.008em, 0.025em);
}

@media (prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine) {
  .footer-name[data-ambient="true"] .footer-name__green {
    will-change: opacity;
  }
}



@media (prefers-reduced-motion: reduce) {
  .footer-name__face { transform: none; }
  .footer-name__green { opacity: 0; }
}
</style>
