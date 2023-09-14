<script setup lang="ts">
  import { useFlagsStore } from '../stores/FlagStore';

  const flags = useFlagsStore();

  function toggleSearch() {
    flags.openSearch = !flags.openSearch;
  }
</script>

<template>
  <footer>
    <nav class="bg-slate-200 bg-opacity-90">
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
  position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 30;
    background-image: url('../assets/chinese-writing.jpg');
    background-size: cover;
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
    opacity: 100%;
}

</style>