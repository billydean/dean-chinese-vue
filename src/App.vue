<script setup lang="ts">
  import Footer from './components/Footer.vue'
  import Search from './components/Search.vue';
  import { useFlagsStore } from './stores/FlagStore';

  const flags = useFlagsStore();
</script>

<template>
    <header>
        <!-- <h1>This is a header</h1> -->
        <nav class="bg-slate-200">
          <!-- temporary while I figure out router -->
          <RouterLink to="/" class="menu-item bg-slate-100">Home</RouterLink>
          <RouterLink to="/results" class="menu-item bg-slate-100">Results</RouterLink>
          <RouterLink to="/radicals" class="menu-item bg-slate-100">Radicals</RouterLink>
          <RouterLink to="/about" class="menu-item bg-slate-100">About</RouterLink>

        </nav>
    </header>
  
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
  header {
    width: 100%;
  }

  nav {
    display: flex;
    /* justify-content: space-evenly; */
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 30;
  }

  .menu-item {
    flex-grow: 1;
    margin: 5px 50px;
    border-radius: 5px;
    height: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
