function biggerHalf(arrOfNumbers) {
    const sorted = arrOfNumbers.sort((a, b) => a - b);

    const result = [];

    for (let i = Math.floor(sorted.length / 2); i < sorted.length; i++) {
        result.push(sorted[i]);
    }

    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);

