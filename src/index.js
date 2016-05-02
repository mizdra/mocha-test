'use strict';

const range = require('range');

function getEvenNumbers(begin, end) {
    // [begin, end)を満たす整数の中から偶数のみを返す
    return range.range(begin, end).filter(num => num % 2 === 0);
};

module.exports = getEvenNumbers;