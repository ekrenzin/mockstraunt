import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      
      title: 'Mock Restaurant',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Ean Krenzin-Blanks\'s personal website!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.svg' }
      ]
    },
  },
  build: {
    transpile: [
      '@emailjs/browser',
    ],
  },
})
