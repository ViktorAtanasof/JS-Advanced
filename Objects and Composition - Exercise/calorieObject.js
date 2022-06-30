function calorieObject(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (i % 2 === 0) {
            obj[element] = Number(arr[i + 1]);
        }
    }

    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
