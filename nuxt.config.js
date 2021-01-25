export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Meja Belajar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
      { href: 'https://fonts.googleapis.com/css2?family=Ramabhadra&display=swap', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Delius&display=swap', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap', rel: 'stylesheet' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyD1tGHWscInaAjYRoDTWu8dbLp4yf0FjoA',
          authDomain: 'orion-smg.firebaseapp.com',
          databaseURL: 'https://orion-smg-default-rtdb.firebaseio.com',
          projectId: 'orion-smg',
          storageBucket: 'orion-smg.appspot.com',
          messagingSenderId: '689916496964',
          appId: '1:689916496964:web:9edf78556de496faf9c011'
        },
        services: {
          firestore: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
