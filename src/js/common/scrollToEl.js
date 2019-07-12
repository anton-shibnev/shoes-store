// const paralaxHero = (el, wrapper) => {
//   const box = document.querySelector(el);
//   if (!box) return;

//   const scrollOptions = {
//     capture: false,
//     passive: true,
//     behavior: 'smooth',
//   }

//   const onScroll = () => {
//     box.style.transform = `
//     translateY(-${ window.scrollY/4}px)
//     translateX(-50%)
//     `;
//   }

//   onScroll();

//   if ('IntersectionObserver' in window) {
//     const referenceImage = document.querySelector(wrapper)

//     const observer = new IntersectionObserver(entries => {
//       let [{
//         isIntersecting
//       }] = entries

//       if (isIntersecting) {
//         window.addEventListener('scroll', onScroll, scrollOptions)
//       } else {
//         window.removeEventListener('scroll', onScroll, scrollOptions)
//       }
//     })

//     observer.observe(referenceImage)

//   } else {
//     window.addEventListener('scroll', onScroll, scrollOptions)
//   }
// }

// paralaxHero('.hero__box', '.hero__wrapper');
