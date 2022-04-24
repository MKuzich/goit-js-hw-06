let counterValue = 0;
const decrement = document.querySelector('[data-action=decrement]');
const increment = document.querySelector('[data-action=increment]');
const value = document.querySelector('#value');
const plus = () => {
    counterValue += 1;
    return value.textContent = counterValue;}
const minus = () => {
    counterValue -= 1;
    return value.textContent = counterValue;}
decrement.addEventListener('click', minus);
increment.addEventListener('click', plus);