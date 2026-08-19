<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const activeSection = ref('about')

let observer: IntersectionObserver | null = null

const setActiveSection = (sectionId: string) => {
  activeSection.value = sectionId
}

onMounted(() => {
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
})
</script>

<template>
  <header class="site-header" aria-label="Primary">
    <nav class="site-header__nav">
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

@media (max-width: 767px) {
  .site-header {
    top: 10px;
    padding: 0 12px;
  }

  .site-header__nav {
    width: min(100%, 460px);
    border-radius: 24px;
    gap: 2px;
    padding: 5px;
  }

  .site-header__link {
    flex: 1 1 30%;
    min-width: 86px;
    min-height: 32px;
    font-size: 0.75rem;
    padding: 9px 8px;
  }
}

@media (max-width: 420px) {
  .site-header__link {
    min-width: 80px;
    font-size: 0.71875rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-header__link {
    transition: none;
  }
}
</style>
