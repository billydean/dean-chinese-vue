import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFlagsStore = defineStore('flags', () => {
    const openSearch = ref(false);
    const openFilter = ref(false);
    const searchSelect = ref('pin');

    return { openSearch, openFilter, searchSelect }
})