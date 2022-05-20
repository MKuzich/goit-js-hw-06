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
const gallery = document.querySelector('.gallery');

images.forEach((image) => {
  gallery.insertAdjacentHTML("afterbegin", 
  `<li
  class="item"
  style="list-style-type: none; margin-bottom: 1vw; margin-right: 1vw"
>
  <img src="${image.url}" alt="${image.alt}" class="img" style="width: 45vw;" />
</li>`);
});

gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
