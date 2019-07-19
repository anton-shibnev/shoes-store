const mdq = (num) => {
  return window.matchMedia(`(max-width: ${num}px)`);
};

export default mdq;
