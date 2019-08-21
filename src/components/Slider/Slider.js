// class MasterSlider {
//   constructor(sliderId, opt) {
//     this.slider = document.getElementById(sliderId);
//     this.counterBox = this.slider.querySelector('.glide__counter');
//     this.itemsLength = this.slider.querySelectorAll('.glide__slide').length;
//     this.opt = opt;
//   }

//   getMarginForSlider() {
//     const header = document.getElementById('header');
//     if (!header) return;

//     this.slider.style.marginTop = `-${header.clientHeight}px`;
//   }

//   getHeightForSliderItem() {
//     const topSale = document.getElementById('topSale');
//     if (!topSale) return;

//     const sliderItems = this.slider.querySelectorAll('.glide__slide');

//     sliderItems.forEach((element) => {
//       element.style.height = `calc(100vh - ${topSale.clientHeight}px)`;
//     });
//   }

//   init() {
//     const glide = new Glide(this.slider, this.opt);

//     glide.on(['mount.after', 'run'], () => {
//       this.counterBox.innerHTML = `<div class='glide__wrap-counter'>
//           <span class="glide__counter-current">${glide.index + 1}</span> 
//           <span class="glide__counter-all"> /${this.itemsLength}</span>
//         </div>`;
//     });

//     glide.mount();
//   }
// }
