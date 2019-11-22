/* eslint-disable no-unused-expressions */
import getTopPosotion from '../../js/common/getTopPosotion';
import CastomScroll from '../../js/common/CastomScroll';

const getActionsSearch = () => {
  const searchModal = document.getElementById('searchModal');
  if (!searchModal) return;
  const form = searchModal.querySelector('#searcModalForm');

  searchModal.addEventListener('click', (e) => {
    let action = 'add';

    form.contains(e.target) ? action = 'add' : action = 'remove';
    form.classList[action]('focus');
  });

  const inputForm = searchModal.querySelector('.search-modal__input-search');
  const resultBlock = searchModal.querySelector('.search-modal__result');

  inputForm.addEventListener('input', () => {
    if (inputForm.value.length > 0) {
      setTimeout(() => {
        resultBlock.classList.add('on');
      }, 300);
    }
  });
};

getActionsSearch();
getTopPosotion('searchModalInner');

const searchModalScroll = new CastomScroll('searchModalScroll');
searchModalScroll.init();
