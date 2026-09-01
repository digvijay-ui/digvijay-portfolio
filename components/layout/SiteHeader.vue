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

const activeSection = ref('about')
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
    closeMenu()
  }
}

const handleResize = () => {
  if (window.innerWidth > 900) {
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

  navItems.forEach((item) => {
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
        :aria-current="activeSection === item.id ? 'page' : undefined"
        @click="setActiveSection(item.id)"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: absolute;
  top: 16px;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0 20px;
  pointer-events: none;
}

.site-header__toggle {
  display: none;
}

.site-header__backdrop {
  display: none;
}

.site-header__nav {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid rgba(161, 161, 170, 0.22);
  border-radius: 999px;
  background: rgba(5, 8, 5, 0.9);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.36);
  padding: 6px;
  pointer-events: auto;
}

.site-header__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  border-radius: 999px;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1;
  padding: 10px 13px;
  text-decoration: none;
  transition:
    background 160ms ease-out,
    color 160ms ease-out,
    box-shadow 160ms ease-out;
  white-space: nowrap;
}

.site-header__link:hover,
.site-header__link:focus-visible,
.site-header__link--active {
  color: var(--color-accent);
}

@media (max-width: 900px) {
  .site-header {
    top: 12px;
    justify-content: flex-start;
    padding: 0 16px;
  }

  .site-header__toggle {
    position: relative;
    z-index: 2;
    display: inline-flex;
    width: 44px;
    height: 44px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 0;
    border-radius: 8px;
    background: rgba(5, 8, 5, 0.92);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.34);
    color: var(--color-accent);
    cursor: pointer;
    pointer-events: auto;
    transition:
      border-color 160ms ease-out,
      box-shadow 160ms ease-out;
  }

  .site-header__toggle:hover,
  .site-header__toggle:focus-visible,
  .site-header__toggle[aria-expanded='true'] {
    border-color: rgba(182, 255, 74, 0.78);
    box-shadow: 0 0 22px var(--color-accent-glow);
  }

  .site-header__toggle-line {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    transition:
      opacity 160ms ease-out,
      transform 160ms ease-out;
  }

  .site-header__toggle[aria-expanded='true'] .site-header__toggle-line:first-child {
    transform: translateY(7px) rotate(45deg);
  }

  .site-header__toggle[aria-expanded='true'] .site-header__toggle-line:nth-child(2) {
    opacity: 0;
  }

  .site-header__toggle[aria-expanded='true'] .site-header__toggle-line:last-child {
    transform: translateY(-7px) rotate(-45deg);
  }

  .site-header__nav {
    position: fixed;
    inset: 0 auto 0 0;
    display: grid;
    align-content: start;
    width: min(320px, calc(100vw - 64px));
    min-height: 100svh;
    justify-content: stretch;
    gap: 4px;
    border-right: 1px solid rgba(161, 161, 170, 0.22);
    border-radius: 0;
    background: rgb(5, 8, 5);
    box-shadow: 24px 0 60px rgba(0, 0, 0, 0.52);
    padding: 72px 14px 18px;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
    transition:
      opacity 160ms ease-out,
      transform 160ms ease-out;
    visibility: hidden;
  }

  .site-header__nav--open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  }

  .site-header__link {
    justify-content: flex-start;
    width: 100%;
    min-height: 42px;
    border-radius: 6px;
    font-size: 0.8125rem;
    padding: 11px 12px;
  }

  .site-header__link--active {
    background: rgba(182, 255, 74, 0.1);
  }

  .site-header__backdrop {
    position: fixed;
    inset: 0;
    display: block;
    border: 0;
    background: rgba(0, 0, 0, 0.56);
    cursor: pointer;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    transition: opacity 160ms ease-out;
    visibility: hidden;
  }

  .site-header__backdrop--open {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-header__link,
  .site-header__nav,
  .site-header__toggle,
  .site-header__toggle-line,
  .site-header__backdrop {
    transition: none;
  }
}

@media (max-width: 900px) and (scripting: none) {
  .site-header {
    justify-content: center;
    pointer-events: auto;
  }

  .site-header__toggle,
  .site-header__backdrop {
    display: none;
  }

  .site-header__nav {
    position: static;
    display: flex;
    width: min(100%, var(--content-width));
    min-height: 0;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid rgba(161, 161, 170, 0.22);
    border-radius: 999px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.36);
    padding: 6px;
    opacity: 1;
    pointer-events: auto;
    transform: none;
    visibility: visible;
  }

  .site-header__link {
    width: auto;
    min-height: 34px;
    border-radius: 999px;
    padding: 10px 13px;
  }
}
</style>
