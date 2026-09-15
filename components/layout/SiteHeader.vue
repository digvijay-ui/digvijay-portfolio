<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const activeSection = ref('home')
const isMenuOpen = ref(false)
const headerElement = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

const lockBodyScroll = () => {
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const setActiveSection = (sectionId: string) => {
  activeSection.value = sectionId
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
    const controls = Array.from(headerElement.value?.querySelectorAll<HTMLElement>('.site-header__toggle, .site-header__link') || [])
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
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)

  if (!('IntersectionObserver' in window)) {
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((current, next) => next.intersectionRatio - current.intersectionRatio)[0]

      if (visibleEntry?.target.id) {
        activeSection.value = visibleEntry.target.id
      }
    },
    {
      rootMargin: '-35% 0px -45% 0px',
      threshold: [0.08, 0.18, 0.32],
    },
  )

  const observedSections = [{ id: 'home' }, ...navItems]
  observedSections.forEach((item) => {
    const section = document.getElementById(item.id)

    if (section) {
      observer?.observe(section)
    }
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})

watch(isMenuOpen, () => {
  lockBodyScroll()
})
</script>

<template>
  <header ref="headerElement" class="site-header">
    <a class="site-header__brand" href="#home" aria-label="Digvijaysinh Rajput, home" @click="closeMenu">d<span>.</span><span class="brand-caption">DIGVIJAY<br>RAJPUT</span></a>
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
      aria-label="Toggle primary navigation"
      @click="toggleMenu"
    >
      <span class="site-header__toggle-line" aria-hidden="true" />
      <span class="site-header__toggle-line" aria-hidden="true" />
      <span class="site-header__toggle-line" aria-hidden="true" />
    </button>

    <nav
      id="primary-navigation"
      class="site-header__nav"
      :class="{ 'site-header__nav--open': isMenuOpen }"
      aria-label="Primary"
    >
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="item.href"
        class="site-header__link"
        :class="{ 'site-header__link--active': activeSection === item.id }"
        :aria-current="activeSection === item.id ? 'location' : undefined"
        @click="setActiveSection(item.id)"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
