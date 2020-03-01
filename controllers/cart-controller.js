const {
  getAllCarts,
  getCartByCartID
} = require('../services/cart-service');

const {getCartItemsByCartID} = require('../services/cartItem-service');

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
    path: '/carts/{cartID}',
    method: 'GET',
    handler: (request, h) => {
      const cart = getCartByCartID(request.params.cartID);
      
      if (!cart) {
        return h.response().code(404);
      }
      
      return cart;
    }
  });
};

const getItemsInCartRoute = (server) => {
  server.route({
    path: '/carts/{CartID}/cartItems',
    method: 'GET',
    handler: (request, h) => {
      const cartID = request.params.cartID;
      const cart = getCartByCartID(cartID);
      
      if (!cart) {
        return h.response().code(404);
      }
      
      return getCartItemsByCartID(cartID);
    }
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
