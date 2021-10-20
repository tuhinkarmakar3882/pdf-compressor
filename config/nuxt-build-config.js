export const nuxtBuildConfig = {
  parallel: process.env.NODE_ENV !== 'production',
  extractCSS:
    process.env.NODE_ENV === 'production' ? { ignoreOrder: true } : false,

  splitChunks: {
    layouts: process.env.NODE_ENV === 'production',
    pages: process.env.NODE_ENV === 'production',
    commons: process.env.NODE_ENV === 'production',
  },

  postcss: {
    order: 'presetEnvAndCssnanoLast',
    preset: {
      stage: 2,
      autoprefixer: true,
    },
  },
}
