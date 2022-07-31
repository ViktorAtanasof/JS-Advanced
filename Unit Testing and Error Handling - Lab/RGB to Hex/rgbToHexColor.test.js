const { expect } = require('chai');
const rgbToHexColor = require('./06-rgbToHex');

describe('RGB to HEX color validator', () => {
    it('Equals black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('Equals white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('Equals blue color', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('Returns undefined for numbers over the max range (255)', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('Returns undefined for numbers below the minimum range (0)', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('Returns undefined for invalid type', () => {
        expect(rgbToHexColor('hi', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 'bye', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 'wow')).to.be.undefined;
    });
})
