<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Resume', href: '/resume.pdf', id: 'resume' },
]

const activeSection = ref('home')
const isMenuOpen = ref(false)
const headerElement = shallowRef<HTMLElement | null>(null)
const navElement = shallowRef<HTMLElement | null>(null)
const indicatorElement = shallowRef<HTMLElement | null>(null)
const progressElement = shallowRef<HTMLElement | null>(null)

const trackedSections = [
  { id: 'home', navId: 'home' },
  { id: 'about', navId: 'about' },
  { id: 'experience', navId: 'about' },
  { id: 'projects', navId: 'projects' },
  { id: 'skills', navId: 'projects' },
  { id: 'education', navId: 'projects' },
  { id: 'faq', navId: 'projects' },
  { id: 'contact', navId: 'contact' },
]

let frame = 0
let resizeObserver: ResizeObserver | null = null
let previousBodyOverflow = ''

const lockBodyScroll = () => {
  if (isMenuOpen.value) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousBodyOverflow
  }
}

const setActiveSection = (sectionId: string) => {
  if (sectionId !== 'resume') activeSection.value = sectionId
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleDocumentClick = (event: MouseEvent) => {
  if (!headerElement.value?.contains(event.target as Node)) {
    closeMenu()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    const wasOpen = isMenuOpen.value
    closeMenu()
    if (wasOpen) headerElement.value?.querySelector<HTMLButtonElement>('.site-header__toggle')?.focus()
  }
  if (event.key === 'Tab' && isMenuOpen.value) {
    const controls = Array.from(headerElement.value?.querySelectorAll<HTMLElement>('.site-header__toggle, .site-header__link, .site-header__contact') || [])
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
  }
}

const handleResize = () => {
  if (window.innerWidth > 760) {
    closeMenu()
  }
  scheduleHeaderUpdate()
}

const updateIndicator = () => {
  const nav = navElement.value
  const indicator = indicatorElement.value
  const target = nav?.querySelector<HTMLElement>(`[data-nav-id="${activeSection.value}"]`)

  if (!nav || !indicator || !target || activeSection.value === 'contact') {
    indicator?.classList.remove('site-header__indicator--visible')
    return
  }

  const navRect = nav.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  indicator.style.width = `${targetRect.width}px`
  indicator.style.transform = `translate3d(${targetRect.left - navRect.left}px, 0, 0)`
  indicator.classList.add('site-header__indicator--visible')
}

const updateHeaderState = () => {
  frame = 0
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight
  const progress = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 0
  if (progressElement.value) {
    progressElement.value.style.transform = `scaleX(${progress})`
  }

  const probe = window.scrollY + Math.min(window.innerHeight * .38, 360)
  let nextSection = 'home'
  trackedSections.forEach(({ id, navId }) => {
    const section = document.getElementById(id)
    if (!section) return
    const sectionTop = section.getBoundingClientRect().top + window.scrollY
    if (sectionTop <= probe) nextSection = navId
  })

  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    nextSection = 'contact'
  }
  if (activeSection.value !== nextSection) activeSection.value = nextSection
  else updateIndicator()
}

function scheduleHeaderUpdate() {
  if (!frame) frame = requestAnimationFrame(updateHeaderState)
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', scheduleHeaderUpdate, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  document.fonts.addEventListener('loadingdone', scheduleHeaderUpdate)
  resizeObserver = new ResizeObserver(scheduleHeaderUpdate)
  if (headerElement.value) resizeObserver.observe(headerElement.value)
  scheduleHeaderUpdate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  resizeObserver?.disconnect()
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', scheduleHeaderUpdate)
  window.removeEventListener('resize', handleResize)
  document.fonts.removeEventListener('loadingdone', scheduleHeaderUpdate)
  document.body.style.overflow = previousBodyOverflow
})

watch(activeSection, () => nextTick(updateIndicator), { flush: 'post' })

watch(isMenuOpen, (isOpen) => {
  lockBodyScroll()
  if (isOpen) {
    nextTick(() => requestAnimationFrame(() => {
      if (isMenuOpen.value) {
        navElement.value?.querySelector<HTMLElement>('.site-header__link')?.focus({ preventScroll: true })
      }
    }))
  }
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <span ref="progressElement" class="scroll-progress__bar" />
  </div>

  <header ref="headerElement" class="site-header">
    <a class="site-header__brand" href="#home" aria-label="Digvijaysinh Rajput, home" data-magnetic @click="setActiveSection('home')">DIGVIJAY<span>*</span></a>
    <button
      class="site-header__backdrop"
      :class="{ 'site-header__backdrop--open': isMenuOpen }"
      type="button"
      aria-label="Close primary navigation"
      tabindex="-1"
      @click="closeMenu"
    />

    <button
      class="site-header__toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="primary-navigation"
      :aria-label="isMenuOpen ? 'Close primary navigation' : 'Open primary navigation'"
      @click="toggleMenu"
    >
      <span class="site-header__toggle-line" aria-hidden="true" />
      <span class="site-header__toggle-line" aria-hidden="true" />
      <span class="site-header__toggle-line" aria-hidden="true" />
    </button>

    <nav
      id="primary-navigation"
      ref="navElement"
      class="site-header__nav"
      :class="{ 'site-header__nav--open': isMenuOpen }"
      aria-label="Primary"
    >
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="item.href"
        class="site-header__link"
        :data-nav-id="item.id"
        data-magnetic
        :class="{ 'site-header__link--active': activeSection === item.id }"
        :aria-current="activeSection === item.id ? 'location' : undefined"
        @click="setActiveSection(item.id)"
      >
        {{ item.label }}
      </a>
      <span ref="indicatorElement" class="site-header__indicator" aria-hidden="true" />
      <a
        href="#contact"
        class="site-header__contact"
        data-nav-id="contact"
        data-magnetic
        :class="{ 'site-header__contact--active': activeSection === 'contact' }"
        :aria-current="activeSection === 'contact' ? 'location' : undefined"
        @click="setActiveSection('contact')"
      >
        Contact me <span aria-hidden="true">→</span>
      </a>
    </nav>
  </header>
</template>
