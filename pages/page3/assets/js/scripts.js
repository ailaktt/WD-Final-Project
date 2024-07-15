document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;

    function updateCarousel() {
        const width = carouselInner.querySelector("img").clientWidth;
        console.log(`Current index: ${currentIndex}, Image width: ${width}`);
        carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    prevButton.addEventListener("click", function() {
        console.log('Prev button clicked');
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselInner.children.length - 1;
        }
        updateCarousel();
    });

    nextButton.addEventListener("click", function() {
        console.log('Next button clicked');
        if (currentIndex < carouselInner.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Handle window resize
    window.addEventListener("resize", updateCarousel);

    // Initial update
    updateCarousel();
});
