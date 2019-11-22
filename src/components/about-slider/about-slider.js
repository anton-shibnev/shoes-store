import Slider from '../../js/common/Slider';

const aboutSlider = (idName) => {
  const opt = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    dragThreshold: false,
    gap: 0,
    rewindDuration: 5000,
    animationTimingFunc: 'ease-in-out',
  };
  const counter = true;
  const banerSlider = new Slider(idName, opt);

  banerSlider.init(counter);
};

aboutSlider('aboutSlider');
