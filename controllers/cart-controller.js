const {
  getAllCarts,
  getCartByCartID
} = require('../services/cart-service');
const {getCartItemsByCartID} = require('../services/cartItem-service');

const getCartsRoute = (server) => {
  server.route({
    handler: () => getAllCarts(),
    method: 'GET',
    path: '/carts'
  });
};

const getCartByCartIDRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const cart = getCartByCartID(request.params.cartID);

      if (!cart) {
        return h.response().code(404);
      }

      return cart;
    },
    method: 'GET',
    path: '/carts/{cartID}'
  });
};

const getItemsInCartRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const cartID = request.params.cartID;
      const cart = getCartByCartID(cartID);

      if (!cart) {
        return h.response().code(404);
      }

      return getCartItemsByCartID(cartID);
    },
    method: 'GET',
    path: '/carts/{CartID}/cartItems'
  });
};

const initCartControllers = (server) => {
  getCartsRoute(server);
  getCartByCartIDRoute(server);
  getItemsInCartRoute(server);
};

module.exports = {
  initCartControllers
};
