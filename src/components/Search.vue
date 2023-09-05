<script setup lang="ts">
    import { useDictStore } from '../stores/DictStore';
    const dict = useDictStore();
</script>
<template>
    <div>This is the <span @click="dict.fetchByPinYin">search</span> bar</div>
</template>
<style scoped>
    span {
        font-weight: bold;
    }
</style>