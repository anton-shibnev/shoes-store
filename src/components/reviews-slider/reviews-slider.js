import Slider from '../../js/common/Slider';

const reviewsSlider = (idName) => {
  const opt = {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    perTouch: 2,
    dragThreshold: false,
    gap: -30,
    rewindDuration: 5000,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
      1024: {
        perView: 2,
        perTouch: 2,
        gap: 0,
      },
      767: {
        perView: 1,
        perTouch: 1,
      },
    },
  };
  const counter = true;
  const banerSlider = new Slider(idName, opt);

  banerSlider.init(counter);
};

reviewsSlider('reviewsSlider');
