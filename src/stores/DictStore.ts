import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDictStore = defineStore('dict', () => {
    const dictionary = ref([{"string":"\u5017"}]);

    const input = ref('')
    async function fetchByPinYin() {
        try {
            const data = await axios.get(`http://ccdb.hemiola.com/characters/mandarin/${input}`);
            dictionary.value= data.data
            console.log(data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return { input, dictionary, fetchByPinYin }
})