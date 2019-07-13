
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Smart Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'msapplication-tap-highlight', content: 'no' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/img/favicon/favicon-32x32.png' },
      { rel: 'mask-icon', color: '#5bbad5', href: '/assets/img/favicon/safari-pinned-tab.svg' },
      { rel: 'stylesheet', href: '/assets/css/vendors.bundle.css', media: 'screen, print' },
      { rel: 'stylesheet', href: '/assets/css/app.bundle.css', media: 'screen, print' },
    ],
    script: [
      { src: '/assets/js/vendors.bundle.js', type: 'text/javascript', body: true },
      { src: '/assets/js/app.bundle.js', type: 'text/javascript', body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#886ab5' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  router: {
    linkActiveClas: 'active',
    linkExactActiveClass: 'active'
  }
}
