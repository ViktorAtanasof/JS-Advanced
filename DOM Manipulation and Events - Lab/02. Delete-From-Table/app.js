function deleteByEmail() {
    const input = document.querySelector('input').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const result = document.getElementById('result');

    for (let row of rows) {
        if (row.children[1].textContent == input) {
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.'
        }
    }
}
