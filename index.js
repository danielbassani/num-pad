/**
 * This function will pad an array of Strings with 0s.
 * @param {String} arr An array of String representation of numbers.
 * @returns An array of Strings, where each number is padded to contain the same number of digits.
 * Negative numbers will have an extra "-" sign.
 */
exports.padString = function(arr) {
    return padder(arr);
}

/**
 * This function will pad an array of numbers with 0s. Result will be an array of Strings.
 * @param {Number} arr An array of numbers.
 * @returns An array of Strings, where each number is padded to contain the same number of digits.
 * Negative numbers will have an extra "-" sign.
 */
exports.pad = function(arr) {
    return padder(arr.map(String));
}

function padder(arr) {
    let maxLen = 0;
    let isNegative = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLen) {
            maxLen = arr[i].length;
        }

        if (arr[i] < 0) {
            isNegative.push(true);
        } else {
            isNegative.push(false);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; arr[i].length < maxLen; j++) {
            if (j == 0) {
                if (arr[i].substring(0, 1) === '-') {
                    arr[i] = arr[i].substring(1);
                }
            } else if (j === maxLen - 1 && isNegative[i]) {
                arr[i] = '-0' + arr[i];
            } else {
                arr[i] = '0' + arr[i];
            }
        }
    }

    return arr;
}