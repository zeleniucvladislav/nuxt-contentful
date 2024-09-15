import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxt/eslint'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  // @ts-expect-error apollo error
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
