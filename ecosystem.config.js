module.exports = {
  apps: [
    {
      name: 'NUXT_APP_NAME',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        HOST: '127.0.0.1',
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
}
