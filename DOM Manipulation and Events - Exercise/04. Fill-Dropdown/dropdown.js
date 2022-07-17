function addItem() {
    const inputText = document.querySelector('input[id="newItemText"]');
    const inputValue = document.querySelector('input[id="newItemValue"]');
    const menu = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = inputText.value;
    option.value = inputValue.value;

    menu.appendChild(option);

    inputText.value = '';
    inputValue.value = '';
}
