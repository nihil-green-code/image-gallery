'use strict';

const $container = document.getElementById('main_container');
const $img = $container.querySelector('img');
const $nation_container = $container.querySelector('.nation_container');
const $nationBox = $container.getElementsByClassName('nationBox');
let tmp = $nationBox[0];

const images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/img4.jpg',
  '../images/img5.jpg',
];

function imageChange() {
  $img.setAttribute('src', `../images/${images[this.textContent - 1]}`);
  tmp.style.opacity = '.3';
  this.style.opacity = '1';

  tmp = this;
}

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', imageChange);
}