<template>
  <div class="default-layout">
    <Navbar />

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  main {
    padding: var(--spacing-standard);
  }
}
</style>
