/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    arr = Array(arr[1]-arr[0]+1).fill(arr[0]).map((x, y) => x + y);
    let count = 1, smallest = 0;
    for (let i = 2; count > 0; i++) {
        count = 0
        for (let j = 0; j < arr.length; j++) {
            if ((arr[arr.length-1]*i) % arr[j] !== 0) {
                count++;
            }
        }
        smallest = arr[arr.length-1]*i;
    }
    return smallest;
}

smallestCommons([10, 2]);