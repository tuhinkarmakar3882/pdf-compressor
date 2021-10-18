<template>
  <div class="nav-bar-component">
    <i v-ripple class="mdi mdi-menu mdi-24px" />
    <h1>{{ appName }}</h1>

    <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">
      <i class="mdi mdi-linkedin mdi-36px" />
    </a>
  </div>
</template>

<script>
import * as packageJSON from '~/package.json'
export default {
  name: 'Navbar',
  data() {
    return {
      appName: packageJSON.appName,
    }
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
  height: var(--spacing-large);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-family: monospace;
    margin: 0 auto 0 0;
  }

  a {
    text-decoration: none;
  }

  i {
    height: var(--spacing-large);
    width: var(--spacing-large);
    display: grid;
    place-items: center;

    &:last-child {
      margin-left: var(--spacing-micro);
    }
  }
}
</style>
