<script setup lang="ts">
import FooterName from './FooterName.vue'
</script>

<template>
  <footer class="site-footer">
    <FooterName />
    <div class="site-footer__inner">
      <p>© 2026 Digvijaysinh Rajput</p>

      <p>Thoughtfully built. Down to the details.</p>

      <a href="#home">Back to top ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-page);
  padding: var(--space-lg) var(--page-gutter);
}

.site-footer__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: var(--space-sm);
  align-items: center;
}

.site-footer p,
.site-footer a {
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: var(--text-label);
  line-height: 1.5;
}

.site-footer p:nth-child(2) {
  justify-self: center;
  text-align: center;
}

.site-footer a {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  justify-self: end;
  text-decoration: none;
  transition: color var(--duration-fast) ease-out;
}

.site-footer a:hover,
.site-footer a:focus-visible {
  color: var(--color-accent);
}

.site-footer a:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

@media (max-width: 767px) {
  .site-footer {
    padding: var(--space-lg) var(--page-gutter);
  }

  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: var(--space-xs);
  }

  .site-footer p:nth-child(2),
  .site-footer a {
    justify-self: start;
    text-align: left;
  }

  .site-footer a {
    min-height: 44px;
  }
}
</style>
