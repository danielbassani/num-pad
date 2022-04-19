/**
 * This function will pad an array of numbers with 0s. Result will be an array of Strings.
 * @param {Number} arr An array of numbers.
 * @returns An array of Strings, where each number is padded to contain the same number of digits.
 * Negative numbers will have an extra "-" sign.
 */
exports.pad = function(arr) {
    return padder(arr);
}

function padder(arr) {
    arr = arr.map(Number);

    let digits = []
    let isNegative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            isNegative[i] = true;
            arr[i] = Math.abs(arr[i])
        } else {
            isNegative[i] = false;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 || arr[i] === 1) {
            digits[i] = arr[i];
        } else {
            digits[i] = Math.trunc(Math.log10(arr[i]) + 1);
        }
    }

    let max = Math.max.apply(Math, digits);
    let strArr = arr.map(String);

    for(let i = 0; i < strArr.length; i++) {
        for(let j = 0; strArr[i].length < max; j++) {
            strArr[i] = '0' + strArr[i];
        }
        if (isNegative[i]) {
            strArr[i] = '-' + strArr[i];
        }
    }
    
    return strArr;
}