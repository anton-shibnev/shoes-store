const getTopPosotion = (elId) => {
  // eslint-disable-next-line no-debugger
  // debugger;
  const el = document.getElementById(elId);
  const header = document.querySelector('.header');
  if (!el && !header) return;

  el.style.top = `${header.clientHeight}px`;
};

export default getTopPosotion;
