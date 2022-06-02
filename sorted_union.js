/* Take two or more arrays and return a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */

function uniteUnique(arr) {
    let newarr = [];
    for (let i=0; i<arguments.length; i++) {
        newarr = newarr.concat(arguments[i]);
    }   
    return [ ...new Set(newarr) ];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);