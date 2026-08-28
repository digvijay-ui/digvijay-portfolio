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
  css: ['~/assets/css/main.css'],
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
