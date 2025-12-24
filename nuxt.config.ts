// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    publicKey: process.env.PUBLIC_KEY,
    secretKey: process.env.SECRET_KEY,
  },
  devServer: {
    port: 8000
  },
  app: {
    head: {
      title: 'Vigelon Consulting - AI Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Vigelon Consulting helps businesses automate workflows, cut costs, and improve decision-making using AI.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-no-name.png' }
      ]
    },
    
  },

})
