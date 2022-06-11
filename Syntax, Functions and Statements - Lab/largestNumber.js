function largestNumber(firstNum, secondNum, thirdNum) {
    // 1-st variant:
    if (firstNum >= secondNum && firstNum >= thirdNum) {
        console.log(`The largest number is ${firstNum}.`);
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        console.log(`The largest number is ${secondNum}.`);
    } else {
        console.log(`The largest number is ${thirdNum}.`);
    }

    //2-nd variant:
    /* console.log(`The largest number is ${Math.max(firstNum, secondNum, thirdNum)}`); */
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
