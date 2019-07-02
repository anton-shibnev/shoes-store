import rect from '../common/rect';

const animateBox = () => {
  const cards = document.querySelectorAll('[animate-box]');
  if (!cards) return;

  cards.forEach((el) => {
    const that = el;
    const w = that.clientWidth;
    const h = that.clientHeight;
    const n = 20;
    const defaultProperty = `perspective(${w + h}px)`;
    const bgColor = 'rgba(18, 27, 40, 0.04)';
    const ratio = {
      w: w / n,
      h: h / n,
    };

    that.addEventListener('mousemove', (e) => {
      const deg = {
        x: ((e.clientX - rect(that).left) - (w / 2)) / ratio.w,
        y: ((e.clientY - rect(that).top) - (h / 2)) / ratio.h,
      };

      that.style.transform = `
      ${defaultProperty} 
      rotateX(-${deg.y}deg) 
      rotateY(${deg.x}deg)`;

      that.style.boxShadow = `
      -${deg.x * 1.5}px 
      -${deg.y}px 
      20px 
      20px 
      ${bgColor}`;
    });

    that.addEventListener('mouseleave', () => {
      that.style.transform = `${defaultProperty} rotateX(0deg) rotateY(0deg)`;
      that.style.boxShadow = '';
    });
  });
};

export default animateBox;
