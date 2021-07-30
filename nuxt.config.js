export default {
  server: {
    port: 8088, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    timing: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sam Zuga Exchange',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // scrollbar
    '@/assets/plugins/jquery-scrollbar/jquery.scrollbar.css',
    // select2
    '@/assets/plugins/select2/css/select2.min.css',
    // main stylesheet
    '@/assets/pages/css/themes/modern.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
  ],

  device: {
    refreshOnResize: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://dev.auth.nuxtjs.org
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://strapi.nuxtjs.org/setup
    // '@nuxtjs/strapi',
    // https://github.com/fncolon/nuxt-web3
    'nuxt-web3',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    prefix: 'http://localhost:3000',
    proxy: true,
    credentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },

  proxy: {
    // Simple proxy
    "/api/": {
      target: "http://127.0.0.1:3000",
      pathRewrite: { "^/api": "/" }
    }
    // '/api': 'http://127.0.0.1:3000/api/v1',
    // '/laravel': {
    //   target: 'https://laravel-auth.nuxtjs.app',
    //   pathRewrite: { '^/laravel': '/' }
    // }
  },

  auth: {
    strategies: {
      cookie: {
        token: {
          property: "data.token",
          required: true,
          type: "Bearer",
        },
        cookie: {
          // (optional) If set we check this cookie exsistence for loggedIn check
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get' },
          // (optional) If set, we send a get request to this endpoint before login
          csrf: {
            url: '/api/getcsrftoken'
          }
        }
      },
      local: {
        token: {
          property: 'token',
          global: true,
          required: false,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: '/profile'
    }
  },
  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.BASE_URL
  //   }
  // },

  router: {
    // middleware: ['auth'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
