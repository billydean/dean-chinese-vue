import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDictStore = defineStore('dict', () => {
    const dictionary = ref([{"string":"\u5017"}])

    const input = ref("")
    //ref or reactive for spotlight?
    const spotlight = ref({
        definition: 'DEFINITION',
        mandarin: 'MANDARIN',
        strokes: 'STROKES',
        frequency: 'FREQUENCY',
        level: 'LEVEL'
    }) 
    
    async function fetchByPinYin(input: string) {
        try {
            const data = await axios.get(`http://ccdb.hemiola.com/characters/mandarin/${input}?fields=kDefinition,kMandarin,kTotalStrokes,kFrequency`);
            dictionary.value= data.data
            console.log(data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
// make a query builder
// prefix for pinyin search
// prefix for definition search
// prefix for character search

// filters
// traditional or simplified
// common or not???

// function(prefix, filter(s))

// can store have hard-coded, non-reactive variables?

// if so, calling function will just use non-reactive terms for its params

//function builds prefix + filter + fields and then calls it through axios
    return { input, dictionary, spotlight, fetchByPinYin }
})
