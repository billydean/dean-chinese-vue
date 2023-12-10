<script setup lang="ts">
defineProps<{
        character?: String,
}>()

// import { useDictStore } from '../stores/DictStore';
// const store = useDictStore();
</script>

<template>
    <div class="card">{{ character }}</div>
</template>

<style>
</style>