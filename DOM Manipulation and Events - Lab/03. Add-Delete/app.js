function addItem() {
    const input = document.getElementById('newItemText');
    const listItem = document.createElement('li');
    listItem.textContent = input.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onClick);

    document.getElementById('items').appendChild(listItem);

    input.value = '';

    function onClick(ev) {
        ev.target.parentElement.remove();
    }
}
