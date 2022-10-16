'use strict';

const imageCount = 7;
const images = new Array(imageCount);

for (let i = 0; i < images.length; i++) {
  images[i] = `img${i + 1}`;
}

const $img = document.querySelector('img');
const $nation_container = document.querySelector('.nation_container');
const $nationBox = document.getElementsByClassName('nationBox');

for (let i = 5; i < images.length; i++) {
  $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

$nationBox[0].classList.add('active');

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', function () {
    for (let j = 0; j < $nationBox.length; j++) $nationBox[j].classList.remove('active');

    $img.src = `../images/${images[i]}.jpg`;
    this.classList.add('active');
  });
}