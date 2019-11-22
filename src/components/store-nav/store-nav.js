import getTopPosotion from '../../js/common/getTopPosotion';
import CastomScroll from '../../js/common/CastomScroll';

const actionsStoreNavTabs = () => {
  const storeNav = document.getElementById('storeNav');
  if (!storeNav) return;
  const tabs = [...storeNav.querySelectorAll('.store-nav__menu-btn')];
  const menu = storeNav.querySelector('.store-nav__menu');

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('store-nav__menu-btn')) {
      const tab = e.target;
      const tabAttr = tab.getAttribute('store-menu');
      const storeContent = document.getElementById(tabAttr);

      tabs.map((el) => { return el.classList.remove('on'); });
      tab.classList.add('on');

      [...storeContent.parentNode.children].forEach((el) => {
        el.classList.remove('on');
      });

      storeContent.classList.add('on');
    }
  });
};

actionsStoreNavTabs();

getTopPosotion('storeNavInner');

const storeNavScroll = new CastomScroll('storeNavScroll');
storeNavScroll.init();
