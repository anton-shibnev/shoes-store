import Slider from '../../js/common/Slider';

const brandsSlider = () => {
  const opt = {
    type: 'carousel',
    perView: 3.04,
    gap: 0,
    focusAt: 'center',
    dragThreshold: false,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
      767: {
        perView: 1,
      },
    },
  };
  const mainSlider = new Slider('brandsSlider', opt);
  mainSlider.init();
};

brandsSlider();
