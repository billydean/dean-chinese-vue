<script setup lang="ts">
    import { useDictStore } from '../stores/DictStore';
    import { storeToRefs } from 'pinia';
import { useFlagsStore } from '../stores/FlagStore';
  
    const { input }  = storeToRefs(useDictStore());
    const dict = useDictStore();
    const flags = useFlagsStore();

    function pinSearch() {
        flags.searchSelect = 'pin'
    }

    function charSearch() {
        flags.searchSelect = 'char'
    }

    function defSearch() {
        flags.searchSelect = 'def'
    }

</script>

<template>
    
    <section class="search-zone">
        <div class="switch-container">
            <div class="switch">
                <input type="radio" id="radio-pin" name="radio" @click="pinSearch()"/>
                <label class="switch-labels" for="radio-pin">PRONUNCIATION</label>
                <input type="radio" id="radio-char" name="radio" @click="charSearch()"/>
                <label class="switch-labels" for="radio-char">CHARACTER</label>
                <input type="radio" id="radio-def" name="radio" @click="defSearch()"/>
                <label class="switch-labels" for="radio-def">DEFINITION</label>
                <span id="switch-select"></span>
            </div>
        </div>
        <form v-if="flags.searchSelect == 'pin'" @submit.prevent="">
            <div class="text-input">
                <label for="pin-search">
                </label>
                <input v-model="dict.input" placeholder="Search by pronunciation" name="pin-input" id="pin-search"  autocomplete="off" >
                <RouterLink to="/results"><button @click="dict.fetchByPinYin(dict.input)">Search</button></RouterLink>
            </div>
        </form>
        <form v-if="flags.searchSelect == 'char'" @submit.prevent="">
            <div class="text-input">
                <label for="char-search">
                </label>
                <input v-model="dict.input" placeholder="Search by character" name="char-input" id="char-search"  autocomplete="off" >
                <RouterLink to="/results"><button @click="dict.fetchByChar(dict.input)">Search</button></RouterLink>
            </div>
        </form>
        <form v-if="flags.searchSelect == 'def'" @submit.prevent="">
            <div class="text-input">
                <label for="def-search">
                </label>
                <input v-model="dict.input" placeholder="Search by definition" name="def-input" id="def-search"  autocomplete="off" >
                <RouterLink to="/results"><button @click="dict.fetchByDef(dict.input)">Search</button></RouterLink>
            </div>
        </form>
        <button @click="console.log(dict.dictionary)">Test</button>
        <button @click="dict.sortByFrequencyDesc()">Sort Test</button>
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
        width: 50%;
        margin: 5px;
    }

    .text-input input {
        width: 70%;
    }
    .text-input button {
        width: 15%;
    }
    .text-input label::before {
        content: "Search for a character";
        font-size: 0;
        height: 0;
        overflow: hidden;
    }

    input[type="radio"], input[type="checkbox"] {
        display: none;
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }
    .switch {
        position: relative;
        height: 50px;
        display: flex;
        justify-content: space-around;
        font-size: 0.8em;
    }

    .switch-container {
        width: 75%;
        /* margin: 0 auto; */
    }
    .switch-labels {
        padding: 1rem;
        z-index: 1;
        width: 33.3%;
        /* margin: auto; */
    }

    #switch-select {
        position: absolute;
        left: 0;
        width: 34%;
        height: 100%;
        background: #14142a;
        border: 1px solid #fff;
        border-radius: 12px;
        opacity: 0.5;
        transition: 0.2s left ease;
    }

    #radio-pin:checked ~ #switch-select {
        left: 0;
    }

    #radio-char:checked ~ #switch-select {
        left: 33%;
    }

    #radio-def:checked ~ #switch-select {
        left: 66%;
    }
</style>