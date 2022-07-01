function lowestPricesInCities(arr) {
    const obj = {};

    for (let element of arr) {
        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = { town, price };
        } else {
            if (price < obj[product].price) {
                obj[product] = { town, price };
            }
        }
    }

    for (let key in obj) {
        let objValue = obj[key];

        console.log(`${key} -> ${objValue.price} (${objValue.town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
