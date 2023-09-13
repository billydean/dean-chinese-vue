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
    div {
        position: fixed;
        z-index: 30;
        bottom: calc(10px + 2rem);
        width: 80%;
        margin: 5px;
    }
</style>