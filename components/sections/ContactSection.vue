<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
const contact = portfolioData.contact
const emailHref = `mailto:${contact.email}`
</script>

<template>
  <section
    id="contact"
    class="contact-section"
    aria-labelledby="contact-title"
  >
    <div class="contact-section__inner">
      <div class="contact-section__meta-block">
        <p class="contact-section__meta">
          <span>06</span>
          <span>Contact</span>
        </p>

        <span class="contact-arrow" aria-hidden="true">↗</span>
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
              <a
                :href="emailHref"
                class="contact-link contact-link--email"
                aria-label="Email Digvijaysinh Rajput"
              >
                {{ contact.email }}
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
            :aria-label="`Open Digvijaysinh Rajput's ${link.label} profile in a new tab`"
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
