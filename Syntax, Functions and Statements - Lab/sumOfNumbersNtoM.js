function sumOfNumbersNtoM(n, m) {
    let ntoNum = Number(n);
    let mtoNum = Number(m);
    let sum = 0;

    for (let i = ntoNum; i <= mtoNum; i++) {
        sum += i;
    }

    return sum;
}

sumOfNumbersNtoM('1', '5');
sumOfNumbersNtoM('-8', '20');
