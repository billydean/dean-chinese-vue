<script setup lang="ts">
defineProps<{
        character?: String,
}>()
</script>

<template>
    <div class="card">{{ character }}</div>
</template>

<style>
</style>