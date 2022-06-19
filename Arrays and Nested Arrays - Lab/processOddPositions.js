function processOddPositions(arrOfNumbers) {
    let oddPositions =
        arrOfNumbers
            .filter((a, b) => b % 2 != 0)
            .map(a => a * 2)
            .reverse();

    return oddPositions.join(' ');
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);
