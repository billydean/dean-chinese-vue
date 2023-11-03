import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useDictStore = defineStore('dict', () => {
    const dictionary = ref([{"string":"\u5017"}])
    //ref or reactive for spotlight?
    const spotlight = ref({
        definition: 'DEFINITION',
        mandarin: 'MANDARIN',
        strokes: 'STROKES',
        frequency: 'FREQUENCY',
        level: 'LEVEL'
    }) 
    
    async function fetchByPinYin() {
        try {
            const data = await axios.get('http://ccdb.hemiola.com/characters/mandarin/peng2?fields=kDefinition,kMandarin,strokes,kFrequency');
            dictionary.value= data.data
            console.log(data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return { dictionary, fetchByPinYin }
})

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