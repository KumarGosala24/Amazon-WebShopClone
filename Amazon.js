

let currentSlideIndex = 0;

function navigateSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentSlideIndex += direction;

    if (currentSlideIndex < 0) {
        currentSlideIndex = totalItems - 1; // Loop to the last slide
    } else if (currentSlideIndex >= totalItems) {
        currentSlideIndex = 0; // Loop to the first slide
    }

    const offset = -currentSlideIndex * 50; // Move by 100% per slide
    track.style.transform = `translateX(${offset}%)`;
}



let currentSlide = 0;

function navigateSlides(direction) {
    const track = document.querySelector('.slides');
    const totalItems = document.querySelectorAll('.slide').length;
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalItems - 1; // Loop to the last slide
    } else if (currentSlide >= totalItems) {
        currentSlide = 0; // Loop to the first slide
    }

    const offset = -currentSlide * 100; // Move by 100% per slide
    track.style.transform = `translateX(${offset}%)`;
}
