<template>
  <div class="container">
    <section class="section content has-text-centered">
      <h2 class="title-is 3">Page Not Found</h2>
      <p>Oops, we couldn't find the page you were looking for.</p>
      <p>Please
        <router-link :to="{name: 'home'}">return home</router-link></p>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
