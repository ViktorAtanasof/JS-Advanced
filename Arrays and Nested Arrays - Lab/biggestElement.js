function biggestElement(matrix) {
    let allNums = [];

    for (let i = 0; i < matrix.length; i++) {
        let arrOfNums = matrix[i];
        for (let num of arrOfNums) {
            allNums.push(num);
        }
    }

    let biggestNum = allNums.sort((a, b) => b - a);

    return biggestNum[0];
}

biggestElement([[20, 50, 10],
[8, 33, 145]]);
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);
