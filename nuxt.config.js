import colors from 'vuetify/es5/util/colors'
import i18n from './plugins/i18n'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Artgonautes',
    title: 'Artgonautes',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/maincss.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'fr',
         locales: [
           {
             code: 'fr',
             name: 'Français'
            },
            {
               code: 'en',
               name: 'English'
            }
          ],
        vueI18n: i18n
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options:{
        customProperties: true
      },
      dark: true,
      themes: {
        dark: {
          // bab3a2
          background: '#bab3a2',
          primary: '#4caf50',
          secondary: '#ff8c00',
          accent: '#9c27b0'
        }
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}


// dark: {
//   primary: colors.blue.darken2,
//   accent: colors.grey.darken3,
//   secondary: colors.amber.darken3,
//   info: colors.teal.lighten1,
//   warning: colors.amber.base,
//   error: colors.deepOrange.accent4,
//   success: colors.green.accent3
// }