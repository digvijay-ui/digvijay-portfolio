<script setup lang="ts">
import FooterName from './FooterName.vue'
</script>

<template>
  <footer class="site-footer">
    <FooterName />
    <div class="site-footer__inner">
      <p>© 2026 Digvijaysinh Rajput</p>

      <p aria-hidden="true"></p>

      <a href="#home">Back to top ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-page);
  padding: 28px 24px;
}

.site-footer__inner {
  display: grid;
  width: min(100%, var(--content-width));
  margin: 0 auto;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 18px;
  align-items: center;
}

.site-footer p,
.site-footer a {
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
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
  transition: color 180ms ease-out;
}

.site-footer a:hover,
.site-footer a:focus-visible {
  color: var(--color-accent);
}

.site-footer a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 5px;
}

@media (max-width: 767px) {
  .site-footer {
    padding: 28px 20px;
  }

  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 12px;
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
