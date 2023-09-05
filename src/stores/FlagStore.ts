import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFlagsStore = defineStore('flags', () => {
    const openSearch = ref(false);
    const openFilter = ref(false);

    return { openSearch, openFilter }
})