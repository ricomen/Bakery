var slides = document.querySelectorAll('.slider__item');
var btnPrev = document.querySelector('.btn--prev');
var btnNext = document.querySelector('.btn--next');
                      


function initSlider() {//выстаиваем слайды
  for(var i = 0;  i < slides.length; i++) {
    slides[i].style.left = (slides[i].offsetWidth * i) + "px";
  }
}
function checkLastSlide() {//проверяем крайний  
   if(parseInt(slides[0].style.left) !== parseInt(-(slides.length-1)*slides[0].offsetWidth)) {    
    return true;
  } else return false;
}
function checkFirstSlide() {//проверяем крайний   
   if (parseInt(slides[0].style.left) !== 0) {     
    return true;
  } else return false;
}
function lastSlide() {//передвигаем последний слайд в начало
  for (var i = 0; i < slides.length; i++) {    
    slides[i].style.left = -parseInt(slides[0].offsetWidth * ((slides.length - i)-1))+ "px";
  }
}
btnNext.onclick = function nextSlide() {//след. слайд
  if(checkLastSlide()) {
    for(var i = 0;  i < slides.length; i++) {
      slides[i].style.left = parseInt(slides[i].style.left) - slides[0].offsetWidth + "px";    
      }
    } else initSlider();  
}
btnPrev.onclick = function nextSlide() {//пред. слайд
  if(checkFirstSlide()) {
    for(var i = 0;  i < slides.length; i++) {
      slides[i].style.left = parseInt(slides[i].style.left) + slides[0].offsetWidth + "px";
    }
  } else lastSlide();

  initSlider();
}