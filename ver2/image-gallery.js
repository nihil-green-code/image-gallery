'use strict';

// HTML 태그 불러옴
const $img = document.querySelector('img');
const $nation_container = document.querySelector('.nation_container');
const $nationBox = document.getElementsByClassName('nationBox');

// 이미지의 개수
const imageCount = 7;
const images = new Array(imageCount);

// 배열에 이미지 개수대로 이미지 이름 넣음.
for (let i = 0; i < images.length; i++) {
  images[i] = `img${i + 1}`;
}

// 추가되는 이미지만큼 링크도 함께 추가.
// 5부터.
for (let i = 5; i < images.length; i++) {
  $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

// 1번 링크에 active 클래스 추가
$nationBox[0].classList.add('active');

// 버전 1과 동일
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