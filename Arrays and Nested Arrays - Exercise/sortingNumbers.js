function sortingNumbers(arrOfNums) {
    const sorted = arrOfNums.sort((a, b) => a - b);
    const result = [];

    while (sorted.length != 0) {
        let smallestValue = sorted.shift();
        result.push(smallestValue);

        let largestValue = sorted.pop();
        result.push(largestValue);
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
