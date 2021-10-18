import * as packageJSON from './package.json'

export default {
  server: {
    port: packageJSON.port,
  },
  ssr: false,
  telemetry: false,
  components: true,
  target: 'static',
  head: {
    title: packageJSON.appName,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      },
      {
        hid: 'description',
        name: 'description',
        content: packageJSON.description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: packageJSON.keywords.join(','),
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['styles/main.scss'],
  plugins: ['~/plugins/material-ripple.js'],
  modules: ['@nuxtjs/pwa'],

  modern: process.env.NODE_ENV === 'production' && {
    server: true,
    client: true,
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    [
      'nuxt-purgecss',
      {
        enabled: true,
        content: [
          './plugins/**/*.js',
          './assets/**/*.scss',
          './pages/**/*.vue',
          './layouts/**/*.vue',
          './components/**/*.vue',
        ],
        whitelist: ['html', 'body'],
      },
    ],
    'nuxt-compress',
  ],
  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },
  build: {
    parallel: process.env.NODE_ENV !== 'production',
    extractCSS:
      process.env.NODE_ENV === 'production' ? { ignoreOrder: true } : false,

    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },

    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        cssnano: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      },
      order: 'presetEnvAndCssnanoLast',
      preset: {
        stage: 2,
      },
    },
  },
  render: {
    injectScripts: true,
    resourceHints: true,
  },
  pwa: {
    meta: {
      name: packageJSON.appName,
      author: packageJSON.author,
      appleStatusBarStyle: 'black',
      nativeUI: true,
      background_color: packageJSON.themeColor,
      theme_color: packageJSON.themeColor,
      status_bar: packageJSON.themeColor,
    },
    manifest: {
      name: packageJSON.appName,
      description: packageJSON.description,
      categories: packageJSON.categories,
      short_name: packageJSON.appName,
      lang: 'en-US',
      background_color: packageJSON.themeColor,
      theme_color: packageJSON.themeColor,
      status_bar: packageJSON.themeColor,
      display: 'standalone',
      start_url: '/',
      scope: '/',
      orientation: 'portrait',
      dir: 'ltr',
    },
    workbox: false,
  },

  loading: {
    color: '#aeacff',
    failedColor: '#ff8282',
    continuous: true,
    height: '2px',
  },

  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#C5C2FF',
    background: '#050514',
  },

  layoutTransition: {
    name: 'fade-shift',
    mode: 'out-in',
  },
}

