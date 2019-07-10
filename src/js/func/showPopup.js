const onPopup = (popupId) => {
  const popup = document.getElementById(popupId);
  const inner = popup.querySelector('.popup__inner');

  popup.style.display = 'block';

  popup.classList.add('on');
  document.body.classList.add('unscrolled');

  setTimeout(() => {
    inner.classList.add('on');
  }, 300);

}

const offPopup = (popupId) => {
  const popup = document.getElementById(popupId)
  const inner = popup.querySelector('.popup__inner');
  inner.classList.remove('on');

  setTimeout(() => {
    popup.classList.remove('on');
    document.body.classList.remove('unscrolled');
  }, 300);

  setTimeout(() => popup.style.display = 'none', 500);
}

const getPopup = () => {
  const $popups = document.querySelectorAll('.popup');
  const $btns = document.querySelectorAll('[data-popup]');
  if (!$popups && !$btns) return;

  $btns.forEach((el) => {
    const $that = el;
    const needPopup = $that.getAttribute('data-popup');
    const $popup = document.getElementById(needPopup);
    const $inner = $popup.querySelector('.popup__inner');

    if (!$inner) return;
    $popup.style.display = 'none';

    $that.addEventListener('click', () => {
      onPopup($popup.id)
    });

    $popup.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup__close') || !$inner.contains(event.target)) {
        offPopup($popup.id);
      }
    });
  });
};
