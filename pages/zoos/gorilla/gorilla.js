(function burgerMenu () {
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
  let themeEagle = document.getElementById('themeEagle');
  
  if (themeEagle.getAttribute("href") == "gorilla.css") {
    themeEagle.href = "gorilla-dark.css";
    theme.href = "../../../style-dark.css";
    
  } else {
    theme.href = "../../../style.css";
    themeEagle.href = "gorilla.css";
    
  }
});