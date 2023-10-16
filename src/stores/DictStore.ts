import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDictStore = defineStore('dict', () => {
    const dictionary = ref([{"string":"\u5017"}]);

    const input = ref('')
    async function fetchByPinYin(input: string) {
        try {
            const data = await axios.get(`http://ccdb.hemiola.com/characters/mandarin/${input}?filter=gb+big5a+simplified|gb+big5a+!simplifiable&fields=string,kMandarin`);
            dictionary.value= data.data
            console.log(data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return { input, dictionary, fetchByPinYin }
})