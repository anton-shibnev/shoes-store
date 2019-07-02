import getCoords from './getCoords';

const scrollToEl = (el) => {
  window.scroll({
    top: getCoords(el).top,
    left: 0,
    behavior: 'smooth',
  });
};

export default scrollToEl;
