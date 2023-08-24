<script setup lang="ts">
    import Result from './Result.vue'
</script>

<template>
    <div class="card-deck">
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
  </div>
</template>

<style scoped>
  .card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>