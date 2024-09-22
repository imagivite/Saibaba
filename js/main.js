(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    const adCards = document.querySelector('.ad-cards');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showAds() {
        adCards.style.transform = `translateX(-${index * 100}%)`; // Move ads
        updateDots();
    }

    function moveSlide(direction) {
        index = (index + direction + dots.length) % dots.length; // Cycle through ads
        showAds();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    setInterval(() => moveSlide(1), 3000); // Change ad every 3 seconds

})(jQuery);

