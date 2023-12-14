import { defineStore } from 'pinia';
import axios from 'axios';
import { Ref, ref } from 'vue';
import { Entry } from '../types';

export const useDictStore = defineStore('dict', () => {
    const dictionary: Ref<Entry[]> = ref([])

    const input = ref("")
    //ref or reactive for spotlight?
    const spotlight: Ref<Entry> = ref({
        string: 'STRING',
        kMandarin: 'MANDARIN',
        kDefinition: 'DEFINITION',
        kFrequency: 'FREQUENCY',
        kSimplifiedVariant: 'NONE',
        kTraditionalVariant: 'NONE',
        kTotalStrokes: 'STROKES'
    }) 
    
    async function fetchByPinYin(input: string) {
        try {
            const data = await axios.get(`http://ccdb.hemiola.com/characters/mandarin/${input}?filter=gb+big5+simplified|gb+big5+!simplifiable&fields=string,kMandarin,kDefinition,kTotalStrokes,kFrequency,kTraditionalVariant,kSimplifiedVariant`)
            const results: Entry[] = data.data

         results.forEach((each: Entry) => each.kMandarin = each.kMandarin.split(' ')[0])

        const trial = results.filter(each => each.kMandarin.includes(input.toUpperCase()))

       dictionary.value = trial;
            
            // filter((entry: Entry)=> { entry.kMandarin.split(' ')[0] == input })
            // dictionary.value = results;
            // console.log(results);
        
        }
        catch (error) {
            console.log(error)
        }
    }
    
    // function queryBuilder(prefix: string, input: string, filters: string): string {
    //     const first = prefix === 'pinyin'
    //         ? 'http://ccdb.hemiola.com/characters/mandarin/'
    //         : '';
    //     const second = '?';
    //     const third = 'fields=kDefinition,kMandarin,kTotalStrokes,kFrequency';
        
    //     return first + input + second + third;
    // }
    
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
