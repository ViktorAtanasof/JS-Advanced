function squareOfStars(num) {
    let star = '* ';
    let concatStars = '';

    for (let i = 1; i <= num; i++) {
        concatStars = '';
        for (let a = 1; a <= num; a++) {
            concatStars += star;
        }
        console.log(concatStars);
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
