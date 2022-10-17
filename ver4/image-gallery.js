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

// 1. slideCount 없애고 다른 방법을 강구하라. = 해결
// 2. setInterval이 두번 나온다. 모듈을 이용하라. = 심사 대기

const $nationBox = $container.getElementsByClassName('nationBox');
let tmp = $nationBox[0];
let intervalId, trigger = true;

function slide() {
  const computedIndex = tmp.textContent % images.length;

  $img.setAttribute('src', images[computedIndex]);
  tmp.style.opacity = '.3';
  $nationBox[computedIndex].style.opacity = '1';
  tmp = $nationBox[computedIndex];
}

function start() {
  intervalId = setInterval(slide, 1500);
};

function stop() {
  clearInterval(intervalId);
};

start();

$container.addEventListener('click', function () {
  if (trigger) {
    stop()
  }
  else {
    start();
  }

  trigger = !trigger;
});