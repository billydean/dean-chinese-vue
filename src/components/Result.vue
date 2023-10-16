<script setup lang="ts">
defineProps<{
        character?: String,
}>()

import { useDictStore } from '../stores/DictStore';
const store = useDictStore();
</script>

<template>
    <div @click="console.log(store.input)" class="card">{{ character }}</div>
</template>

<style>
</style>