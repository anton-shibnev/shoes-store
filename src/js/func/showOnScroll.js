const showOnScroll = () => {
  const boxes = document.querySelectorAll('[show-onscroll]');
  if (!boxes) return;

  const isVisible = (el) => {
    const coords = el.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;

    const topVisible = coords.top > 0 && coords.top < windowHeight;
    const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
  };

  const showVisible = () => {
    boxes.forEach((el) => {
      const that = el;

      if (isVisible(that)) {
        // delay ?
        that.classList.add('on');
      }
    });
  };

  window.addEventListener('scroll', showVisible);
  showVisible();
};

export default showOnScroll;
