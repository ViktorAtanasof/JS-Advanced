const { expect } = require('chai');
const isOddOrEven = require('./2-evenOrOdd');

describe('Even or Odd string length checker', () => {
    it('Returns undefined for non-string parameter', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it('Returns "even" for even string length', () => {
        expect(isOddOrEven('ab')).to.equal('even');
    });

    it('Returns "odd" for odd string length', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });
})
