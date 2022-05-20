function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
let amount = 0;
const boxesArray = [];

input.addEventListener('input', changeAmount);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function changeAmount() {
  return amount = Number(input.value);
}

function createBoxes() {
  const length = boxesArray.length;
  for (let i = 0; i < amount; i += 1) {
    boxesArray.push(document.createElement('div'));
    boxesArray[i + length].style.backgroundColor = getRandomHexColor();
    boxesArray[i + length].style.height = `${30 + i * 10}px`;
    boxesArray[i + length].style.width = `${30 + i * 10}px`;
  }
  input.value = "";
  return boxes.append(...boxesArray);
}

function destroyBoxes() {
  boxes.querySelectorAll('div').forEach(el => el.remove());
  boxesArray.length = 0;
}
