<script setup lang="ts">
 import { useFlagsStore } from '../stores/FlagStore';

const flags = useFlagsStore();

function toggleSearch() {
  flags.openSearch = !flags.openSearch;
}
</script>

<template>
    <header class="bg-slate-200 w-full left-0 top-0 border-b">
        <nav class="h-16 flex justify-around items-end pb-3">
          <RouterLink to="/" class="text-2xl font-bold text-orange-500 basis-2/5">HOME</RouterLink>
          <p @click="toggleSearch" class="text-lg text-gray-700 hover:text-red-700">SEARCH</p>
          <RouterLink to="/radicals" class="text-lg text-gray-700 basis-1/4">RADICALS</RouterLink>
          <RouterLink to="/about" class="text-lg text-gray-700 basis-1/4">ABOUT</RouterLink>

        </nav>
    </header>
</template>

<style scoped>

  nav {
    height: 4rem;
    width: 100%;
  }

  
</style>
