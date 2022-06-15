function sameNumbers(num) {
    let digits = num.toString().split('');
    let sum = 0;
    let isEqual = true;

    for (i = 0; i < digits.length - 1; i++) {
        if (digits[i] != digits[i + 1]) {
            isEqual = false;
        }
    }

    let toNum = digits.map(Number);

    for (let i = 0; i < digits.length; i++) {
        sum += toNum[i];
    }
    console.log(isEqual);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
