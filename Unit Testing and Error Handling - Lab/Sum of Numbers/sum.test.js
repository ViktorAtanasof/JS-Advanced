const { expect } = require('chai');
const sum = require('./04-sumOfNumbers');

describe('Sum of Numbers Validator', () => {
    it('Works with an array of numbers', () => {
        expect(sum([2, 2, 1])).to.equal(5);
    });

    it('Works with negative numbers', () => {
        expect(sum([-1, -3, 5])).to.equal(1);
    });

    it('Works with one number', () => {
        expect(sum([0])).to.equal(0);
    });
})
