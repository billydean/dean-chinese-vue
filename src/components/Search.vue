<script setup lang="ts">
    import { useDictStore } from '../stores/DictStore';
    import { storeToRefs } from 'pinia';
    const { input }  = storeToRefs(useDictStore());


</script>

<template>
    <div>This is the <span @click="console.log(input)">search</span> bar</div>
    <section class="search-zone">
        <form id="search">
            <div id="text-input">
                <label for="text-search">
                </label>
                <input v-model="input" placeholder="Search for a character" name="text-input" id="text-search"  autocomplete="off" >
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

    #text-input label::before {
        content: "Search for a character";
        font-size: 0;
        height: 0;
        overflow: hidden;
    }

</style>