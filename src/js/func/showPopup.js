const showPopup = () => {
  const popups = document.querySelectorAll('.popup');
  if (popups.length <= 0) return;

  const btns = document.querySelectorAll('[data-popup]');
  const b = document.body;

  btns.forEach((el) => {
    const needPopup = el.getAttribute('data-popup');
    const popup = document.querySelector(`#${needPopup}`);
    const popupWrap = popup.querySelector('.popup__wrap');

    el.addEventListener('click', (e) => {
      popup.classList.add('popup--show');
      b.classList.add('unscrolled');

      if (popupWrap === null) return;

      setTimeout(() => {
        popupWrap.classList.add('popup__wrap--show');
      }, 700);

      e.returnValue = false;
    });
  });

  popups.forEach((el) => {
    const close = el.querySelector('.popup__close');

    close.addEventListener('click', () => {
      el.classList.remove('popup--show');
      b.classList.remove('unscrolled');
    });
  });
};

export default showPopup;
