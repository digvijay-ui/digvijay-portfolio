export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  experimental: {
    appManifest: false,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
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
          name: 'description',
          content:
            'Portfolio of Digvijaysinh Rajput, a Full Stack Developer building responsive web applications and REST APIs with Vue.js, React, TypeScript, Node.js, PostgreSQL and MongoDB.',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          property: 'og:title',
          content: 'Digvijaysinh Rajput | Full Stack Developer',
        },
        {
          property: 'og:description',
          content:
            'Full-stack portfolio with Vue, React, TypeScript, Node.js and production-ready web apps.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    },
  },
})
