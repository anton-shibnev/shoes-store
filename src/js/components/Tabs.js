export default class Tabs {
  constructor(idName, className) {
    this.idName = idName;
    this.className = className;
  }

  init() {
    const $el = document.getElementById(this.idName);
    if (!$el) return;

    const $tabs = [...$el.querySelectorAll(`.${this.className}__menu-btn`)];
    const $menu = $el.querySelector(`.${this.className}__menu`);

    $menu.addEventListener('click', (e) => {
      if (e.target.classList.contains(`${this.className}__menu-btn`)) {
        const tab = e.target;
        const tabAttr = tab.getAttribute('tabs-menu');
        const storeContent = document.getElementById(tabAttr);

        $tabs.map((el) => { return el.classList.remove('on'); });
        tab.classList.add('on');

        [...storeContent.parentNode.children].map((el) => { return el.classList.remove('on'); });
        storeContent.classList.add('on');
      }
    });
  }
}
