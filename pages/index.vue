<template>
  <section class="index-page">
    <h1>Hello World, From PDF Compressor</h1>
    <p>Something great is about to come!</p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      animi atque aut consequuntur, corporis debitis deleniti dolores eos et
      exercitationem illum labore natus neque odio optio perferendis rerum
      similique ullam.
    </p>
    <p>
      <span
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        blanditiis, dolore dolores dolorum eligendi eveniet officiis quaerat
        tempore voluptatibus. A ab at atque harum laborum odio omnis veritatis!
        Maxime, quis!</span
      ><span
        >Accusamus accusantium aperiam architecto asperiores corporis dolorem
        eius eos id labore libero magni maiores natus neque nisi porro
        reiciendis rem repellendus, repudiandae, sit ullam velit veniam vitae!
        Dolores officia, quae.</span
      ><span
        >A adipisci amet asperiores atque minima non quo vero! Amet architecto
        at autem blanditiis consequatur ex harum, impedit maiores molestias
        numquam officia quis, quod recusandae sunt unde vel velit? At.</span
      >
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      animi atque aut consequuntur, corporis debitis deleniti dolores eos et
      exercitationem illum labore natus neque odio optio perferendis rerum
      similique ullam.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      animi atque aut consequuntur, corporis debitis deleniti dolores eos et
      exercitationem illum labore natus neque odio optio perferendis rerum
      similique ullam.
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Compress Your PDF - The Best Way',
    }
  },

  head() {
    return {
      title: this.pageTitle,
    }
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  * + * {
    margin: var(--spacing-standard) 0;
  }
}
</style>
