import toggleHeight from '../common/toggleHeight';

const hideBox = () => {
  const winWidth = document.documentElement.clientWidth
    || document.body.clientWidth;
  const elements = document.querySelectorAll('.box');

  if (!elements) return;
  if (winWidth >= 1280) return;

  elements.forEach((el) => {
    const that = el;
    const elToClick = that.parentNode.querySelector('.click');

    toggleHeight(elToClick, that);
  });
};

export default hideBox;
