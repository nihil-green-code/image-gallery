'use strict';

const images = ['img1', 'img2', 'img3', 'img4', 'img5'];

const $img = document.querySelector('img');
const $nationBox = document.getElementsByClassName('nationBox');

$nationBox[0].classList.add('active');

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', function () {
    for (let j = 0; j < $nationBox.length; j++) $nationBox[j].classList.remove('active');

    $img.src = `../images/${images[i]}.jpg`;
    this.classList.add('active');
  });
}