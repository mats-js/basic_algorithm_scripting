/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Preserve the case of the first character in the original word when you are replacing it. */

function myReplace(str, before, after) {
    let new_after = "";
    if (before[0] === before[0].toUpperCase()) {
        new_after = after[0].toUpperCase() + after.slice(1);
    } else {
        new_after = after[0].toLowerCase() + after.slice(1);

    }
    return str.replace(before, new_after);
  }
  
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");