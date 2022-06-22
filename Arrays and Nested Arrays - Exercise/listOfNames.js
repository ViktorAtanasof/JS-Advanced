function listOfNames(arrOfStrings) {
    const sorted = arrOfStrings.sort((a, b) => a.localeCompare(b));
    let orderNumber = 1;

    sorted.forEach((name) => {
        console.log(`${orderNumber}.${name}`);
        orderNumber++;
    })
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
