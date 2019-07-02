const stickyHeader = () => {
  const $header = document.querySelector('.header');
  const $page = document.querySelector('.App');
  const headerHeight = $header.offsetHeight;
  let position;

  $page.style.paddingTop = `${$header.clientHeight}px`;

  const checkSize = () => {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolled > position && scrolled > headerHeight) {
        $header.classList.add('scrolled');
      } else {
        $header.classList.remove('scrolled');
      }

      position = scrolled;
    });
  };
  checkSize();
  window.addEventListener('resize', checkSize);
};

export default stickyHeader;
