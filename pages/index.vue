<script setup lang="ts">
import AboutSection from '~/components/sections/AboutSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import SectionThread from '~/components/sections/SectionThread.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <SectionThread />
    <ExperienceSection />
    <SectionThread />
    <ProjectsSection />
    <SkillsSection />
  </main>
</template>
