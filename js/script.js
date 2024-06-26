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

  function createTimer() {
    let min = 29;
    let sec = 59;
    const timer = document.getElementById('timer');
    const orderForm = document.getElementById('order-form');
    timer.textContent = `Hurry Up! Sale ends in ${min}:${sec}!`;

    let counter = setInterval(() => {
      sec = sec - 1;

      if (sec === 0) {
        min = min - 1;
        sec = 59;
      }

      timer.textContent = `Hurry Up! Sale ends in ${min}:${sec}!`;

      if (sec < 10) {
        timer.textContent = `Hurry Up! Sale ends in ${min}:0${sec}!`;
      }

      if (min < 10) {
        timer.textContent = `Hurry Up! Sale ends in 0${min}:${sec}!`;
      }

      if (sec < 10 && min < 10) {
        timer.textContent = `Hurry Up! Sale ends in 0${min}:0${sec}!`;
      }

      orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        clearInterval(counter);
      });
    }, 1000);
  }

  createTimer();
});