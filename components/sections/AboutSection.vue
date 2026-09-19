<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import AnimatedStat from '~/components/ui/AnimatedStat.vue'

const systemLayers = [
  { number: '01', label: 'Interface', stack: 'Vue · React' },
  { number: '02', label: 'API layer', stack: 'Node · Express' },
  { number: '03', label: 'Data', stack: 'PostgreSQL · MongoDB' },
]
</script>

<template>
  <section
    id="about"
    class="about-section"
    aria-labelledby="about-title"
  >
    <div class="about-section__inner">
      <div class="about-section__heading">
        <SectionHeading
          number="01"
          label="About"
          :title="portfolioData.about.heading"
        />
      </div>

      <p class="about-section__statement">
        {{ portfolioData.about.statement }}
      </p>

      <div class="about-section__copy">
        <p
          v-for="paragraph in portfolioData.about.paragraphs"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>

      <figure class="about-system" aria-labelledby="about-system-caption">
        <div class="about-system__toolbar" aria-hidden="true">
          <span class="about-system__lights">● ○ ○</span>
          <code>~/product/delivery.system</code>
          <span class="about-system__status">ready</span>
        </div>

        <div class="about-system__canvas">
          <svg class="about-system__connections" viewBox="0 0 720 280" preserveAspectRatio="none" aria-hidden="true">
            <path d="M188 58 H278 C306 58 306 140 334 140 H414" />
            <path d="M490 140 H532 C560 140 560 222 588 222 H650" />
          </svg>
          <div
            v-for="(layer, index) in systemLayers"
            :key="layer.label"
            class="about-system__node"
            :class="`about-system__node--${index + 1}`"
          >
            <span>{{ layer.number }} / {{ layer.label }}</span>
            <strong>{{ layer.stack }}</strong>
          </div>
          <span class="about-system__packet about-system__packet--one" aria-hidden="true" />
          <span class="about-system__packet about-system__packet--two" aria-hidden="true" />
        </div>

        <figcaption id="about-system-caption">
          One delivery path—from interface decisions to reliable data flows.
        </figcaption>
      </figure>

      <dl class="quick-facts" aria-label="Developer facts">
        <div
          v-for="(fact, index) in portfolioData.quickFacts"
          :key="fact.id"
          class="quick-fact"
        >
          <span class="quick-fact__index" aria-hidden="true">0{{ index + 1 }}</span>
          <dt>{{ fact.label }}</dt>
          <dd><AnimatedStat :value="fact.value" /></dd>
        </div>
      </dl>
    </div>
  </section>
</template>
