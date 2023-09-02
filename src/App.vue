<script setup lang="ts">
  import Footer from './components/Footer.vue'
</script>

<template>
    <header>
        <h1>This is a header</h1>
        <nav>
          <!-- temporary while I figure out router -->
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/results">Results</RouterLink>
          <RouterLink to="/radicals">Radicals</RouterLink>
          <RouterLink to="/about">About</RouterLink>

        </nav>
    </header>
  <RouterView />
  <Footer />
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
  
  nav {
    display: flex;
    justify-content: space-evenly;
  }
</style>
