var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex=1
  }
  if (n<1) {
    slideIndex=slides.length
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display="none"; // свойство .style.display = "none" скрывает слайды
  }
  for (i=0; i < dots.length; i++) {
    dots[i].className=dots[i].className.replace("active", ""); // очищаем весь массив dots от класса active
  }
  slides[slideIndex-1].style.display = "block"; // показываем первый слайд slides[0]
  dots[slideIndex-1].className += " active"; // добавляем класс active первому элементу dots[0]
}