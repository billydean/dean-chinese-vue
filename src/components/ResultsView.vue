<script setup lang="ts">
    import Result from './Result.vue'
    import { useDictStore } from '../stores/DictStore';
    const dict = useDictStore();
</script>

<template>
    <div class="card-deck">
    <Result v-for="item in dict.dictionary"
            :character = "item.string"
            :key = "item.string"
            :pinyin = "item.kMandarin"
            :definition = "item.kDefinition"
            :strokes = "item.kTotalStrokes"
            :frequency = "item.kFrequency"
    />
  </div>
</template>

<style scoped>
  .card-deck {
    /* width: 100%; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(185px, 250px));
    grid-template-rows: minmax(1fr, 200px);
    grid-gap: 20px;
    top: calc(20px + 2rem);
    position: relative;
  }
</style>