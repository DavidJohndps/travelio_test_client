export default {
  server: {
    host: process.env.NUXT_HOST,
    port: process.env.NUXT_PORT,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/css/uikit.min.css',
      },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit.min.js' },
      {
        src: 'https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit-icons.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    debug: false,
    proxy: true,
    browserBaseURL: '/api',
  },

  proxy: {
    '/api': {
      secure: false,
      target: process.env.API_URL,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: '/',
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
