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

// ==================== 슬라이드  ====================

// 1. slideCount 없애고 다른 방법을 강구하라.
// 2. setInterval이 두번 나온다.

const $nationBox = $container.getElementsByClassName('nationBox');
let tmp = $nationBox[0];
let intervalId, slideCount = 1, trigger = true;

function slide() {
  return setInterval(function () {
    $img.setAttribute('src', images[slideCount]);

    tmp.style.opacity = '.3';
    $nationBox[slideCount].style.opacity = '1';
    tmp = $nationBox[slideCount++];

    if (slideCount === images.length) slideCount = 0;
  }, 1500);
}

intervalId = slide();

$container.addEventListener('click', function () {
  if (trigger) {
    clearInterval(intervalId);
  }
  else {
    intervalId = slide();
  }

  trigger = !trigger;
});