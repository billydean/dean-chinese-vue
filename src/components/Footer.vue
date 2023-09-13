<script setup lang="ts">
  import { useFlagsStore } from '../stores/FlagStore';

  const flags = useFlagsStore();

  function toggleSearch() {
    flags.openSearch = !flags.openSearch;
  }
</script>

<template>
  <footer>
    <nav>
      <ul>
        <li @click="toggleSearch">Search</li>
        <li>Random</li>
        <li>Links</li>
      </ul>
    </nav>
  </footer>
</template>
<style scoped>
footer {
  width: 100%;
}
ul {
    display: flex;
    justify-content: space-evenly;
  }
li {
  /* flex-grow: 1; */
    margin: 5px 50px;
    height: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
}
  nav {
    /* display: flex; */
    /* justify-content: space-evenly; */
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    z-index: 30;
  }

</style>