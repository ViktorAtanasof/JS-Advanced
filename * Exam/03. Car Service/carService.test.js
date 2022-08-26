const { expect } = require('chai');
const carService = require('./solve3');

describe("carService Tests", () => {
    describe("isItExpensive", () => {
        it("Parameter is equal to Engine", () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("Parameter is equal to Transmission", () => {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });

        it("Parameter is not equal to Engine", () => {
            expect(carService.isItExpensive('Hello')).to.equal(`The overall price will be a bit cheaper`);
        });
        it("Parameter is not equal to Transmission", () => {
            expect(carService.isItExpensive('Bye')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('discount', () => {
        it('Throws error if input is not valid', () => {
            expect(() => carService.discount('hi', 1)).to.throw('Invalid input');
            expect(() => carService.discount('hi', 'hi')).to.throw('Invalid input');
            expect(() => carService.discount(1, 'hi')).to.throw('Invalid input');
            expect(() => carService.discount([], 1)).to.throw('Invalid input');
            expect(() => carService.discount({}, 1)).to.throw('Invalid input');
        });
        it('Percentage of discount based on the numberOfParts is between 2 and 7', () => {
            expect(carService.discount(7, 15)).to.equal(`Discount applied! You saved 2.25$`);
            expect(carService.discount(3, 15)).to.equal(`Discount applied! You saved 2.25$`);
            expect(carService.discount(4, 25)).to.equal(`Discount applied! You saved 3.75$`);
            expect(carService.discount(6, 35)).to.equal(`Discount applied! You saved 5.25$`);
        });
        it('Percentage of discount based on the numberOfParts above 7', () => {
            expect(carService.discount(8, 15)).to.equal(`Discount applied! You saved 4.5$`);
            expect(carService.discount(15, 30)).to.equal(`Discount applied! You saved 9$`);
            expect(carService.discount(30, 15)).to.equal(`Discount applied! You saved 4.5$`);
            expect(carService.discount(100, 15)).to.equal(`Discount applied! You saved 4.5$`);
        });
        it('Percentage of discount based on the numberOfParts bellow or at 2', () => {
            expect(carService.discount(2, 0)).to.equal(`You cannot apply a discount`);
            expect(carService.discount(1, 0)).to.equal(`You cannot apply a discount`);
            expect(carService.discount(0, 0)).to.equal(`You cannot apply a discount`);
            expect(carService.discount(-1, 0)).to.equal(`You cannot apply a discount`);
        });
    });

    describe('partsToBuy', () => {
        it('Throws error for invalid input', () => {
            expect(() => carService.partsToBuy('hi', [])).to.throw('Invalid input');
            expect(() => carService.partsToBuy([], 'hi')).to.throw('Invalid input');
            expect(() => carService.partsToBuy('hi', {})).to.throw('Invalid input');
            expect(() => carService.partsToBuy({}, [])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(5, [])).to.throw('Invalid input');
        });
        it('Total price of the parts', () => {
            expect(carService.partsToBuy(([{ part: "blowoff valve", price: 145 }]), (["blowoff valve"]))).to.equal(145);
            expect(carService.partsToBuy(([{ part: "valve", price: 100 }]), (["valve"]))).to.equal(100);
            expect(carService.partsToBuy(([{ part: "valve", price: 100 }, { part: "string", price: 100 }]), (["valve", "string"]))).to.equal(200);
            expect(carService.partsToBuy(([{ part: "thirst", price: 0 }, { part: "string", price: 100 }]), (["thirst", "string"]))).to.equal(100);
            expect(carService.partsToBuy(([{ part: "sup", price: 500 }, { part: "hi", price: 0 }]), (["sup", "hi"]))).to.equal(500);
        });
        it('If catalog size is empty', () => {
            expect(carService.partsToBuy(([]), (["blowoff valve"]))).to.equal(0);
        });
    })
});
