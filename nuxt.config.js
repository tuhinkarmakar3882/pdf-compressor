import * as packageJSON from './package.json'
import { nuxtHeadConfig } from './config/nuxt-head-config'
import { nuxtBuildConfig } from './config/nuxt-build-config'

export default {
  server: {
    host: packageJSON.host,
    port: packageJSON.port,
  },
  ssr: false,
  telemetry: false,
  components: true,
  target: 'static',
  css: ['styles/main.scss'],
  plugins: ['~/plugins/material-ripple.js'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
  ],

  modern: {
    client: true,
  },

  generate: {
    fallback: true,
  },

  build: nuxtBuildConfig,
  render: {
    injectScripts: true,
    resourceHints: true,
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

  pageTransition: {
    name: 'slide-left',
    mode: 'out-in',
  },

  head: nuxtHeadConfig,
}
