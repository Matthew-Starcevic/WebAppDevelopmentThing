const {
  getAllCarts,
  getCartByCartID
} = require('../services/cart-service');

const getCartsRoute = (server) => {
  server.route({
    path: '/carts',
    method: 'GET',
    handler: (request, h) => {
      return getAllCarts();
    }
  });
};

const getCartByCartIDRoute = (server) => {
  server.route({
    path: '/carts/{cartId}',
    method: 'GET',
    handler: (request, h) => {
      const cart = getCartByCartID(request.params.cartId);
      
      if (!cart) {
        return h.response().code(404);
      }
      
      return cart;
    }
  });
};

const initCartControllers = (server) => {
  getCartsRoute(server);
  getCartByCartIDRoute(server);
};

module.exports = {
  initCartControllers
};
