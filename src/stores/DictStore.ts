import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDictStore = defineStore('dict', () => {
    const dictionary = ref([{"string":"\u5017"}])
    async function fetchByPinYin() {
        try {
            const data = await axios.get('http://ccdb.hemiola.com/characters/mandarin/peng2');
            dictionary.value= data.data
            console.log(data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return { dictionary, fetchByPinYin }
})