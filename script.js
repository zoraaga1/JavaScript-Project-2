// String Manipulation Functions:
//Reverse a String
function stringReverse(string) {
    let arr = phrase.split(' ')
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let maj = word.charAt(0).toUpperCase() + word.slice(1);
        arr2.push(maj);
    }
    return arr2.join(' ');

}

//Count Characters
function countChar(string) {
    return string.length;
}

//Capitalize Words
function capitalizechar(phrase) {
    let arr = phrase.split(' ');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let maj = word.charAt(0).toUpperCase() + word.slice(1);
        arr2.push(maj);
    }
    return arr2.join(' ');
}

// Array Functions:
//Find Maximum and Minimum
function minAndMax(array) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min){
            min = array[i];
        };
    };
    return [min, max];
}

//Sum of Array
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//Filter Array
function filterArray(array, condition) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

// Mathematical Functions:
//Factorial
function factorialcalc(n) {
    let i = n-1;
    while (i > 0) {
        n *= i;
        i--;
    }
    return n;
}

//Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, n);
}
