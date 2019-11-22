const addClassOnClick = (el) => {
  const likes = [...document.querySelectorAll(el)];
  if (likes.length === 0) return;

  likes.map((e) => {
    const like = e;
    return like.addEventListener('click', () => { return like.classList.toggle('on'); });
  });
};

export default addClassOnClick;
