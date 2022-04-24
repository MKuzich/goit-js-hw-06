const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const onInputChange = (event) => {
    if (event.currentTarget.value === "") {
        return output.textContent = 'Anonymous';
    }
    return output.textContent = event.currentTarget.value;
}
input.addEventListener('input', onInputChange);
