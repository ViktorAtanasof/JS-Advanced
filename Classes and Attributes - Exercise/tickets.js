function tickets(arr, criteria) {
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = [];

    for (let ele of arr) {
        let [destination, price, status] = ele.split('|');
        price = Number(price);

        result.push(new Tickets(destination, price, status));
    }

    result.sort((a, b) => {
        if (criteria == 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criteria == 'status') {
            return a.status.localeCompare(b.status);
        } else if (criteria == 'price') {
            return a.price - b.price;
        }
    });

    return result;
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');
