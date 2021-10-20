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
  height: 100vh;
  overflow: auto;

  main {
    padding: var(--spacing-standard);
    max-width: var(--max-accesible-size);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}
</style>
