// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2024-12-04',

 future: {
   compatibilityVersion: 4,
 },

 experimental: {

    },

  image: {
    domains: ['https://dummyjson.com'],
  },

 unhead: {
 
},

 devtools: { enabled: true },
 modules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/google-fonts',
  '@nuxt/icon',
  '@nuxt/image'
 ],
 googleFonts: {
  families: {
    Montserrat: true
  },
},


})