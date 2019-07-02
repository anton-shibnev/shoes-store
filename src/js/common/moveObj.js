const moveObj = (elClass, toClass, pos) => {
  const winWidth = document.documentElement.clientWidth
    || document.body.clientWidth;

  if (winWidth >= 1280) return;

  const elements = document.querySelectorAll(elClass);
  const to = document.querySelector(toClass);

  elements.forEach((el) => {
    if (pos === 'ap') to.appendChild(el);
    else if (pos === 'in') to.insertBefore(el, to.firstChild);
  });
};

export default moveObj;
