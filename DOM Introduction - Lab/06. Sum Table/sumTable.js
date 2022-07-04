function sumTable() {
    const tableRows = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;

    for (let row of tableRows) {
        const value = Number(row.lastElementChild.textContent);
        sum += value;
    }

    document.getElementById('sum').textContent = sum;
}
