// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    '@nuxt/content'
  ],

  site: {
    url: 'https://Kosuke-ukita.github.io',
    name: 'Kosuke Ukita - Portfolio',
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Kosuke Ukita - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio website of a graduate student.' }
      ]
    }
  },

  sitemap: {
    sources: [
      '/api/sitemap'
    ]
  },

  compatibilityDate: '2025-01-01'
})