/* Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let initIndex = alphabet.search(str[0]), result = undefined;
   for (let i=0; i<str.length; i++){
        if (str[i] !== alphabet[initIndex+i]) {
            result = alphabet[initIndex+i];
            break;
        }
   }
   return result;
} 

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");