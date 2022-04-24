const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')
function onInputChange(event) {
    return text.style.fontSize = `${event.currentTarget.value}px`;
}
input.addEventListener('input', onInputChange);