<script setup lang="ts">
  import Footer from './components/Footer.vue'
  import Search from './components/Search.vue';
  import Header from './components/Header.vue';
  import { useFlagsStore } from './stores/FlagStore';

  const flags = useFlagsStore();
</script>

<template>
    
  <Header />
  <RouterView />
  <Search v-if="flags.openSearch"/>
  <Footer />
</template>

<style scoped>
  /* .desk {
    width: 750px;
    display: flex;
    flex-direction: column;
  }
  .card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  } */


  
</style>
