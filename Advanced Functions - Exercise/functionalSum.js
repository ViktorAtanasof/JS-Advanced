function functionalSum(num) {
    let sum = 0;
    function inner(number) {
        sum += number;
        return inner;
    }
    inner.toString = () => {
        return sum;
    };
    return inner(num);
}

console.log(functionalSum(1)(6)(-3).toString());
