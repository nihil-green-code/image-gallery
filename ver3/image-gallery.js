'use strict';

// HTML 태그 불러옴
const $img = document.querySelector('img');
const $nation_container = document.querySelector('.nation_container');
const $nationBox = document.getElementsByClassName('nationBox');

// 이미지 개수
const imageCount = 8;
const images = new Array(imageCount);

// 마찬가지로 배열에 이미지 이름 넣음.
for (let i = 0; i < images.length; i++) {
  images[i] = `img${i + 1}`;
}

// 이미지 개수만큼 링크 생성. 버전 2와는 다르게 0부터 시작해야함.
for (let i = 0; i < images.length; i++) {
  $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

// 생략
$nationBox[0].classList.add('active');

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', function () {
    for (let j = 0; j < $nationBox.length; j++) {
      if (i === j) {
        $img.src = `../images/${images[i]}.jpg`;
        this.classList.add('active');
      } else {
        $nationBox[j].classList.remove('active');
      }
    }
  });
}