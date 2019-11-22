export default class Tabs {
  constructor(idName, className) {
    this.idName = idName;
    this.className = className;
  }

  init(mob = false) {
    const $master = document.getElementById(this.idName);
    if (!$master) return;

    const $tabs = [...$master.querySelectorAll(`.${this.className}__menu-btn`)];
    const $menu = $master.querySelector(`.${this.className}__menu`);

    const getContentEl = (el) => {
      const tabAttr = el.getAttribute('tabs-menu');
      return document.getElementById(tabAttr);
    };

    if (mob) {
      $tabs[0].classList.remove('on');
      getContentEl($tabs[0]).classList.remove('on');
    }

    $menu.addEventListener('click', (e) => {
      if (e.target.classList.contains(`${this.className}__menu-btn`)) {
        const tab = e.target;
        const content = getContentEl(tab);

        $tabs.map((el) => { return el.classList.remove('on'); });
        tab.classList.add('on');

        [...content.parentNode.children].map((el) => { return el.classList.remove('on'); });
        content.classList.add('on');

        if (mob) $master.classList.add('off');
      }
    });

    if (mob) {
      const $backBtn = [...document.querySelectorAll('.tabs-back')];

      $backBtn.map((el) => {
        return el.addEventListener('click', () => { $master.classList.remove('off'); });
      });
    }
  }
}
