<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { portfolioData } from '~/data/portfolio'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const contact = portfolioData.contact

const emailHref = computed(() => `mailto:${contact.email}`)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value) {
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

  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="contact-section"
    :class="{ 'contact-section--visible': isVisible }"
    aria-labelledby="contact-title"
  >
    <div class="contact-section__inner">
      <div class="contact-section__meta-block">
        <p class="contact-section__meta">
          <span>06</span>
          <span>// Contact</span>
        </p>

        <p class="contact-section__command">ready-to-build? --say-hello</p>
      </div>

      <div class="contact-section__content">
        <div class="contact-section__intro">
          <h2 id="contact-title" class="contact-section__title">
            {{ contact.heading }}
          </h2>

          <p class="contact-section__description">
            {{ contact.description }}
          </p>
        </div>

        <dl class="contact-details" aria-label="Contact details">
          <div class="contact-details__item">
            <dt>Email</dt>
            <dd>
              <a :href="emailHref" class="contact-link contact-link--email">
                {{ contact.email }}
              </a>
            </dd>
          </div>

          <div class="contact-details__item">
            <dt>Phone</dt>
            <dd>
              <a :href="contact.phoneHref" class="contact-link">
                {{ contact.phone }}
              </a>
            </dd>
          </div>
        </dl>

        <div class="contact-socials" aria-label="Social links">
          <a
            v-for="link in portfolioData.socialLinks"
            :key="link.id"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-social"
          >
            {{ link.label }} ↗
          </a>
        </div>

        <dl class="contact-location" aria-label="Location">
          <div>
            <dt>Location</dt>
            <dd>{{ contact.location }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--color-page);
  padding: 150px 24px 136px;
}

.contact-section__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(48px, 8vw, 112px);
}

.contact-section__meta-block,
.contact-section__content {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1000ms ease-out,
    transform 1000ms ease-out;
}

.contact-section__content {
  display: grid;
  max-width: 900px;
  gap: 42px;
  transition-delay: 160ms;
}

.contact-section--visible .contact-section__meta-block,
.contact-section--visible .contact-section__content {
  opacity: 1;
  transform: translateY(0);
}

.contact-section__meta-block {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact-section__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.4;
}

.contact-section__meta span:first-child,
.contact-section__command {
  color: var(--color-accent);
}

.contact-section__meta span:last-child {
  color: var(--color-text-muted);
}

.contact-section__command {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
}

.contact-section__intro {
  display: grid;
  gap: 24px;
}

.contact-section__title {
  max-width: 11ch;
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: clamp(3.375rem, 7vw, 4.5rem);
  font-weight: 700;
  line-height: 0.98;
}

.contact-section__description {
  max-width: 56ch;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(1.0625rem, 1.6vw, 1.25rem);
  line-height: 1.7;
}

.contact-details {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(180px, 0.55fr);
  gap: 28px clamp(32px, 5vw, 72px);
  margin: 0;
}

.contact-details__item,
.contact-location div {
  display: grid;
  gap: 10px;
}

.contact-details dt,
.contact-location dt {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
}

.contact-details dd,
.contact-location dd {
  margin: 0;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  color: var(--color-text-primary);
  font-family: var(--font-mono);
  font-size: 0.9375rem;
  line-height: 1.6;
  text-decoration: none;
  transition: color 180ms ease-out;
}

.contact-link--email {
  overflow-wrap: anywhere;
}

.contact-link:hover,
.contact-link:focus-visible {
  color: var(--color-accent);
}

.contact-link:focus-visible,
.contact-social:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 5px;
}

.contact-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-social {
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text-primary);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1;
  padding: 13px 16px;
  text-decoration: none;
  transition:
    border-color 180ms ease-out,
    color 180ms ease-out,
    transform 180ms ease-out;
}

.contact-social:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
}

.contact-location {
  margin: 0;
}

.contact-location dd {
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
}

@media (max-width: 1023px) {
  .contact-section__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-section__meta-block {
    gap: 18px;
  }
}

@media (max-width: 767px) {
  .contact-section {
    padding: 88px 20px 92px;
  }

  .contact-section__content {
    gap: 36px;
  }

  .contact-section__title {
    font-size: clamp(2.25rem, 11vw, 2.75rem);
  }

  .contact-details {
    grid-template-columns: 1fr;
  }

  .contact-link {
    min-height: 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-section__meta-block,
  .contact-section__content {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .contact-social {
    transition: none;
  }

  .contact-social:hover {
    transform: none;
  }
}
</style>
