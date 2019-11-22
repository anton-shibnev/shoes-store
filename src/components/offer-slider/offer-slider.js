import Slider from '../../js/common/Slider';

const offerSlider = (sliderId) => {
  const opt = {
    type: 'slider',
    startAt: 0,
    gap: 30,
    animationTimingFunc: 'ease-in-out',
    bound: true,
    rewind: false,
    perView: 4,
    breakpoints: {
      1399: {
        gap: 18,
      },
      767: {
        perView: 3,
        perTouch: 1,
      },
      550: {
        perView: 2,
        perTouch: 2,
        gap: 0,
      },
    },
  };

  const slider = new Slider(sliderId, opt);
  const counter = false;
  const animation = false;
  const maxVisible = true;

  slider.init(counter, animation, maxVisible);
};

offerSlider('offerSlider');
