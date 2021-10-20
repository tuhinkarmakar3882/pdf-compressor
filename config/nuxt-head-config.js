import { appName, description } from '../package.json'

export const nuxtHeadConfig = {
  titleTemplate: `%s | ${appName}`,
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
      content: description,
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
}
