const examplesCards = document.querySelectorAll('.examples__card');

examplesCards.forEach((card) => {
  const sliderEl = card.querySelector('.examples__card-slider .swiper');
  const prevButtonEl = card.querySelector('.examples__card-slider-controls-prev');
  const nextButtonEl = card.querySelector('.examples__card-slider-controls-next');

  const swiper = new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: nextButtonEl,
      prevEl: prevButtonEl,
    },
  });
});

const stonesSliders = document.querySelectorAll('.stones__slider');

stonesSliders.forEach((stonesSlider) => {
  const sliderEl = stonesSlider.querySelector('.swiper');
  const prevButtonEl = stonesSlider.querySelector('.stones__slider-controls-prev');
  const nextButtonEl = stonesSlider.querySelector('.stones__slider-controls-next');

  const swiper = new Swiper(sliderEl, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1120: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: nextButtonEl,
      prevEl: prevButtonEl,
    },
  });
});
