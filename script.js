// БУРГЕР МЕНЮ

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

  if (theme.getAttribute("href") == "style.css") {
    theme.href = "style-dark.css";

  } else {
    theme.href = "style.css";
  }
});



// СЛАЙДЕР START Pets in Zoo


// нахожу элементы
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let slideImg1 = document.getElementById('pets-img1');
let slideImg2 = document.getElementById('pets-img2');
let slideImg3 = document.getElementById('pets-img3');
let slideImg4 = document.getElementById('pets-img4');
let slideImg5 = document.getElementById('pets-img1');
let slideImg6 = document.getElementById('pets-img2');
let slideImg7 = document.getElementById('pets-img3');
let slideImg8 = document.getElementById('pets-img4');


// привязываю обработчики событий
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

//создаю массив с картинками
let imgUrl = [];
imgUrl.push("assets/images/panda.png");
imgUrl.push("assets/images/eagle.png");
imgUrl.push("assets/images/gorilla.png");
imgUrl.push("assets/images/crocodile.png");
imgUrl.push("assets/images/tigerLend.png");
imgUrl.push("assets/images/elephantLend.jpg");
imgUrl.push("assets/images/leonLend.jpg");
imgUrl.push("assets/images/zebraLend.jpg");
imgUrl.push("assets/images/908904722.jpeg");
imgUrl.push("assets/images/1431921595_019.jpg");
imgUrl.push("assets/images/prikolnye-kartinki-pro-zhivotnyh-onlajn-besplatno-1.jpg");

let valuePets = document.querySelector('.slider-range-pets');
let sliderPetsCount = document.querySelector('.wrapper-count-start-pets');

valuePets.value = 1;
let currentImgIndex = 0;
slideImg1.src = imgUrl[currentImgIndex];
slideImg2.src = imgUrl[currentImgIndex + 1];
slideImg3.src = imgUrl[currentImgIndex + 2];
slideImg4.src = imgUrl[currentImgIndex + 3];


prevBtn.disabled = true;

function onPrevBtnClick() {
  currentImgIndex--;
  valuePets.value = 1 + currentImgIndex;
  sliderPetsCount.innerHTML =  '0'+ (1 + currentImgIndex);
  slideImg1.src = imgUrl[currentImgIndex];
  slideImg2.src = imgUrl[currentImgIndex + 1];
  slideImg3.src = imgUrl[currentImgIndex + 2];
  slideImg4.src = imgUrl[currentImgIndex + 3];
  nextBtn.disabled = false; //раздизэйбливает кнопку слева, при нажатии хоть раз на правую
  if (currentImgIndex === 0) {
    prevBtn.disabled = true; //останавливает возможность нажатия
  }
};

function onNextBtnClick() {

  prevBtn.disabled = false; //раздизэйбливает кнопку справа, при нажатии хоть раз на левую
  if (currentImgIndex === (imgUrl.length - 5)) {
    nextBtn.disabled = true; //останавливает возможность нажатия
  }
  currentImgIndex++;
  valuePets.value = 1 + currentImgIndex;
  sliderPetsCount.innerHTML =  '0'+ (1 + currentImgIndex);
  slideImg1.src = imgUrl[currentImgIndex];
  slideImg2.src = imgUrl[currentImgIndex + 1];
  slideImg3.src = imgUrl[currentImgIndex + 2];
  slideImg4.src = imgUrl[currentImgIndex + 3];
};


//перемещение ползунка
let rangeValue = function(){
  let newValue = valuePets.value;
  sliderPetsCount.innerHTML =  '0' +  newValue;
  onNextBtnClick()
  
}
valuePets.addEventListener("input", rangeValue);

//СЛАЙДЕР FINISH


// СЛАЙДЕР START Testimonials

//перемещение ползунка

let valueTestimonials = document.querySelector('.slider-range-testimonials');
let sliderTestimonialsCount = document.querySelector('.wrapper-count-start-testimonials');
let rangeValueTestimonials = function(){
  let newValue = valueTestimonials.value;
  sliderTestimonialsCount.innerHTML =  '0' +  newValue;  
}
valueTestimonials.addEventListener("input", rangeValueTestimonials);

// нахожу элементы
let prevBtnTest = document.getElementById('testimonials-prev');
let nextBtnTest = document.getElementById('testimonials-next');
// let slideImg1 = document.getElementById('pets-img1');
// let slideImg2 = document.getElementById('pets-img2');
// let slideImg3 = document.getElementById('pets-img3');
// let slideImg4 = document.getElementById('pets-img4');
// let slideImg5 = document.getElementById('pets-img1');
// let slideImg6 = document.getElementById('pets-img2');
// let slideImg7 = document.getElementById('pets-img3');
// let slideImg8 = document.getElementById('pets-img4');
let card1 = document.querySelector('.testimonials-card1');
let card2 = document.querySelector('.testimonials-card2');
let card3 = document.querySelector('.testimonials-card3');


