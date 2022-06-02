/* If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
If a word begins with a vowel, just add way at the end. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
    let consRegex = /^[^aeiou]/i, index = [], i = 0, newstr = "";
    if (str[i].search(consRegex) >= 0) {
        while ((i < str.length) && (str[i].search(consRegex) >= 0)) {
            index.push(str[i]);
            i++;
        }
        newstr = str.substring(i) + str.substring(0,i) + "ay";
    } else {
        newstr = str + "way";
    }
    return console.log(newstr);
}
  
translatePigLatin("rhythm");