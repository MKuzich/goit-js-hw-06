const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const array = [];
const gallery = document.querySelector('.gallery');
for (let i = 0; i < images.length; i += 1) {
  array.push(document.createElement('li'));
  array[i].insertAdjacentHTML("afterbegin", `<img src=${images[i].url} alt=${images[i].alt} />`);
}
gallery.append(...array);
document.querySelectorAll('.gallery img').forEach(el => el.classList.add('img'));
document.querySelectorAll('.gallery li').forEach(el => el.classList.add('item'));
const imgs = document.querySelectorAll('.img');
const items = document.querySelectorAll('.item');
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
imgs.forEach(el => el.style.width = "45vw");
items.forEach(el => el.style.listStyleType = "none");
items.forEach(el => el.style.marginBottom = "1vw");
items.forEach(el => el.style.marginRight = "1vw");
