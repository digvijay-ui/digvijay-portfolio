<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const technologies = [
  { name: 'TypeScript', icon: '/images/skills/typescript.svg' },
  { name: 'JavaScript', icon: '/images/skills/javascript.svg' },
  { name: 'React', icon: '/images/skills/react.svg' },
  { name: 'Vue.js', icon: '/images/skills/vue.svg' },
  { name: 'Next.js', icon: '/images/skills/nextjs.svg' },
  { name: 'Node.js', icon: '/images/skills/nodejs.svg' },
  { name: 'Express.js', icon: '/images/skills/expressjs.svg' },
  { name: 'Tailwind CSS', icon: '/images/skills/tailwindcss.svg' },
  { name: 'Pinia', icon: '/images/skills/pinia.svg' },
  { name: 'Redux', icon: '/images/skills/redux.svg' },
  { name: 'PostgreSQL', icon: '/images/skills/postgresql.svg' },
  { name: 'MongoDB', icon: '/images/skills/mongodb.svg' },
  { name: 'Git', icon: '/images/skills/git.svg' },
  { name: 'GitHub', icon: '/images/skills/github.svg' },
  { name: 'Docker', icon: '/images/skills/docker.svg' },
  { name: 'Linux', icon: '/images/skills/linux.svg' },
  { name: 'Vercel', icon: '/images/skills/vercel.svg' },
  { name: 'Postman', icon: '/images/skills/postman.svg' },
  { name: 'Jest', icon: '/images/skills/jest.svg' },
  { name: 'Python', icon: '/images/skills/python.svg' },
  { name: 'HTML5', icon: '/images/skills/html5.svg' },
  { name: 'CSS3', icon: '/images/skills/css3.svg' },
  { name: 'Vite', icon: '/images/skills/vite.svg' },
  { name: 'Axios', icon: '/images/skills/axios.svg' },
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  const section = sectionRef.value

  if (!(section instanceof Element)) {
    return
  }

  if (!('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: 0.16,
    },
  )

  observer.observe(section)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    id="skills"
    ref="sectionRef"
    class="skills-section"
    :class="{ 'skills-section--visible': isVisible }"
    aria-labelledby="skills-title"
  >
    <div class="skills-section__inner">
      <header class="skills-section__heading">
        <p class="skills-section__meta">
          <span>04</span>
          <span> Skills</span>
        </p>
        <p class="skills-section__label">TECH STACK</p>
        <h2 id="skills-title" class="skills-section__title">Core Technologies.</h2>
      </header>

      <ul class="skills-section__grid" aria-label="Core technologies">
        <li
          v-for="technology in technologies"
          :key="technology.name"
          class="skills-section__item"
        >
          <img
            class="skills-section__icon"
            :src="technology.icon"
            alt=""
            aria-hidden="true"
            width="42"
            height="42"
            loading="lazy"
          />
          <span class="skills-section__name">{{ technology.name }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background: var(--color-page);
  padding: clamp(92px, 11vw, 144px) 24px clamp(104px, 12vw, 156px);
}

.skills-section__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  gap: clamp(46px, 6vw, 70px);
}

.skills-section__heading,
.skills-section__grid {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1000ms ease-out,
    transform 1000ms ease-out;
  will-change: opacity, transform;
}

.skills-section--visible .skills-section__heading,
.skills-section--visible .skills-section__grid {
  opacity: 1;
  transform: translateY(0);
}

.skills-section__grid {
  display: grid;
  width: min(100%, 1040px);
  grid-template-columns: repeat(auto-fit, minmax(72px, 78px));
  justify-content: center;
  gap: clamp(34px, 4vw, 52px) clamp(24px, 4vw, 44px);
  padding: 0;
  margin: 0;
  list-style: none;
  transition-delay: 160ms;
}

.skills-section__heading {
  display: grid;
  justify-items: center;
  gap: 14px;
  text-align: center;
}

.skills-section__meta {
  display: inline-flex;
  gap: 10px;
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.4;
}

.skills-section__meta span:first-child {
  color: var(--color-accent);
}

.skills-section__label {
  margin: 0;
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
}

.skills-section__title {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 7vw, 5rem);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
}

.skills-section__item {
  display: grid;
  justify-items: center;
  gap: 12px;
  min-width: 0;
  color: var(--color-text-muted);
}

.skills-section__icon {
  width: clamp(36px, 4vw, 44px);
  height: clamp(36px, 4vw, 44px);
  object-fit: contain;
  transition:
    filter 180ms ease-out,
    transform 180ms ease-out;
}

.skills-section__name {
  max-width: 100%;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  line-height: 1.3;
  text-align: center;
  overflow-wrap: anywhere;
}

.skills-section__item:hover .skills-section__icon,
.skills-section__item:focus-within .skills-section__icon {
  filter: drop-shadow(0 0 14px rgba(182, 255, 74, 0.2))
    drop-shadow(0 0 16px rgba(255, 255, 255, 0.08));
  transform: translateY(-2px);
}

@media (max-width: 1023px) {
  .skills-section__grid {
    width: min(100%, 720px);
    grid-template-columns: repeat(auto-fit, minmax(70px, 76px));
  }
}

@media (max-width: 767px) {
  .skills-section {
    padding: 76px 20px 94px;
  }

  .skills-section__inner {
    gap: 42px;
  }

  .skills-section__grid {
    grid-template-columns: repeat(3, minmax(70px, 1fr));
    gap: 32px 18px;
  }

  .skills-section__title {
    font-size: clamp(2.5rem, 13vw, 4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skills-section__heading,
  .skills-section__grid,
  .skills-section__icon {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
