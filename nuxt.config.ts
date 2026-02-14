// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    '@nuxt/content'
  ],
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex']
    }
  },

  site: {
    url: 'https://Kosuke-ukita.github.io',
    name: 'Kosuke Ukita',
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Kosuke Ukita',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal website of a graduate student.' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-01-01'
})
