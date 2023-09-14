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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    top: calc(20px + 2rem);
    position: relative;
  }
</style>