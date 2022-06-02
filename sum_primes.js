/* Return the sum of all prime numbers that are less than or equal to num. */

function sumPrimes(num) {
    let arr = Array(num-1).fill(2).map((x, y) => x + y);
    for (let i = arr.length; i >= 0; i--) {
        for (let j = i; j >= 2; j--) {
            if (arr[i] % j == 0) arr.splice(i, 1);
        };
    };
    return arr.reduce((sum, i) => sum + i);
}

sumPrimes(10);