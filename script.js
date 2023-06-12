
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}


function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    const slideWidth = slides[0].offsetWidth;
    const slideContainer = document.querySelector(".slides");
    slideContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

