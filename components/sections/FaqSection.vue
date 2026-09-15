<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
const questions = [
  { question: 'What kind of role are you looking for?', answer: 'I am currently seeking Full Stack Developer or Frontend Developer roles in Bengaluru.' },
  { question: 'What are you working on currently?', answer: portfolioData.about.paragraphs[0] },
  { question: 'What does your development experience cover?', answer: 'Responsive Vue.js and React interfaces, REST APIs and reliable full-stack features. At Brainzym, my work includes admin dashboard components, form validation, student login flows, PostgreSQL schema changes and bulk CSV imports.' },
  { question: 'Where can I find your resume and get in touch?', answer: '' },
]
</script>

<template>
  <section id="faq" class="faq-section" aria-labelledby="faq-title">
    <div class="faq-section__inner">
      <div><p class="section-heading__meta"><span class="section-heading__number">Q&A</span><span>For recruiters</span></p><h2 id="faq-title" class="section-heading__title">A few things<br>worth knowing.</h2></div>
      <div class="faq-list"><details v-for="(item, index) in questions" :key="item.question"><summary><span class="mono">0{{ index + 1 }}</span>{{ item.question }}<span class="faq-toggle" aria-hidden="true">+</span></summary><p v-if="item.answer">{{ item.answer }}</p><p v-else><a href="/resume.pdf" download>Download my resume</a> or email <a :href="`mailto:${portfolioData.email}`">{{ portfolioData.email }}</a>.</p></details></div>
    </div>
  </section>
</template>
