export default class Accordion {
  constructor(fatherName) {
    this.fatherName = fatherName;
  }

  init() {
    const accordion = [...document.querySelectorAll(`.${this.fatherName}__accordion`)];
    if (accordion.length === 0) return;

    accordion.map((el) => {
      const that = el;
      const btn = that.querySelector(`.${this.fatherName}__accordion-btn`);
      const panel = that.querySelector(`.${this.fatherName}__accordion-panel`);

      btn.addEventListener('click', (e) => {
        e.preventDefault();

        that.classList.toggle('on');

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      });
    });
  }
}
