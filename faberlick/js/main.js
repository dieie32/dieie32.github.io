$('.product-items-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.expert-review-item-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const myModal = document.querySelector('#myModal');
const openBtn = document.querySelector('#myBtn');
const spanBtn = document.querySelector('#closeBtn');

openBtn.addEventListener('click', () => {
  myModal.style.display = 'block';
});

spanBtn.addEventListener('click', () => {
  myModal.style.display = 'none';
});

const myModalTwo = document.querySelector('#myModalTwo');
const openBtnTwo = document.querySelector('#myBtnTwo');
const spanBtnTwo = document.querySelector('#closeBtnTwo');

openBtnTwo.addEventListener('click', () => {
  myModalTwo.style.display = 'block';
});

spanBtnTwo.addEventListener('click', () => {
  myModalTwo.style.display = 'none';
});

const myModalThree = document.querySelector('#myModalThree');
const openBtnThree = document.querySelector('#myBtnThree');
const spanBtnThree = document.querySelector('#closeBtnThree');

openBtnThree.addEventListener('click', () => {
  myModalThree.style.display = 'block';
});

spanBtnThree.addEventListener('click', () => {
  myModalThree.style.display = 'none';
});

const myModalFour = document.querySelector('#myModalFour');
const openBtnFour = document.querySelector('#myBtnFour');
const spanBtnFour = document.querySelector('#closeBtnFour');

openBtnFour.addEventListener('click', () => {
  myModalFour.style.display = 'block';
});

spanBtnFour.addEventListener('click', () => {
  myModalFour.style.display = 'none';
});

const myModalFive = document.querySelector('#myModalFive');
const openBtnFive = document.querySelector('#myBtnFive');
const spanBtnFive = document.querySelector('#closeBtnFive');

openBtnFive.addEventListener('click', () => {
  myModalFive.style.display = 'block';
});

spanBtnFive.addEventListener('click', () => {
  myModalFive.style.display = 'none';
});

window.onclick = function(event) {
  switch (event.target) {
    case myModal:
      myModal.style.display = 'none';
      break;

    case myModalTwo:
      myModalTwo.style.display = 'none';
      break;

    case myModalThree:
      myModalThree.style.display = 'none';
      break;

    case myModalFour:
      myModalFour.style.display = 'none';
      break;

    default:
      break;
  }
};

const toggle = document.querySelector('.toggle-button');
const navigation = document.querySelector('.navigation');

const slises = Array.from(document.querySelectorAll('.slise'));
const links = Array.from(document.querySelectorAll('.links li a'));

slises &&
  slises.forEach(slises =>
    toggle.addEventListener('click', () => {
      slises.classList.toggle('active');
    })
  );

toggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

///////////////////////////////

// var textWrapper = document.querySelector('.ml7 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /([^\x00-\x80]|\w)/g,
//   "<span class='letter'>$&</span>"
// );

// anime.timeline({loop: false}).add({
//   targets: '.ml7 .letter',
//   translateY: ['3em', 0],
//   translateX: [0, 0],
//   translateZ: 0,
//   rotateZ: [0, 0],
//   duration: 200,
//   easing: 'easeOutExpo',
//   delay: function(el, i) {
//     return 500 + 50 * i;
//   },
// });


// //////////////////////////////

// var textWrapperTwo = document.querySelector('.ml7 .letters-two');
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /([^\x00-\x80]|\w)/g,
//   "<span class='letter'>$&</span>"
// );

// anime.timeline({loop: false}).add({
//   targets: '.ml7 .letter-two',
//   translateY: ['3em', 0],
//   translateX: [0, 0],
//   translateZ: 0,
//   rotateZ: [0, 0],
//   duration: 200,
//   easing: 'easeOutExpo',
//   delay: function(el, i) {
//     return 500 + 50 * i;
//   },
// });