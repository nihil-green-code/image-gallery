'use strict';

const $img = document.querySelector('img');
const $nation_container = document.querySelector('.nation_container');
const $nationBox = document.getElementsByClassName('nationBox');
const $main_container = document.querySelector('#main_container');
const imageCount = 8;
const images = new Array(imageCount);

let indexNumber = 1, trigger = true;
let intervalId;

function imageSlide() {
  return setInterval(() => {
    $img.src = `../images/${images[indexNumber]}.jpg`;

    for (let j = 0; j < $nationBox.length; j++) $nationBox[j].classList.remove('active');
    $nationBox[indexNumber].classList.add('active');
    indexNumber++;

    if (indexNumber > imageCount - 1) indexNumber = 0;
  }, 1500);
}

for (let i = 0; i < images.length; i++) {
  images[i] = `img${i + 1}`;
  $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

$nationBox[0].classList.add('active');

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', function () {
    for (let j = 0; j < $nationBox.length; j++) {
      if (i === j) {
        $img.src = `../images/${images[i]}.jpg`;
        this.classList.add('active');
        indexNumber = i;
      } else {
        $nationBox[j].classList.remove('active');
      }
    }
  });
}

intervalId = imageSlide();

$main_container.addEventListener('click', function () {
  if (trigger) {
    clearInterval(intervalId);
    trigger = !trigger;
  } else {
    clearInterval(intervalId);
    intervalId = imageSlide();
    trigger = !trigger;
  }
});