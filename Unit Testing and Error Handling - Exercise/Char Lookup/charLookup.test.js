const { expect } = require('chai');
const lookupChar = require('./3-charLookup');

describe('Char Lookup', () => {
    it('Returns undefined for first non-string parameter', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });

    it('Returns undefined for second non-number parameter', () => {
        expect(lookupChar('a', '1')).to.equal(undefined);
    });

    it('Returns "Incorrect index" for bigger incorrect index', () => {
        expect(lookupChar('a', 2)).to.equal('Incorrect index');
    });

    it('Returns "Incorrect index" for equal incorrect index', () => {
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
    });

    it('Returns "Incorrect index" for negative incorrect index', () => {
        expect(lookupChar('a', -1)).to.equal('Incorrect index');
    });

    it('Returns "Character at the specified index" for correct parameter values', () => {
        expect(lookupChar('hi', 1)).to.equal('i');
    });

    it('Returns undefined for second non-integer parameter', () => {
        expect(lookupChar('hi', 1.5)).to.equal(undefined);
    });
})
