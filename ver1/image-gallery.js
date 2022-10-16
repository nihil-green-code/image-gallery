'use strict';

// HTML 태그 가져옴
const $img = document.querySelector('img');
const $nationBox = document.getElementsByClassName('nationBox');

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// 첫 번째(1번) 링크의 class 속성 값에 active 추가
$nationBox[0].classList.add('active');

// 이벤트리스너를 위한 반복.
// 이벤트리스너는 말 그대로 이벤트를 등록하는 것이기 때문에 반복문 돌려도 상관 없음.
for (let i = 0; i < $nationBox.length; i++) {
  // 0부터 4까지 반복문을 돌리는데, $nationBox의 각 요소에 이벤트리스너가 등록됨.
  // '클릭'했을 때에 실행되는 이벤트를 등록함.
  $nationBox[i].addEventListener('click', function () {
    for (let j = 0; j < $nationBox.length; j++) {
      if (i === j) {
        // 외부 반복문과 내부 반복문의 인덱스가 일치할 때에
        // 이미지의 src를 변경. 링크에 active 클래스 부여.
        $img.src = `../images/${images[i]}`;
        this.classList.add('active');

        // 클래스 줬다 뺐는 것을 안하려면 깡으로 스타일 수정해야함.
        // 이렇게 하면 인라인 스타일이 바뀌기 때문에 미관상에 이롭지 않음.
        
        // this.style.backgroundColor = '#555555';
        // this.style.color = '#ffffff';
      } else {
        // 그게 아니라면 active 클래스 제거.
        $nationBox[j].classList.remove('active');

        // $nationBox[j].style.backgroundColor = '#aaaaaa';
        // $nationBox[j].style.color = '#ffffffa0';
      }
    }
  });
}