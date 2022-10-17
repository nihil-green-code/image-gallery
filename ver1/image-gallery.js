'use strict';

const $container = document.getElementById('main_container');
const $img = $container.querySelector('img');
const $nationBox = $container.getElementsByClassName('nationBox');
let tmp = $nationBox[0];

// function imageChange() {
//   $img.setAttribute('src', `../images/img${this.textContent}.jpg`);
//   tmp.style.opacity = '.3';
//   this.style.opacity = '1';
//   tmp = this;
// }

// for (let i = 0; i < $nationBox.length; i++) {
//   $nationBox[i].addEventListener('click', imageChange);
// }

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', function () {
    $img.setAttribute('src', `../images/img${this.textContent}.jpg`);
    tmp.style.opacity = '.3';
    this.style.opacity = '1';

    tmp = this;
});
}