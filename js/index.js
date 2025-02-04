const examplesCards = document.querySelectorAll('.examples__card');

examplesCards.forEach((card) => {
  const slider = card.querySelector('.examples__card-slider .swiper');
  const prevButton = card.querySelector('.examples__card-slider-controls-prev');
  const nextButton = card.querySelector('.examples__card-slider-controls-next');

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
});
