<script setup lang="ts">
</script>

<template>
    <header>
        <!-- <h1>This is a header</h1> -->
        <nav class="bg-slate-200 flex flex-row items-center">
          <!-- temporary while I figure out router -->
          <RouterLink to="/" class="bg-slate-100 bg-opacity-75 basis-1/2">Home</RouterLink>
          <RouterLink to="/results" class="menu-item bg-slate-100 basis-1/6">Results</RouterLink>
          <RouterLink to="/radicals" class="menu-item bg-slate-100 basis-1/6">Radicals</RouterLink>
          <RouterLink to="/about" class="menu-item bg-slate-100 basis-1/6">About</RouterLink>

        </nav>
    </header>
</template>

<style scoped>
 header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    /* width: 100vw; */
    /* z-index: 30;
    background-image: url('../assets/chinese-writing.jpg');
    background-size: 200vw; */
  }

  nav {
    height: 4rem;
    width: 100%;
    /* justify-content: space-evenly; */
  }


  /* .menu-item {
    margin: 5px 50px;
    border-radius: 5px;
    height: 2rem;
  } */

  
</style>