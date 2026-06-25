new Swiper(".hero-swiper", {
    loop: true,
    effect: "fade",
    speed: 1500,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});