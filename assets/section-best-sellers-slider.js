document.addEventListener('DOMContentLoaded', function () {
    var autoplayTime = window.sliderConfig.autoplayTime * 1000;
    var stopAutoplay = window.sliderConfig.stopAutoplay;

    var mySwiper = new Swiper('.swiper-container.best-sellers-slider__swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 24,
        slidesOffsetAfter: 0,
        navigation: {
            nextEl: '.best-sellers-slider__button-next',
            prevEl: '.best-sellers-slider__button-prev',
        },
        autoplay: stopAutoplay ? false : {
            delay: autoplayTime,
        },
        lazy: {
            loadPrevNext: true,
        },
        on: {
            lazyImageReady: (swiper) => { swiper.update(); }
        },
    });
});
