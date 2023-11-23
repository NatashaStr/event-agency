const swiper = document.querySelector('.swiper');
const initSwiperEvents = new Swiper('.swiper',
    {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
    })


export default initSwiperEvents;