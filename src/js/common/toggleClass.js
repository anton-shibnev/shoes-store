const toggleCLass = (elToClick, elToShow, addClass) => {
  elToClick.addEventListener('click', () => {
    elToShow.classList.toggle(addClass);
    elToClick.classList.toggle(addClass);
  });
};

export default toggleCLass;
