const productionSiteUrl = 'https://digvijay-portfolio-cyan.vercel.app'

export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  experimental: {
    appManifest: false,
  },
  features: {
    inlineStyles: false,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/main.css',
    '~/assets/css/hero.css',
    '~/assets/css/story.css',
  ],
  site: {
    url: productionSiteUrl,
  },
  runtimeConfig: {
    public: {
      siteUrl: productionSiteUrl,
    },
  },
  sitemap: {
    urls: ['/'],
  },
  robots: {
    allow: ['/'],
    sitemap: ['/sitemap.xml'],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Digvijaysinh Rajput | Full Stack Developer',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
})
