import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@nuxt/eslint',
    '@nuxt/icon',
    'radix-vue',
    'vue3-carousel-nuxt',
    '@nuxt/fonts'
  ],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  // @ts-expect-error tailwind error
  tailwindcss: {
    viewer: false
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
          }
        }
      }
    }
  },
  eslint: {
    fix: true,
    lintOnStart: true
  }
})
