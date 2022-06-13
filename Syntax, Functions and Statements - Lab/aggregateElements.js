function aggregateElements(arrOfNums) {
    let sum = 0;
    let sumInverse = 0;
    let concat = '';

    for (let num of arrOfNums) {
        sum += num;
    }
    console.log(sum);

    for (let num of arrOfNums) {
        sumInverse += 1 / num;
    }
    console.log(sumInverse);

    for (let num of arrOfNums) {
        concat += num;
    }
    console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
