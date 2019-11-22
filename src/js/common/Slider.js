/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import Glide from '@glidejs/glide';

export default class Slider {
  constructor(sliderId, opt) {
    this.sliderId = sliderId;
    this.opt = opt;
    this.slider = document.getElementById(this.sliderId);
  }

  marginForSlider() {
    if (!this.slider) return;
    const $header = document.getElementById('header');

    this.slider.style.marginTop = `-${$header.clientHeight}px`;
  }

  counter(obj) {
    if (!this.slider) return;

    const $counterBox = this.slider.querySelector('.glide__counter');
    const itemsLength = this.slider.querySelectorAll('.glide__slide').length;

    obj.on(['mount.after', 'run'], () => {
      $counterBox.innerHTML = `
          <div class='glide__wrap-counter'>
            <span class="glide__counter-current">${obj.index + 1}</span> 
            <span class="glide__counter-all"> /${itemsLength}</span>
          </div>`;
    });
  }

  maxVisible(obj) {
    if (!this.slider) return;

    const itemsLength = this.slider.querySelectorAll('.glide__slide').length - 1;
    const leftBtn = this.slider.querySelector('.glide__arrow--left');
    const rightBtn = this.slider.querySelector('.glide__arrow--right');

    obj.on(['mount.after', 'run'], () => {
      let action = 'add';
      const { perView } = obj._o;

      (obj.index === 0) ? action = 'add' : action = 'remove';
      leftBtn.classList[action]('off');

      (obj.index + perView === itemsLength + 1) ? action = 'add' : action = 'remove';
      rightBtn.classList[action]('off');
    });
  }

  animateSlider(obj) {
    if (!this.slider) return;
    const items = [...this.slider.querySelectorAll('.glide__slide')];
    const header = document.querySelector('.header');
    const btnColored = this.slider.querySelector('.main-slider__arrow--left');
    const burger = document.querySelector('.burger');

    obj.on(['mount.after', 'run'], () => {
      items.map((el) => { return el.classList.remove('on'); });
      items[obj.index].classList.add('on');

      if (!this.slider.classList.contains('main-slider')) return;

      if (items[obj.index].classList.contains('twoface')) {
        header.classList.remove('header--icons-light');
        burger.classList.add('burger--dark');
        btnColored.classList.add('main-slider__arrow--two-face');
      } else {
        header.classList.add('header--icons-light');
        burger.classList.remove('burger--dark');
        btnColored.classList.remove('main-slider__arrow--two-face');
      }
    });
  }

  init(counter = false, animateSlider = false, maxVisible = false) {
    if (!this.slider) return;
    const glide = new Glide(this.slider, this.opt);

    if (counter !== false) this.counter(glide);
    if (maxVisible !== false) this.maxVisible(glide);
    if (animateSlider !== false) this.animateSlider(glide);

    glide.mount();
  }
}
