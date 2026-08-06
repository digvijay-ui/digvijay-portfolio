export default defineNuxtConfig({
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
      meta: [
        {
          name: 'description',
          content:
            'Full Stack Developer working with Vue, React, TypeScript and Node.js.',
        },
      ],
    },
  },
})
