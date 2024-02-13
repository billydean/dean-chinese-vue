/**
 * @file Converts pinyin tone numbers to tone marks.
 * @desc While adjustments have been made for the project at hand, the heart of this file comes from Kevin K. Yang's pinyinify.js
 * @see https://github.com/kevb34ns/pinyinify/blob/master/pinyinify.js
 */

import { toneArray } from "./types";

/**
 * An object holding arrays of Unicode tone marks for each vowel. Laid out such that the index for each vowel corresponds to its tone number. The diacritic-marked version of a2, would be toneMarks["a"][2], etc.
 * 
 */
const toneMarks: toneArray = {
    a: ["a", "\u0101", "\u00e1", "\u01ce", "\u00e0", "a"],
    e: ["e", "\u0113", "\u00e9", "\u011b", "\u00e8", "e"],
    i: ["i", "\u012b", "\u00ed", "\u01d0", "\u00ec", "i"],
    o: ["o", "\u014d", "\u00f3", "\u01d2", "\u00f2", "o"],
    u: ["u", "\u016b", "\u00fa", "\u01d4", "\u00f9", "u"],
    v: ["\u00fc", "\u01d6", "\u01d8", "\u01da", "\u01dc", "\u00fc"]
}

/**
 * @return {Boolean} whether this string is a single alphabetical letter.
 */
function isAlpha (str: string) {
    return /^[A-Za-z]$/.test(str);
}

/**
 * @return {Boolean} is this string a valid pinyin vowel
 */
function isPinyinVowel (str: string) {
    return /^[aeiouv\u00fc]$/.test(str)
}

/**
 * Finds the last occurrence of a regular expression pattern match in string
 * 
 * @return {Number} the last match in this string
 */
function lastIndexOfRegex (str: string, regExp: RegExp) {
    let lastIndex = -1;
    for (let i=0; i<str.length; i++) {
        if (regExp.test(str.charAt(i))) {
            lastIndex = i;
        }
    }
    return lastIndex;
}

/**
 * @return {String} string with specified replacement
 */
function replaceAt (str: string, index: number, replacement: string) {
    if (index >= 0 && index < str.length) {
        return str.substring(0, index) + replacement + str.substring(index+1);
    } else {
        return str;
    }
}

/**
 * Converts string, which must be a single pinyin word followed by a tone number, to the equivalent pinyin word using diacritics.
 * @return {String} String with tone number removed and diacritic inserted.
 */
export function convertPinYin (str: string) {
    let matter = str.toLocaleLowerCase();
    let toneIndex = (/[1-5]/.test(matter))
        ? matter.search(/[1-5]/)
        : null
    let firstVowel = matter.search(/[aeiouv\u00fc]/);
    if (toneIndex == null || firstVowel < 0) {
        return matter;
    }
    let tone = parseInt(matter[toneIndex]);
    if (/[ae]/.test(matter)) {
        let index = matter.search(/[ae]/);
        matter = replaceAt(matter, index, toneMarks[matter.charAt(index)][tone])
    } else if (/ou/.test(matter)) {
        let index = matter.search(/[ou]/);
        matter = replaceAt(matter, index, toneMarks[matter.charAt(index)][tone])
    } else {
        let index = lastIndexOfRegex(matter, /[aeiouv\u00fc]/);
        let vowel = matter.charAt(index);
        if (vowel == "\u00fc") {
            vowel = "v"
        }
        matter = replaceAt(matter, index, toneMarks[vowel][tone]);
    }
    matter = matter.substring(0, toneIndex);
    return matter;
}