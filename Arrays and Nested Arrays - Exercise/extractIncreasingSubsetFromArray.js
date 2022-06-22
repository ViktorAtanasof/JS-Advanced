function extractIncreasingSubsetFromArray(arrOfNums) {
    return arrOfNums.reduce((accumulator, currValue, index) => {
        if (currValue >= accumulator[accumulator.length - 1] && index > 0) {
            accumulator.push(currValue);
        }
        return accumulator;
    }, [arrOfNums[0]]);
}

extractIncreasingSubsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
extractIncreasingSubsetFromArray([1,
    2,
    3,
    4]
);
extractIncreasingSubsetFromArray([20,
    3,
    2,
    15,
    6,
    1]
);
