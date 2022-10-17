'use strict';

const $container = document.getElementById('main_container'),
  $img = $container.querySelector('img'),
  $nation_container = $container.querySelector('.nation_container');

const images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/img4.jpg',
  '../images/img5.jpg',
  '../images/iu.jpg',
  '../images/arin.jpg',
  '../images/shin-saekyeong.jpg',
];

for (let i = 0; i < images.length; i++) {
  $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

// ==================== 실행 ====================

const $nationBox = $container.getElementsByClassName('nationBox');
let tmp = $nationBox[0];

function imageChange() {
  $img.setAttribute('src', images[this.textContent - 1]);
  tmp.style.opacity = '.3';
  this.style.opacity = '1';

  tmp = this;
}

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', imageChange);
}