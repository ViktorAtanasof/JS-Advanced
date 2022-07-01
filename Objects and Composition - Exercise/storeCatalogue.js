function storeCatalogue(arr) {
    const obj = {};

    for (let element of arr) {
        let [product, price] = element.split(" : ");
        price = Number(price);
        letter = product.slice(0, 1);

        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = {};
        }

        obj[letter][product] = price;
    }

    const sortLetters = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (let letter of sortLetters) {
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a, b) => a.localeCompare(b));

        for (let product of sortedProducts) {
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}

storeCatalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]);
storeCatalogue(["Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"]);
