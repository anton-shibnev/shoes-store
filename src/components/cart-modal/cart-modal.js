import CastomScroll from '../../js/common/CastomScroll';
import hideCart from '../../js/common/hideCart';

const cartModalScroll = new CastomScroll('cartModalScroll');
cartModalScroll.init();

hideCart('.cart-modal__cart', '.cart-modal__cart-close');
