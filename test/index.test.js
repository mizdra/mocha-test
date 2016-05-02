'use strict';

const getEvenNumbers = require('../src/index');
const assert         = require('power-assert');

describe('getEvenNumbers', () => {
    it('array[0]', () => {
        let actual = getEvenNumbers(0, 10)[0];
        let expect = 0;
        assert(actual === expect);
    });

    it('array', () => {
        let actual = getEvenNumbers(0, 10);
        let expect = [0, 2, 4, 6, 8];
        assert.deepEqual(actual, expect);
    });
});