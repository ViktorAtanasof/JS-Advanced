function mathOperations(firstNum, secondNum, string) {
    let result;
    if (string == '+') {
        result = firstNum + secondNum;
    } else if (string == '-') {
        result = firstNum - secondNum;
    } else if (string == '*') {
        result = firstNum * secondNum;
    } else if (string == '/') {
        result = firstNum / secondNum;
    } else if (string == '%') {
        result = firstNum % secondNum;
    } else if (string == '**') {
        result = firstNum ** secondNum;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
