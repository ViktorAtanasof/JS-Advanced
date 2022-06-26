function townPopulation(arr) {
    const obj = {};

    for (let element of arr) {
        let [town, population] = element.split(' <-> ');
        let pop = Number(population);

        if (obj.hasOwnProperty(town)) {
            obj[town] += pop;
        } else {
            obj[town] = pop;
        }
    }

    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
