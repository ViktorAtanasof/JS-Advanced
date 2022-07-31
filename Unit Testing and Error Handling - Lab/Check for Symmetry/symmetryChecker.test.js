const { expect } = require('chai');
const isSymmetric = require('./05-symmetryChecker');

describe('Symmetry Checker', () => {
    it('Works with symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('Returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('Returns false for non-array', () => {
        expect(isSymmetric(1)).to.be.false;
    });

    it('Returns false for array with equal values, but different types', () => {
        expect(isSymmetric([1, '1'])).to.be.false;
    });

    it('Returns false for array with strings', () => {
        expect(isSymmetric([1, 'hi'])).to.be.false;
    });
})
