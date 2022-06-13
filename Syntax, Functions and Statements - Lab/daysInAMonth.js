function daysInAMonth(month, year) {
    const days = new Date(year, month, 0).getDate();

    return days;
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
