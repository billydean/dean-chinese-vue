<script setup lang="ts">
defineProps<{
        character: String,
        pinyin: String,
        definition: String,
        strokes: String | null,
        frequency: String | null
}>()

// import { useDictStore } from '../stores/DictStore';
// const store = useDictStore();


</script>

<template>
    <div class="test">
    <div class="card">
        <div class="card1">
            <div class="card1a">
                <span class="char">{{ character }}</span>
                <span>
                    {{ pinyin }}
                </span>
            </div>
            <div class="level">{{ frequency }}</div>
        </div>
        <div class="card2">
            <div class="def">{{ definition }}</div>
        <div class="strokes">{{ strokes }}</div>
        </div>
        
        
    </div>
    </div>
</template>

<style scoped>
    .test {
        display:flex;
        background: grey;
        width:fit-content;
    }
    .test:before {
        content: "";
        display:block;
        height: 0;
        width: 0;
        padding-bottom: 100%;
    }
    .card1 {
        display: flex;
        justify-content: space-between;
        height: 60%;
    }
    .card1a {
        display: flex;
        flex-direction: column;
        width: 85%;
    }
    .card2 {
        display: flex;
        justify-content: space-between;
        height: 40%;
        container-type: inline-size;
        /* align-items: end; */
    }
</style>