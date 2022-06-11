function stringLength(firstString, secondString, thirdString) {
    let lengthSum = firstString.length + secondString.length + thirdString.length;

    console.log(lengthSum);
    console.log(Math.floor(lengthSum / 3));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
