function sumFirstLast(arrOfStrings) {
    let firstElement = arrOfStrings.shift();
    let lastElement = arrOfStrings.pop();

    let result = Number(firstElement) + Number(lastElement);

    return result;
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);
