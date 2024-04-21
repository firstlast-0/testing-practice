// import './style.css';

function capitalize(string) {
    let arr = string.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

let calculator = {
    add: (x, y) => x + y,

    subtract: (x, y) => x - y,

    multiply: (x, y) => x * y,

    divide: (x, y) => x / y,
};

function caesarCipher(string, factor) {
    const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = string.split('');

    for (let i = 0; i < arr.length; i++) {
        let upper;
        if (arr[i] === arr[i].toUpperCase()) upper = true;

        if (!alp.includes(arr[i].toLowerCase())) continue;

        let ind = 0;
        for (let item of alp) {
            if (arr[i].toLowerCase() !== item) ind++;
            else break;
        }
        ind += factor;

        if (ind > 25) ind = ind - 26;

        if (upper) arr[i] = alp[ind].toUpperCase();
        else arr[i] = alp[ind];
    }
    return arr.join('');
}

function analyzeArray(array) {
    let total = 0;
    for (let item of array) total += item;
    let avg = total / array.length;
    array.sort((a, b) => a - b);
    return { average: avg, min: array[0], max: array[array.length - 1], length: array.length };
}

// console.log(capitalize('cba'));

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
