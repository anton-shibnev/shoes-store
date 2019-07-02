const getBurger = () => {
  const $burger = document.querySelector('#burger');
  const $drop = document.querySelector('#burgerDrop');

  if (!$burger || !$drop) return;

  $burger.addEventListener('click', () => {
    $burger.classList.toggle('on');
    $drop.classList.toggle('on');
    document.body.classList.toggle('unscrolled');
  });
};

export default getBurger;
