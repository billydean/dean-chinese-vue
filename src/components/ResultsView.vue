<script setup lang="ts">
    import Result from './Result.vue'
    import { useDictStore } from '../stores/DictStore';
    const dict = useDictStore();
</script>

<template>
    <div class="card-deck">
    <Result v-for="item in dict.dictionary"
            :character="item.string"
            :key = "item.string"
    />
  </div>
</template>

<style scoped>
  .card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>