function roadRadar(speed, area) {
    let result = '';
    let speedLimit = 0;
    let difference = 0;
    let status = '';

    switch (area) {
        case 'residential':
            speedLimit = 20;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
        default:
            break;
    }

    if (speed <= speedLimit && speed > 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        difference = speed - speedLimit;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving';
        }

        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    if (result.length > 0) {
        console.log(result);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
