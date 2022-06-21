function printAnArrayWithAGivenDelimiter(arrOfStrings, string) {
    console.log(arrOfStrings.join(string));
}

printAnArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
printAnArrayWithAGivenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_');
