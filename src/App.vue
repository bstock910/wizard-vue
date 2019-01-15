<template>
  <div id="app">
    <TheNavbar />
    <main class="container">
      <router-view/>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import TheFooter from './components/TheFooter'

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
</style>
