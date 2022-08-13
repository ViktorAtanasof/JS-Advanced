function juiceFlavors(arr) {
    const juiceStorage = {};
    const bottles = {};

    for (let ele of arr) {
        let [juice, quantity] = ele.split(' => ');
        quantity = Number(quantity);

        if (juiceStorage.hasOwnProperty(juice)) {
            juiceStorage[juice] += quantity;
        } else {
            juiceStorage[juice] = quantity;
        }

        while (juiceStorage[juice] >= 1000) {
            juiceStorage[juice] -= 1000;
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }
            if (bottles.hasOwnProperty(juice)) {
                bottles[juice] += 1;
            }
        }
    }

    for (let key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);
