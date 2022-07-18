function addItem() {
    const input = document.getElementById('newItemText').value;
    const list = document.querySelector('ul');
    const newElement = document.createElement('li');

    newElement.textContent = input;
    list.appendChild(newElement);
}
