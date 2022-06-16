function cookingByNumbers(num, firstOperation, secondOperation, thirdOperation, fourthOperation, fifthOperation) {
    let number = Number(num);
    let operations = [firstOperation, secondOperation, thirdOperation, fourthOperation, fifthOperation];

    for (let i = 0; i < operations.length; i++) {
        let command = operations[i];

        if (command == 'chop') {
            number /= 2;
            console.log(number);
        } else if (command == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (command == 'spice') {
            number += 1;
            console.log(number);
        } else if (command == 'bake') {
            number *= 3;
            console.log(number);
        } else if (command == 'fillet') {
            number *= 0.80;
            console.log(number.toFixed(1));
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
