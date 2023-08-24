<script setup lang="ts">
  import Header from './components/Header.vue'
  import Result from './components/Result.vue'
  import Spotlight from './components/SingleView.vue'
  import SimilarScreen from './components/SimilarView.vue'
  import Search from './components/Search.vue'
  import Filter from './components/Filter.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="desk">
  <Header />
  <!-- 
  <Spotlight />
  <SimilarScreen />
  <Search />
  <Filter /> -->
  <Footer />
  </div>
</template>

<style scoped>
  .desk {
    width: 80vw;
  }

</style>
