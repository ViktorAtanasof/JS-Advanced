function heroicInventory(arr) {
    const result = [];

    for (let element of arr) {
        const heroData = {};
        let [name, level, items] = element.split(' / ');
        let lvl = Number(level);

        items = items ? items.split(", ") : [];

        heroData.name = name;
        heroData.level = lvl;
        heroData.items = items;

        result.push(heroData);
    }

    console.log(JSON.stringify(result));

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
