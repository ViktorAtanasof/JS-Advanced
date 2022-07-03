function colorize() {
    const allTableRows = document.querySelectorAll('tr');

    for (let i = 1; i < allTableRows.length; i += 2) {
        allTableRows[i].style.background = 'Teal';
    }
}
