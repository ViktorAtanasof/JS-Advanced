function fruit(fruit, weightInG, pricePerKg) {
    let weightToKg = weightInG / 1000;
    let totalPrice = weightToKg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightToKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
