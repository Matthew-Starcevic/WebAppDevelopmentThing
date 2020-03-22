const {
  getCartItemByCartItemID
} = require('../services/cartItem-service');

const getCartItemByCartItemIDRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const cartItem = getCartItemByCartItemID(request.params.cartItemID);

      if (!cartItem) {
        return h.response().code(404);
      }

      return cartItem;
    },
    method: 'GET',
    path: '/cartItems/{cartItemID}'
  });
};

const initCartItemControllers = (server) => {
  getCartItemByCartItemIDRoute(server);
};

module.exports = {
  initCartItemControllers
};
