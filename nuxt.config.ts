// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['@unocss/reset/tailwind.css'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'vitesse-black',
        },
      },
    },
  },
})
