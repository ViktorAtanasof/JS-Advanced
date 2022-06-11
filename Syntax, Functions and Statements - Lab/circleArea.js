function circleArea(arg) {
    if (typeof arg == 'number') {
        let radius = arg ** 2 * Math.PI;
        console.log(radius.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    }
}

circleArea(5);
circleArea('name');
