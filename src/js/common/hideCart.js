const hideCart = (className, closeName) => {
  const $carts = [...document.querySelectorAll(className)];
  if ($carts.length === 0) return;

  $carts.forEach((that) => {
    const $cart = that;
    const closeBtn = $cart.querySelector(closeName);

    closeBtn.addEventListener('click', () => {
      $cart.classList.add('off');
      $cart.style.height = '0px';

      setTimeout(() => { return $cart.parentNode.removeChild($cart); }, 1000);
    });
  });
};

export default hideCart;
