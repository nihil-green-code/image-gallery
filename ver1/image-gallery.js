// 'use strict';

// const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// const $img = document.querySelector('img');
// const $nationBox = document.getElementsByClassName('nationBox');

// $nationBox[0].classList.add('active');

// for (let i = 0; i < $nationBox.length; i++) {
//   $nationBox[i].addEventListener('click', function () {
//     for (let j = 0; j < $nationBox.length; j++) {
//       $nationBox[j].classList.remove('active');
//       // $nationBox[j].style.backgroundColor = '#aaaaaa';
//       // $nationBox[j].style.color = '#ffffffa0';
//     }

//     $img.src = `../images/${images[i]}`;
//     this.classList.add('active');
//     // this.style.backgroundColor = '#555555';
//     // this.style.color = '#ffffff';
//   });
// }

'use strict';

const imgSrc = 
['../images/img1.jpg',
'../images/img2.jpg',
'../images/img3.jpg',
'../images/img4.jpg',
'../images/img5.jpg'
];

let img = document.querySelector('img');
let nationBox = document.getElementsByClassName('nationBox');

nationBox[0].classList.add('active');

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', function () {
        for (let j = 0; j < nationBox.length; j++) {
            if (nationBox[i] == nationBox[j]) {
                nationBox[i].classList.add('active');
                img.src = imgSrc[i];
            }else{
                nationBox[j].classList.remove('active');
            }
        }
    })
}