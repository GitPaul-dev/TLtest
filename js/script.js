window.addEventListener('DOMContentLoaded', () => {

  let carousel = new Swiper('.feedback-swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
  });

});