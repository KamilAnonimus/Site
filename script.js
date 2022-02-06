const track = document.querySelector("#slider-track"),
  buttonPrev = document.querySelector(".btn-prev"),
  buttonNext = document.querySelector(".btn-next");

let slides = document.querySelectorAll("#slide");
let activeSlide = 0;
const slideWidth = 1186; //! Поищи как найти ширину блока
const slidesAmount = slides.length;

function showPreviousSlide() {
  activeSlide = activeSlide - 1 < 0 ? slidesAmount - 1 : activeSlide - 1;
  if (activeSlide === slidesAmount - 1) {
    track.removeChild(slides[activeSlide]);
    track.insertBefore(slides[activeSlide], slides[0]);
    slides = document.querySelectorAll("#slide");
    activeSlide = 0;
  }
  track.style.marginLeft = `-${slideWidth * activeSlide}px`;
}

function showNextSlide() {
  activeSlide = activeSlide + 1 > slidesAmount - 1 ? 0 : activeSlide + 1;
  if (activeSlide === 0) {
    track.removeChild(slides[0]);
    track.appendChild(slides[0]);
    slides = document.querySelectorAll("#slide");
    activeSlide--;
  }
  track.style.marginLeft = `-${slideWidth * activeSlide}px`;
}

buttonPrev.addEventListener("click", showPreviousSlide);
buttonNext.addEventListener("click", showNextSlide);
