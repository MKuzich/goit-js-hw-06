const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = [];
for (let i = 0; i < ingredients.length; i += 1) {
  list.push(document.createElement('li'));
  list[i].textContent = ingredients[i];
  list[i].classList.add('item');
}
document.querySelector('#ingredients').append(...list);