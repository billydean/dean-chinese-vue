import { defineStore } from 'pinia';
import axios from 'axios';
import { Ref, ref } from 'vue';
import { Entry } from '../types';
import { convertPinYin, convertToneNumber } from '../pinyinify';

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
            const data = await axios.get(`http://ccdb.hemiola.com/characters/mandarin/${input}?filter=!simplifiable+gb&fields=string,kMandarin,kDefinition,kTotalStrokes,kFrequency,kTraditionalVariant,kSimplifiedVariant`)
            const results: Entry[] = data.data

         results.forEach((each: Entry) => {
            // let test = each.kMandarin.split(' ').slice(0,2);
            // let newtest = test.map(each => convertPinYin(each)).join(', ');
            // each.kMandarin = newtest;
            // console.log(each.kMandarin)
            each.kMandarin = each.kMandarin.split(' ').slice(0,2).join(', ');
            each.kFrequency = each.kFrequency == null 
                ? '6'
                : each.kFrequency
         })

        const relevantResults = results.filter(each => each.kMandarin.includes(input.toUpperCase()))

        relevantResults.forEach((each: Entry) => {
            let pinyinified = each.kMandarin.split(' ').map(str => convertPinYin(str)).join(', ');
            each.kMandarin = pinyinified;
        })

       dictionary.value = relevantResults;
            
            // filter((entry: Entry)=> { entry.kMandarin.split(' ')[0] == input })
            // dictionary.value = results;
            // console.log(results);
        
        }
        catch (error) {
            console.log(error)
        }
    }
    
    async function fetchByChar(input: string) {
        try {
            const data = await axios.get(`http://ccdb.hemiola.com/characters/string/${input}?filter=!simplifiable+gb&fields=string,kMandarin,kDefinition,kTotalStrokes,kFrequency,kTraditionalVariant,kSimplifiedVariant`)

            data.data.forEach((each: Entry) => each.kMandarin = each.kMandarin.split(' ').slice(0,2).join(', '))
            dictionary.value = data.data
            
            // filter((entry: Entry)=> { entry.kMandarin.split(' ')[0] == input })
            // dictionary.value = results;
            // console.log(results);
        
        }
        catch (error) {
            console.log(error)
        }
    }

    async function fetchByDef(input: string) {
        try {
            const data = await axios.get(`http://ccdb.hemiola.com/characters/definition/${input}?filter=!simplifiable+gb&fields=string,kMandarin,kDefinition,kTotalStrokes,kFrequency,kTraditionalVariant,kSimplifiedVariant`)

            data.data.forEach((each: Entry) => each.kMandarin = each.kMandarin.split(' ').slice(0,2).join(', '))
            dictionary.value = data.data
            
            // filter((entry: Entry)=> { entry.kMandarin.split(' ')[0] == input })
            // dictionary.value = results;
            // console.log(results);
        
        }
        catch (error) {
            console.log(error)
        }
    }

    function sortByFrequencyAsc() {
  
        // @ts-ignore
        dictionary.value.sort((a: Entry, b: Entry) => parseInt(a.kFrequency) - parseInt(b.kFrequency));
    
    }

    function sortByFrequencyDesc() {
  
        // @ts-ignore
        dictionary.value.sort((a: Entry, b: Entry) => parseInt(b.kFrequency) - parseInt(a.kFrequency));
    
    }

    function sortByStrokesAsc() {
  
        // @ts-ignore
        dictionary.value.sort((a: Entry, b: Entry) => parseInt(a.kTotalStrokes) - parseInt(b.kTotalStrokes));
    
    }

    function sortByStrokesDesc() {
  
        // @ts-ignore
        dictionary.value.sort((a: Entry, b: Entry) => parseInt(b.kTotalStrokes) - parseInt(a.kTotalStrokes));
    
    }

    function sortByPinYinAsc() {
  
        // @ts-ignore
        dictionary.value.sort((a: Entry, b: Entry) => parseInt(a.kMandarin) - parseInt(b.kMandarin));
    
    }

    function sortByPinYinDesc() {
  
        // @ts-ignore
        dictionary.value.sort((a: Entry, b: Entry) => parseInt(b.kMandarin) - parseInt(a.kMandarin));
    
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
    return { input, dictionary, spotlight, fetchByPinYin, fetchByChar, fetchByDef, sortByFrequencyAsc, sortByFrequencyDesc, sortByStrokesAsc, sortByStrokesDesc, sortByPinYinAsc, sortByPinYinDesc }
})
