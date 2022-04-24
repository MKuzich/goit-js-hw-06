const body = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color')

changeColor.addEventListener('click', backgroundChange)

function backgroundChange() {
  const newColor = getRandomHexColor();
  color.textContent = newColor;
  body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

