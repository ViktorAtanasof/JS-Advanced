function rotateArray(arrOfStrings, num) {
    let arrCopy = arrOfStrings.slice();

    for (let i = 0; i < num; i++) {
        let poppedElement = arrCopy.pop();
        arrCopy.unshift(poppedElement);
    }

    console.log(arrCopy.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2);
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);
