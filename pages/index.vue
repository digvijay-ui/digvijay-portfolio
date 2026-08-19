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
    <SiteFooter />
  </main>
</template>
