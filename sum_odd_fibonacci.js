/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
    let fibArr = [1, 1], i = 1;
    do {
        i++;
        fibArr[i] = fibArr[i-2] + fibArr[i-1];
    } while (fibArr[i] <= num);
    fibArr.pop()
    for (i = fibArr.length; i >= 0 ; i--) {
        if (fibArr[i] % 2 == 0) fibArr.splice(i, 1);
    };
    return fibArr.reduce((s, i) => s + i);
}

sumFibs(1000);