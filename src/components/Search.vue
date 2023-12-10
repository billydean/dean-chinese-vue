<script setup lang="ts">
    import { useDictStore } from '../stores/DictStore';
    import { storeToRefs } from 'pinia';
    const { input }  = storeToRefs(useDictStore());
    const store = useDictStore();

</script>

<template>
    
    <section class="search-zone">
        <form @submit.prevent="" id="search">
            <div id="text-input">
                <label for="text-search">
                </label>
                <input v-model="store.input" placeholder="Search for a character" name="text-input" id="text-search"  autocomplete="off" >
                <button @click="store.fetchByPinYin(store.input)">Search</button>
                <button @click="console.log(store.dictionary)">Test</button>
            </div>
        </form>
    </section>
    <div></div>
    
</template>

<style scoped>
    span {
        font-weight: bold;
    }
    .search-zone {
        position: fixed;
        z-index: 30;
        bottom: calc(10px + 2rem);
        width: 80%;
        margin: 5px;
    }

    #text-input label::before {
        content: "Search for a character";
        font-size: 0;
        height: 0;
        overflow: hidden;
    }

</style>