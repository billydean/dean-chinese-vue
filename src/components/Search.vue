<script setup lang="ts">
    import { useDictStore } from '../stores/DictStore';
    import { storeToRefs } from 'pinia';
    const { input }  = storeToRefs(useDictStore());
    const store = useDictStore();

</script>

<template>
    
    <section class="search-zone">
        <form @submit.prevent="">
            <div class="text-input">
                <label for="pin-search">
                </label>
                <input v-model="store.input" placeholder="Search by pronunciation" name="pin-input" id="pin-search"  autocomplete="off" >
                <RouterLink to="/results"><button @click="store.fetchByPinYin(store.input)">Search</button></RouterLink>
                <button @click="console.log(store.dictionary)">Test</button>
            </div>
        </form>
        <form @submit.prevent="">
            <div class="text-input">
                <label for="char-search">
                </label>
                <input v-model="store.input" placeholder="Search by character" name="char-input" id="char-search"  autocomplete="off" >
                <RouterLink to="/results"><button @click="store.fetchByChar(store.input)">Search</button></RouterLink>
                <button @click="console.log(store.dictionary)">Test</button>
            </div>
        </form>
        <form @submit.prevent="">
            <div class="text-input">
                <label for="def-search">
                </label>
                <input v-model="store.input" placeholder="Search by definition" name="def-input" id="def-search"  autocomplete="off" >
                <RouterLink to="/results"><button @click="store.fetchByDef(store.input)">Search</button></RouterLink>
                <button @click="console.log(store.dictionary)">Test</button>
            </div>
        </form>
    </section>
    
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

    .text-input label::before {
        content: "Search for a character";
        font-size: 0;
        height: 0;
        overflow: hidden;
    }

</style>