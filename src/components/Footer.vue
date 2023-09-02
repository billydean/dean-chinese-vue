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
        <li>Home</li>
        <li @click="toggleSearch">Search</li>
        <li>Random</li>
        <li>Links</li>
      </ul>
    </nav>
  </footer>
</template>
<style scoped>
  ul {
    display: flex;
    justify-content: space-evenly;
  }
</style>