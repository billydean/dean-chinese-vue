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
  <div class="desk">
  <Header />
  <div class="card-deck">
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
  </div>
      <Spotlight />
    <SimilarScreen />
  <Search />
  <Filter />
  <Footer />
  </div>
</template>

<style scoped>
  .desk {
    width: 750px;
    display: flex;
    flex-direction: column;
  }
  .card-deck {
    display: flex;
    width: 750px;
    flex-wrap: wrap;
  }
</style>
