const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = [];
ingredients.map(ingr => {
  const el = document.createElement('li');
  el.textContent = ingr;
  el.classList.add('item');
  list.push(el);
});

document.querySelector('#ingredients').append(...list);



