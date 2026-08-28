<script setup lang="ts">
import AboutSection from '~/components/sections/AboutSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import EducationSection from '~/components/sections/EducationSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import SectionThread from '~/components/sections/SectionThread.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'

const seoDescription =
  'Full Stack Developer in Bengaluru specializing in Vue.js, React, TypeScript, Node.js, PostgreSQL and MongoDB. Explore my experience, projects and technical skills.'
const runtimeConfig = useRuntimeConfig()
const siteUrl = String(runtimeConfig.public.siteUrl)
const homepageUrl = new URL('/', siteUrl).toString()
const socialImageUrl =
  'https://digvijay-portfolio-cyan.vercel.app/og-image-v2.png'
const socialImageAlt =
  'Open Graph image for Digvijaysinh Rajput, Full Stack Developer, featuring Vue, React, TypeScript, Node.js and PostgreSQL'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Digvijaysinh Rajput',
  jobTitle: 'Full Stack Developer',
  homeLocation: {
    '@type': 'Place',
    name: 'Bengaluru, Karnataka, India',
  },
  sameAs: [
    'https://github.com/digvijay-ui',
    'https://linkedin.com/in/rajput-digvijaysinh-7515b4254',
  ],
  knowsAbout: [
    'Vue.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'REST APIs',
  ],
}

useSeoMeta({
  title: 'Digvijaysinh Rajput | Full Stack Developer',
  description: seoDescription,
  ogTitle: 'Digvijaysinh Rajput | Full Stack Developer',
  ogDescription: seoDescription,
  ogType: 'website',
  ogUrl: homepageUrl,
  ogImage: socialImageUrl,
  ogImageAlt: socialImageAlt,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Digvijaysinh Rajput | Full Stack Developer',
  twitterDescription: seoDescription,
  twitterImage: socialImageUrl,
  twitterImageAlt: socialImageAlt,
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: homepageUrl,
    },
  ],
  script: [
    {
      key: 'person-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personSchema),
    },
  ],
})
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <SiteHeader />

  <main id="main-content" tabindex="-1">
    <HeroSection />
    <AboutSection />
    <SectionThread />
    <ExperienceSection />
    <SectionThread />
    <ProjectsSection />
    <SectionThread />
    <SkillsSection />
    <SectionThread />
    <EducationSection />
    <SectionThread />
    <ContactSection />
  </main>

  <SiteFooter />
</template>
