import IMask from '../../lib/js/imask';

const maskPhone = () => {
  const phones = document.querySelectorAll('[mask-phone]');
  if (!phones) return;

  phones.forEach((el) => {
    const maskOptions = {
      mask: '+{0} (000) 000 - 00 - 00',
    };
    // eslint-disable-next-line no-unused-vars
    const mask = new IMask(el, maskOptions);
  });
};

export default maskPhone;
