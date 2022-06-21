function addAndRemoveElements(arrOfStrings) {
    let result = [];
    let num = 0;

    for (let command of arrOfStrings) {
        if (command == 'add') {
            num++;
            result.push(num);
        } else if (command == 'remove') {
            result.pop();
            num++;
        }
    }

    if (result.length <= 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
addAndRemoveElements(['remove',
    'remove',
    'remove']);
