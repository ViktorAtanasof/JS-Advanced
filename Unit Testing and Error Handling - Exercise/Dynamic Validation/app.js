function validate() {
    const input = document.querySelector('input');

    input.addEventListener('change', onChange);

    function onChange(ev) {
        if (input.value.match(/^[a-z-\.]+@[a-z-\.]+\.[a-z]{2,4}/)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}
