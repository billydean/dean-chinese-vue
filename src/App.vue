<script setup lang="ts">
  import Header from './components/Header.vue'
  import Result from './components/Result.vue'
  import Radical from './components/Radical.vue'
  import Spotlight from './components/Spotlight.vue'
  import SimilarScreen from './components/SimilarScreen.vue'
  import Search from './components/Search.vue'
  import Filter from './components/Filter.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <div>This is the body
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Radical />
    <Radical />
    <Radical />
    <Radical />
    <Radical />
    <Radical />
    <Spotlight />
    <SimilarScreen />
  </div>
  <Search />
  <Filter />
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
