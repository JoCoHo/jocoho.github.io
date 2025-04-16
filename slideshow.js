let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideTimer = setTimeout(() => {
    plusSlides(1);
  }, 30000); // slides automatically change after three seconds
}