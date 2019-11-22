import '../../libs/fakescroll-master/fakescroll.min';

export default class CastomScroll {
  constructor(elId) {
    this.elId = elId;
  }

  init() {
    const element = document.getElementById(this.elId);
    if (!element) return;

    element.fakeScroll();
  }
}
