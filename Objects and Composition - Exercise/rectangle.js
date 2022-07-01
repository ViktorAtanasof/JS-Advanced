function rectangle(width, height, color) {
    const obj = {
        width,
        height,
        color,
        calcArea: () => {
            return result = obj.width * obj.height;
        }
    };

    let firstLetter = color.slice(0, 1).toUpperCase();
    let restLetters = color.slice(1);
    let colour = firstLetter + restLetters;

    obj.color = colour;
    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
