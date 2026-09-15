<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import PortfolioMascot from '~/components/PortfolioMascot.vue'
</script>

<template>
  <section id="home" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-meta mono"><span>Developer / Portfolio ’26</span><span class="availability"><i /> Open to opportunities</span></div>
    <div class="hero-composition">
      <div class="hero-statement">
        <p class="hero-name">{{ portfolioData.name }} <span>↘</span></p>
        <h1 id="hero-title"><span class="text-mask"><span>I build digital</span></span><span class="text-mask"><span>experiences</span></span><span class="text-mask"><span>that <em>feel</em> as good</span></span><span class="text-mask"><span>as they work<span class="green">.</span></span></span></h1>
      </div>
      <aside class="hero-note" aria-label="Developer profile">
        <div class="dev-fragment" aria-hidden="true">
          <div class="fragment-top mono"><span>interface.ts</span><span>↗</span></div>
          <div class="fragment-symbol">&lt;<span>/</span>&gt;</div>
          <div class="fragment-code mono"><span>01</span> thoughtful interfaces<br><span>02</span> reliable systems<br><span>03</span> details that matter</div>
          <div class="fragment-bottom"><span class="mono">Design → Code → Ship</span><PortfolioMascot /></div>
        </div>
        <p class="hero-role">{{ portfolioData.role }}</p>
        <p class="hero-location">{{ portfolioData.location }}</p>
        <p class="hero-stack mono">Vue · React · TypeScript · Node.js</p>
      </aside>
    </div>
    <div class="hero-bottom">
      <a href="#about" class="button button--primary" data-magnetic>Explore portfolio <span aria-hidden="true">↘</span></a>
      <a href="/resume.pdf" download class="text-link" data-magnetic>Download Resume <span aria-hidden="true">↓</span></a>
      <a :href="portfolioData.socialLinks[0].href" target="_blank" rel="noopener noreferrer" class="hero-github text-link" aria-label="Open Digvijaysinh Rajput's GitHub profile in a new tab">GitHub ↗</a>
      <span class="hero-scroll mono">Scroll to explore ↓</span>
    </div>
  </section>
</template>
