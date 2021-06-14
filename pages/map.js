(function burgerMenu() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header-nav');
  const menuClose = document.querySelector('.header-nav-close');
  burgerItem.addEventListener('click', () => {
    console.log('burger');
    menu.classList.add('header-nav-active');
    menuClose.addEventListener('click', () => {
      menu.classList.remove('header-nav-active');

    });
  });
}());


// THEME

let switchMode = document.querySelector('.switch-slider');


switchMode.addEventListener('click', () => {
  console.log('come to us on the dark side. we have cookies');
  let theme = document.getElementById('theme');
  let themeMap = document.getElementById('themeMap');

  if (themeMap.getAttribute("href") == "map.css") {

    themeMap.href = "map-dark.css";
    theme.href = "../style-dark.css";

  } else {
    theme.href = "../style.css";
    themeMap.href = "map.css";
  }
});


// СЛАЙДЕР START MAP


// нахожу элементы
let prevBtn = document.getElementById('prevMap');
let nextBtn = document.getElementById('next');
let imgCollection = document.querySelectorAll('.img-collection-item');
let slideImg1 = document.getElementById('pets-img1');
let slideImg2 = document.getElementById('pets-img2');
let slideImg3 = document.getElementById('pets-img3');
let slideImg4 = document.getElementById('pets-img4');
let slideImg5 = document.getElementById('pets-img5');
let slideImg6 = document.getElementById('pets-img6');
let slideImg7 = document.getElementById('pets-img7');
let slideImg8 = document.getElementById('pets-img8');

let valueMap = document.querySelector('.slider-range-map');
let sliderCount = document.querySelector('.wrapper-count-start');

// привязываю обработчики событий
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

// slideImg2.classList.add('img-item-active');
let i = 1;
valueMap.value = 2;
imgCollection[1].classList.add('img-item-active');

function onPrevBtnClick() {
  i--;
  if (i >= 0) {
    valueMap.value = 1 + i;
    sliderCount.innerHTML = '0' + (1 + i);
    
    imgCollection[i].classList.add('img-item-active');
    imgCollection[i + 1].classList.remove('img-item-active');

  } else {
    i = 7;
    valueMap.value = 1 + i;
    sliderCount.innerHTML = '0' + (1 + i);
    imgCollection[i].classList.add('img-item-active');
    imgCollection[0].classList.remove('img-item-active');
  }
};

function onNextBtnClick() {
  i++;
  if (i <= 7) {
    valueMap.value = 1 + i;
    sliderCount.innerHTML = '0' + (1 + i);
    imgCollection[i].classList.add('img-item-active');
    imgCollection[i - 1].classList.remove('img-item-active');

  } else {
    i = 0;
    valueMap.value = 1 + i;
    sliderCount.innerHTML = '0' + (1 + i);
    imgCollection[i].classList.add('img-item-active');
    imgCollection[7].classList.remove('img-item-active');
  }
};

//перемещение ползунка
let rangeValueMap = function(){
  let newValue = valueMap.value;
  sliderCount.innerHTML = '0' +  newValue;
  onNextBtnClick()
  
}
valueMap.addEventListener("input", rangeValueMap);


let slideIcon1 = document.querySelector('.slide-icon-panda');
let slideIcon2 = document.querySelector('.slide-icon-gorill');
let slideIcon3 = document.querySelector('.slide-icon-crocodile');
let slideIcon4 = document.querySelector('.slide-icon-eagle');

function onImgClick (){
  console.log('click');
  // slideIcon1.classList.add('.int-icon-item-eagle:hover');
};
slideImg1.addEventListener('click', onImgClick);
slideImg2.addEventListener('click', onImgClick);
slideImg3.addEventListener('click', onImgClick);
slideImg4.addEventListener('click', onImgClick);

//СЛАЙДЕР FINISH