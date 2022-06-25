function magicMatrices(matrix) {
    let isMagical = true;

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumCurrRow = matrix[i].reduce((acc, num) => acc + num);
        let sumNextRow = matrix[i + 1].reduce((acc, num) => acc + num);

        let sumCurrCol = 0;
        let sumNextCol = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCurrCol += matrix[i][j];
            sumNextCol += matrix[i + 1][j];
        }

        if (sumCurrRow !== sumNextRow || sumCurrCol !== sumNextCol) {
            isMagical = false;
        }
    }

    console.log(isMagical);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
