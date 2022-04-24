const input = document.querySelector('#validation-input');
const onInputCheck = event => {
    event.currentTarget.classList.add('invalid');
    if (event.currentTarget.value.length === Number(event.currentTarget.getAttribute('data-length'))) {
        return event.currentTarget.classList.replace('invalid', 'valid');
    }
    return event.currentTarget.classList.replace('valid', 'invalid');
}
input.addEventListener('blur', onInputCheck);
