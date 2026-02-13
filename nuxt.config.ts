// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  app: {
    baseURL: '/',
    head: {
      title: 'Kosuke Ukita - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio website of a PhD candidate.' }
      ]
    }
  },
  compatibilityDate: '2025-01-01'
})