// привязываю обработчики событий
prevBtnTest.addEventListener('click', onPrevBtnClickTest);
// nextBtnTest.addEventListener('click', onNextBtnClickTest);

//создаю массив с картинками

let cards = [];
cards.push(card1);
cards.push(card2);
cards.push(card3);



let currentCardIndex = 0;
card1.src = cards[currentCardIndex];
card1.src = cards[currentCardIndex + 1];
card1.src = cards[currentCardIndex + 2];

prevBtnTest.disabled = true;

function onPrevBtnClickTest() {
  currentCardIndex--;
  card1.src = cards[currentCardIndex];
  card1.src = cards[currentCardIndex + 1];
  card1.src = cards[currentCardIndex + 2];
 
  nextBtnTest.disabled = false; //раздизэйбливает кнопку слева, при нажатии хоть раз на правую
  if (currentCardIndex === 0) {
    prevBtnTest.disabled = true; //останавливает возможность нажатия
  }
};

// function onNextBtnClick() {

//   prevBtn.disabled = false; //раздизэйбливает кнопку справа, при нажатии хоть раз на левую
//   if (currentImgIndex === (imgUrl.length - 5)) {
//     nextBtn.disabled = true; //останавливает возможность нажатия
//   }
//   currentImgIndex++;
//   slideImg1.src = imgUrl[currentImgIndex];
//   slideImg2.src = imgUrl[currentImgIndex + 1];
//   slideImg3.src = imgUrl[currentImgIndex + 2];
//   slideImg4.src = imgUrl[currentImgIndex + 3];
// };

//СЛАЙДЕР FINISH


// СЛАЙДЕР START How it works
let imagesHow = ['how_it_works1.png', 'how_it_works2.png', 'how_it_works3.png', 'how_it_works4.png' ];
let sliderHow =  document.getElementById('slider-time');
let imgHow = sliderHow.querySelector('.how-img-itm');
let valueHow = document.getElementById('slider-range-how');
let sliderHowCount = document.querySelector('.wrapper-count-start');

let i = 1;
valueHow.value = 1;

imgHow.src = 'assets/images/' + imagesHow[0];
window.setInterval (function(){
  imgHow.src = 'assets/images/' + imagesHow[i];
  valueHow.value = 1 + i;
  sliderHowCount.innerHTML = '0' + (i+1);
  i++;
  if(i == imagesHow.length ){
    i = 0;
  }
}, 1000)

//СЛАЙДЕР FINISH How it works

let valueWatch = document.querySelector('.slider-range-watch');
let sliderWatchCount = document.querySelector('.wrapper-count-start-watch');


//перемещение ползунка
let rangeValueWatch = function(){
  let newValue = valueWatch.value;
  sliderWatchCount.innerHTML =  '0' +  newValue;  
}
valueWatch.addEventListener("input", rangeValueWatch);

//СЛАЙДЕР FINISH

// СЛАЙДЕР Watch your favorite animal online
 
 let galerySlider = document.querySelector('.slider__wrapper')
 let galeryCards = document.querySelectorAll('.slider-card-img');
 let currentIndex = 1;

 galerySlider.addEventListener ('click', (e) => {
    if (e.target.classList.contains('galery__card')) {
        galeryCards.forEach((e) => {
            if(e.classList.contains('galery__card_active')) {
               e.classList.remove('galery__card_active');
              
              }
            });
           e.target.classList.add('galery__card_active');
           let newIndex = Array.prototype.indexOf.call(galeryCards, e.target); 
           if (newIndex === 0) {
            
            currentIndex = newIndex;
           }
           if (newIndex > currentIndex){
               for (let i = 0; i<newIndex-1; i++){
                galeryCards[i].classList.add('no-watch');
               }
        } else if (newIndex !== 0){
            galeryCards[newIndex-1].classList.remove('no-watch');
        }
        currentIndex = newIndex;
        changeRangeGallery();
     }
    });
  
    const gallerySlider = document.querySelector('.slider-range-watch');
    const rangeNum = document.querySelector('.wrapper-count-start-watch'); 
    
    
    gallerySlider.addEventListener('input', function(){
    let newValue = gallerySlider.value;
    rangeNum.innerHTML = '0' + newValue + '/'; 
    let newIndex = newValue-1;

   
    galeryCards.forEach((e) => {
        if(e.classList.contains('galery__card_active')) {
               e.classList.remove('galery__card_active');
              
            }
        });
    galeryCards[newIndex].classList.add('galery__card_active');
    
    
        currentIndex = newIndex;
    changeRangeGallery();
});


function changeRangeGallery(){
    let cardNum = currentIndex+1;
    gallerySlider.value = cardNum;
    rangeNum.innerHTML = '0' + cardNum + '/';
}


//СЛАЙДЕР FINISH