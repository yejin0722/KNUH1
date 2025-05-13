var swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 0, 
    centeredSlides: true, 
    slidesPerView: 3, 
    autoplay: {delay: 3000,},
    speed: 1000,
    effect: 'slide',
});
var swiper = new Swiper(".mySwiper02", {
    autoplay:{delay:3000},
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    speed: 1000,
});
window.addEventListener('resize', function() {
    if (document.body.clientWidth <= 768) {
        swiper.params.slidesPerView = 2;
    }else{
        swiper.params.slidesPerView = 4;
    }
        swiper.update();
});
window.addEventListener('DOMContentLoaded', function() {
    if (document.body.clientWidth <= 768) {
        swiper.params.slidesPerView = 2;
    }else{
        swiper.params.slidesPerView = 4;
    }
        swiper.update();
});