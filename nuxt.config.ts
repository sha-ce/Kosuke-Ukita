// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/Kosuke-Ukita/',
    head: {
      title: 'Researcher Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio website of a PhD candidate.' }
      ]
    }
  },
  compatibilityDate: '2025-01-01'
})