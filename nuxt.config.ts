export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxt/content'
  ],
  plugins: [
  ]
})
