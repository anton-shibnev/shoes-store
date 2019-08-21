// popup

const onPopup = (popupId, delay) => {
  const popup = document.getElementById(popupId);
  const inner = popup.children[0];
  const scrollbarWidth = (window.innerWidth - document.body.offsetWidth);

  document.body.style.paddingRight = `${scrollbarWidth}px`;
  popup.style.display = 'block';

  popup.classList.add('on');
  document.body.classList.add('modal-opened');

  setTimeout(() => {
    inner.classList.add('on');
  }, delay);
};

const offPopup = (popupId, delay) => {
  const popup = document.getElementById(popupId);
  const inner = popup.children[0];

  inner.classList.remove('on');

  setTimeout(() => {
    document.body.style.paddingRight = '';
    popup.classList.remove('on');
    document.body.classList.remove('modal-opened');
  }, delay);

  setTimeout(() => popup.style.display = 'none', delay * 2);
};

const getPopup = () => {
  const $btns = document.querySelectorAll('[btn-popup]');
  if ($btns.length === 0) return;

  $btns.forEach((el) => {
    const $that = el;
    const needPopup = $that.getAttribute('btn-popup');
    const $popup = document.getElementById(needPopup);
    const popupDelay = $popup.getAttribute('data-delay');
    const defaultDelay = 500;

    if (!$popup || $popup.children.length === 0) return;

    const $inner = $popup.children[0];
    $popup.style.display = 'none';

    $that.addEventListener('click', () => {
      onPopup($popup.id, popupDelay || (defaultDelay / 2));
    });

    $popup.addEventListener('click', (e) => {
      if (e.target.classList.contains('close') || !$inner.contains(e.target)) {
        offPopup($popup.id, popupDelay || defaultDelay);
      }
    });
  });
};

getPopup();
