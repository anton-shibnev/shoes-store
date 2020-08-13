import Slider from '../../js/common/Slider';

const heroSlider = (id) => {
  const opt = {
    type: 'slider',
    startAt: 0,
    dragThreshold: false,
    gap: 0,
    animationDuration: 1500,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
      1024: {
        animationDuration: 700,
      },

      767: {
        dragThreshold: 200,
        animationDuration: 400,
        animationTimingFunc: 'linear',
      },
    },
  };
  const slider = new Slider(id, opt);

  slider.init(true, true);
  slider.marginForSlider();
};

heroSlider('heroSlider');
