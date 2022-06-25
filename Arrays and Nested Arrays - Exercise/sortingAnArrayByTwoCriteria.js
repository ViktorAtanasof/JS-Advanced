function sortingAnArrayByTwoCriteria(arrOfStrings) {
    const sortedAlphabeticaly = arrOfStrings.sort();
    const sortedByLength = sortedAlphabeticaly.sort((a, b) => a.length - b.length);
    console.log(sortedByLength.join(`\n`));
}

sortingAnArrayByTwoCriteria(['alpha',
    'beta',
    'gamma']);
sortingAnArrayByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
sortingAnArrayByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']);
