function evenPositionElements(arrOfStrings) {
    let evenIndexes = arrOfStrings.filter((a, b) => b % 2 == 0);

    console.log(evenIndexes.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);
