function carFactory(car) {
    const carSpecs = {
        model: car.model,
        engine: car.power,
        carriage: car.carriage,
        wheels: car.wheelsize
    };

    if (car.power <= 90) {
        carSpecs.engine = { power: 90, volume: 1800 };
    } else if (car.power > 90 && car.power <= 120) {
        carSpecs.engine = { power: 120, volume: 2400 };
    } else {
        carSpecs.engine = { power: 200, volume: 3500 };
    }

    if (car.carriage == 'hatchback') {
        carSpecs.carriage = { type: 'hatchback', color: car.color };
    } else {
        carSpecs.carriage = { type: 'coupe', color: car.color };
    }

    const allWheels = [];
    if (car.wheelsize % 2 !== 0) {
        for (let i = 0; i < 4; i++) {
            allWheels.push(car.wheelsize);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            allWheels.push(car.wheelsize - 1);
        }
    }
    carSpecs.wheels = allWheels;

    return carSpecs;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
