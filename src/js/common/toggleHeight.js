const toggleHeight = (elToClick, elToShow) => {
  const el = elToShow;
  const elShowHeight = el.clientHeight;
  let num = 0;

  el.style.height = '0px';

  elToClick.addEventListener('click', () => {
    if (!num) {
      el.style.height = `${elShowHeight + 1}px`;
      num += 1;
    } else {
      el.style.height = '0px';
      num -= 1;
    }
  });
};

export default toggleHeight;
