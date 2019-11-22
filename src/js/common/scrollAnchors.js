import scrollToEl from './scrollToEl';

const scrollAnchors = () => {
  const anchors = document.querySelectorAll('[data-anchor]');
  if (!anchors) return;

  anchors.forEach((el) => {
    const that = el;

    that.addEventListener('click', (e) => {
      const attr = that.getAttribute('data-anchor');
      const scrollTo = document.querySelector(`#${attr}`);

      scrollToEl(scrollTo);
      e.preventDefault();
    });
  });
};

export default scrollAnchors;
