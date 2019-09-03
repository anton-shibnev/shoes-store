export default class Modal {
  onPopup(popupId, delay) {
    const popup = document.getElementById(popupId);
    const inner = popup.children[0];
    const scrollbarWidth = (window.innerWidth - document.body.offsetWidth);
    const popupCallback = popup.getAttribute('data-callback');

    document.body.style.paddingRight = `${scrollbarWidth}px`;
    popup.style.display = 'block';

    popup.classList.add('on');
    document.body.classList.add('modal-opened');

    setTimeout(() => {
      return inner.classList.add('on');
    }, delay);
  }

  offPopup(popupId, delay) {
    const popup = document.getElementById(popupId);
    const inner = popup.children[0];

    inner.classList.remove('on');

    setTimeout(() => {
      document.body.style.paddingRight = '';
      popup.classList.remove('on');
      document.body.classList.remove('modal-opened');
    }, delay);

    setTimeout(() => popup.style.display = 'none', delay * 2);
  }

  init() {
    const $btns = [...document.querySelectorAll('[btn-popup]')];
    if ($btns.length === 0) return;

    $btns.map((el) => {
      const $that = el;
      const needPopup = $that.getAttribute('btn-popup');
      const $popup = document.getElementById(needPopup);
      const popupDelay = $popup.getAttribute('data-delay');
      const defaultDelay = 500;

      if (!$popup || $popup.children.length === 0) return;

      const $inner = $popup.children[0];

      $that.addEventListener('click', () => {
        $that.classList.add('on');
        this.onPopup($popup.id, popupDelay || (defaultDelay / 2));
      });

      // if click in layout
      $popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('close') || !$inner.contains(e.target)) {
          $that.classList.remove('on');
          this.offPopup($popup.id, popupDelay || defaultDelay);
        }
      });

      // if press Esc
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
          $that.classList.remove('on');
          this.offPopup($popup.id, popupDelay || defaultDelay);
        }
      });
    });
  }
}
