<template>
  <div class="nav-bar-component">
    <nuxt-link v-slot="{ navigate }" to="/" custom v-ripple>
      <h1 @click="navigate">{{ appName }}</h1>
    </nuxt-link>

    <aside>
      <i
        :class="getThemeIcon"
        class="mdi mdi-36px"
        @click="changeTheme"
        v-ripple
      />

      <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">
        <i class="mdi mdi-linkedin mdi-36px" v-ripple />
      </a>
    </aside>
  </div>
</template>

<script>
import * as packageJSON from '~/package.json'

export default {
  name: 'Navbar',

  data() {
    return {
      appName: packageJSON.appName,
      currentTheme: 'light',
    }
  },

  computed: {
    getThemeIcon() {
      if (this.currentTheme === 'light') return 'mdi-weather-night '
      return 'mdi-white-balance-sunny '
    },
  },

  mounted() {
    this.checkForColorPreference()
  },
  methods: {
    updateColorPreference(theme) {
      localStorage.setItem('theme', theme)
      this.currentTheme = theme
    },

    checkForColorPreference() {
      const preferredTheme = localStorage.getItem('theme')

      switch (preferredTheme) {
        case 'light':
          document.body.classList.add('light-theme')
          document.body.classList.remove('dark-theme')
          this.currentTheme = 'light'
          break
        case 'dark':
          document.body.classList.remove('light-theme')
          document.body.classList.add('dark-theme')
          this.currentTheme = 'dark'
          break
        default:
          console.log('No Preferred Theme Found.')
      }
    },
    changeTheme() {
      if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        this.updateColorPreference('dark')
      } else {
        document.body.classList.add('light-theme')
        document.body.classList.remove('dark-theme')
        this.updateColorPreference('light')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-bar-component {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--nav-bar-color);
  height: var(--top-nav-size);
  padding-left: var(--spacing-milli);

  h1 {
    font-family: var(--brand-icon-font);
    margin: 0 auto 0 0;
    font-size: var(--spacing-large);
    line-height: 1;
    height: var(--top-nav-size);
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  aside {
    display: flex;
    align-items: center;
  }

  a {
    all: unset;
    text-decoration: none;
  }

  i {
    height: var(--top-nav-size);
    width: var(--top-nav-size);
    display: grid;
    place-items: center;
    cursor: pointer;

    &:last-child {
      margin-left: var(--spacing-micro);
    }
  }
}
</style>
